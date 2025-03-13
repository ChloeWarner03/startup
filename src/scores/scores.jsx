import React from 'react';

import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    const sortedScores = [...scores.sort((a, b) => b.score - a.score)]
    const highScores = sortedScores.slice(0, 4);
    const userScores = sortedScores.slice(0, 4);

    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{score.name.split('@')[0]}</td>
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
        <main className='container-fluid  text-center'>
            <div id="picture" className="picture-box">
                <img
                    width="70px"
                    height="70px"
                    src="molewithcrown.png"
                    style={{ borderRadius: '50%' }}
                    alt="KingMole"
                />
            </div>

            <h1>🏆HighScores:</h1>
            <table className="table" >
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
                        highScores.map((scores, index) => (
                            <tr key={index}>
                                <td> {index + 1}</td>
                                <td> {scores.name.split("@")[0]}</td>
                                <td>{scores.score}</td>
                                <td>{scores.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4">Be the first to score!</td></tr>
                    )
                    }
                </tbody>
            </table>
        </main>
    );
}