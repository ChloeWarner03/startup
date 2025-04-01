import React from 'react';
import './scores.css';
import { GameEvent, GameNotifier } from '../play/gameNotifier';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  // Function to fetch scores
  const fetchScores = async () => {
    try {
      const response = await fetch('/api/scores');
      if (response.ok) {
        const data = await response.json();
        setScores(data);
      }
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  };

  // Handle game events
  React.useEffect(() => {
    const handleGameEvent = (event) => {
      if (event.type === GameEvent.Score || event.type === GameEvent.End) {
        setScores(prevScores => {
          // Check if score already exists
          const newScore = event.value;
          const existingIndex = prevScores.findIndex(s => 
            s.name === newScore.name && 
            s.score === newScore.score && 
            s.date === newScore.date
          );

          let updatedScores;
          if (existingIndex >= 0) {
            // Score already exists, don't add it again
            updatedScores = [...prevScores];
          } else {
            // Add new score
            updatedScores = [...prevScores, newScore];
          }

          // Sort by score (highest first) and take top 10
          return updatedScores
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
        });
      }
    };

    // Add event handler
    GameNotifier.addHandler(handleGameEvent);

    // Initial fetch
    fetchScores();

    // Cleanup
    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    // Only show top 10 scores
    const topScores = scores.slice(0, 10);
    for (const [i, score] of topScores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name ? score.name.split('@')[0] : 'Anonymous'}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid text-center'>
      <h1>🏆HighScores:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>
    </main>
  );
}