import React from 'react';

export function Scores() {
    return (
        <main className="container-fluid text-center text-light">

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
            {/* Highscores will be saved in the database */}
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
                    <tr>
                        <td>1</td>
                        <td>James</td>
                        <td>50</td>
                        <td>January 24, 2025</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dan</td>
                        <td>41</td>
                        <td>January 24, 2025</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cookie</td>
                        <td>32</td>
                        <td>January 24, 2025</td>
                    </tr>
                </tbody>
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
                <tbody>s
                    <tr>
                        <td>Dan</td>
                        <td>35</td>
                        <td>January 21, 2025</td>
                    </tr>
                    <tr>
                        <td>Dan</td>
                        <td>32</td>
                        <td>January 19, 2025</td>
                    </tr>
                    <tr>
                        <td>Dan</td>
                        <td>27</td>
                        <td>January 17, 2025</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </main>
    );
}
