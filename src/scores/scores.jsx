import React from 'react';

import './scores.css';

export function Scores() {
    const [scores, setScores] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

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
        <main className='container-fluid bg-secondary text-center'>
            <table className='table'>
                <thead className='table'>
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

export function Scores() {
    return (
        <main className='container-fluid bg-secondary text-center'>

            <div id="picture" className="picture-box">
                <img
                    width="45px"
                    height="45px"  // Set height equal to width for a circular shape
                    src="molewithcrown.png"
                    style={{ borderRadius: '50%' }}
                    alt="KingMole"
                />
            </div>

            <h1>🏆HighScores:</h1>
            {/*Highscores will be saved in the database*/}
            <table className="table" >
                <thead>
                    <tr>
                        <th>Rank #</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id='scores'>{scoreRows}</tbody>
            </table>
            <br />
            <h1>Your Scores:</h1>
            <table className="table">
                <thead>
                    <tr>
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
