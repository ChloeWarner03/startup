import React from 'react';
import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);

    // Fetch scores from the backend
    const fetchScores = async () => {
        try {
            const response = await fetch('/api/scores', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                setScores(data);
            } else {
                console.error('Failed to fetch scores');
            }
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    };

    React.useEffect(() => {
        fetchScores();
    }, []);

    const sortedScores = [...scores].sort((a, b) => b.score - a.score);
    const highScores = sortedScores.slice(0, 4);

    return (
        <main className='container-fluid text-center'>
            <h1>🏆HighScores:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Rank #</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {highScores.length > 0 ? (
                        highScores.map((score, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{score.name?.split('@')[0]}</td>
                                <td>{score.score}</td>
                                <td>{score.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4">Be the first to score!</td></tr>
                    )}
                </tbody>
            </table>
        </main>
    );
}