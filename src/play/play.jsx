/* import React from 'react';
import './play.css';

export function Play() {
    return (
        <main>
            <div className="players">
                Highscores:
                <span className="player-name">Mystery player</span>
                <div id="notification">
                    <div className="event"><span className="player-event"></span> Ali's new highscore ###</div>
                    <div className="event"><span className="player-event"></span> Savannah's new highscore ###</div>
                    <div className="event"><span className="player-event"></span> Sierra's new highscore ###</div>
                </div>
            </div>


            <div className="game-info">
                <span>Score: <span id="score">0</span></span>
                <br />
                <span>Time: <span id="time">60</span></span>
            </div>

            <button type="submit" className="btn btn-outline-light" id="start-game">Start Game</button>


            <div className="game">
                <div className="button-container">
                    <button className="button-top-left"></button>
                    <button className="button-top-middle"></button>
                    <button className="button-top-right"></button>
                    <button className="button-middle-left"></button>
                    <button className="button-middle-middle"></button>
                    <button className="button-middle-right"></button>
                    <button className="button-bottom-left"></button>
                    <button className="button-bottom-middle"></button>
                    <button className="button-bottom-right"></button>
                </div>
            </div>
            <br />

        </main>
    );
} */

    import React, { useState, useEffect } from 'react';
    import './play.css';
    
    export function Play() {
        const [score, setScore] = useState(0);
        const [time, setTime] = useState(60);
        const [molePosition, setMolePosition] = useState(null);
        const [gameActive, setGameActive] = useState(false);
    
        useEffect(() => {
            let timer;
            if (gameActive && time > 0) {
                timer = setInterval(() => {
                    setTime(prevTime => prevTime - 1);
                }, 1000);
            } else if (time === 0) {
                setGameActive(false);
            }
            return () => clearInterval(timer);
        }, [gameActive, time]);
    
        useEffect(() => {
            let moleTimer;
            if (gameActive) {
                moleTimer = setInterval(() => {
                    setMolePosition(Math.floor(Math.random() * 9));
                }, 800);
            }
            return () => clearInterval(moleTimer);
        }, [gameActive]);
    
        const startGame = () => {
            setScore(0);
            setTime(60);
            setGameActive(true);
            setMolePosition(null);
        };
    
        const whackMole = (index) => {
            if (index === molePosition) {
                setScore(score + 1);
                setMolePosition(null);
            }
        };
    
        return (
            <main>
                <div className="players">
                    Highscores:
                    <span className="player-name">Mystery player</span>
                    <div id="notification">
                        <div className="event"><span className="player-event"></span> Ali's new highscore ###</div>
                        <div className="event"><span className="player-event"></span> Savannah's new highscore ###</div>
                        <div className="event"><span className="player-event"></span> Sierra's new highscore ###</div>
                    </div>
                </div>
    
                <div className="game-info">
                    <span>Score: <span id="score">{score}</span></span>
                    <br />
                    <span>Time: <span id="time">{time}</span></span>
                </div>
    
                <button type="button" className="btn btn-outline-light" id="start-game" onClick={startGame} disabled={gameActive}>
                    Start Game
                </button>
    
                <div className="game">
                    <div className="button-container">
                        {[...Array(9)].map((_, index) => (
                            <button 
                                key={index} 
                                className={index === molePosition ? "mole" : "hole"} 
                                onClick={() => whackMole(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
    