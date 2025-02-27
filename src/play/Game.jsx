/*


import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './Game.css';

export function Game({ userName }) {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timer;
    if (gameActive && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [gameActive, time]);

  useEffect(() => {
    let moleInterval;
    if (gameActive) {
      moleInterval = setInterval(() => {
        const newMoles = Array(9).fill(false);
        newMoles[Math.floor(Math.random() * 9)] = true;
        setMoles(newMoles);
      }, 800);
    }
    return () => clearInterval(moleInterval);
  }, [gameActive]);

  function startGame() {
    setScore(0);
    setTime(60);
    setGameActive(true);
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  function endGame() {
    setGameActive(false);
    GameNotifier.broadcastEvent(userName, GameEvent.End, { name: userName, score, date: new Date().toLocaleDateString() });
  }

  function whackMole(index) {
    if (moles[index]) {
      setScore((prev) => prev + 1);
      setMoles(Array(9).fill(false));
    }
  }

  return (
    <div className='game'>
      <div className='game-info'>
        <span>Score: {score}</span>
        <br />
        <span>Time: {time}</span>
      </div>
      <div className='button-container'>
        {moles.map((mole, index) => (
          <button
            key={index}
            className={mole ? 'mole' : 'hole'}
            onClick={() => whackMole(index)}
          ></button>
        ))}
      </div>
      <Button variant='primary' onClick={startGame} disabled={gameActive}>
        Start Game
      </Button>
    </div>
  );
}
*/

import React, { useState, useEffect } from "react";
import "./Game.css";

export function Game({ userName }) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(true);
  const [moleIndex, setMoleIndex] = useState(null);

  useEffect(() => {
    let countdown;
    let moleInterval;

    if (!gameOver) {
      setScore(0);
      setTimer(60);

      // Timer countdown
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            clearInterval(moleInterval);
            setGameOver(true);
            alert(`Game Over!\nYour final score: ${score}`);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);

      // Mole random appearance
      moleInterval = setInterval(() => {
        setMoleIndex(Math.floor(Math.random() * 9));
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
      clearInterval(moleInterval);
    };
  }, [gameOver]);

  const handleStart = () => {
    if (gameOver) {
      setGameOver(false);
      setScore(0);
      setTimer(60);
    }
  };

  const handleEnd = () => {
    setGameOver(true);
    alert(`Game Ended!\nYour final score: ${score}`);
  };

  const handleMoleClick = (index) => {
    if (!gameOver && index === moleIndex) {
      setScore((prev) => prev + 1);
      setMoleIndex(null);
    }
  };

  return (
    <div className="game-container">
      <h2>Whack-a-Mole, {userName}!</h2>
      <p id="score">Score: {score}</p>
      <p id="timer">Time: {timer}s</p>
      <button id="startButton" onClick={handleStart} disabled={!gameOver}>
        Start Game
      </button>
      <button id="endButton" onClick={handleEnd} disabled={gameOver}>
        End Game
      </button>
      <div className="grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`hole ${index === moleIndex ? "mole" : ""}`}
            onClick={() => handleMoleClick(index)}
          ></div>
        ))}
      </div>
    </div>



<div className="game-info">
<span>Score: <span id="score">0</span></span>
<br />
<span>Time: <span id="time">60</span></span>
</div>

<button type="submit" className="btn btn-outline-light" id="start-game">Start Game</button>
  );
}
