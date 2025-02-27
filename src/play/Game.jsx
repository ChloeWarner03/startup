import React, { useState, useEffect } from "react";
import "./Game.css";
import {Scores} from "../scores/scores";

export function Game({ userName }) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [moleIndex, setMoleIndex] = useState(null);
  const [moleSpeed , setMoleSpeed] = useState(1000);

  useEffect(() => {
    let timeCounter;
    let moleInterval;

    if (!gameOver) {
      setScore(0);
      setTimer(0);
      setMoleSpeed(1000);

      // Timer countup
      timeCounter= setInterval (() => {
        setTimer((prev) => prev + 1);
      }, 1000);

      
      // Mole random appearance
      moleInterval = setInterval(() => {
        setMoleIndex(Math.floor(Math.random() * 9));
      }, moleSpeed);
    }
  
    return () => {
      clearInterval(timeCounter);
    };
  }, [gameOver]); // Runs when game starts or stops
  
  const handleStart = () => {
    if (gameOver) {
      setGameOver(false);
      setScore(0);
      setTimer(0);
      setMoleSpeed(1000);
    }
  };

  const handleEnd = () => {
    setGameOver(true);
    saveScore(score);
    alert(`Game Ended!\nYour final score: ${score}`);
  };

  const handleMoleClick = (index) => {
    if (!gameOver && index === moleIndex) {
      setScore((prev) => prev + 1);
      setMoleIndex(null);
      setMoleSpeed((prevSpeed) => Math.max(300, prevSpeed * 0.5));
    }
  };

  function saveScore(finalScore) {
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: finalScore, date: date };
  
    const storedScores = JSON.parse(localStorage.getItem("scores")) || [];
    storedScores.push(newScore);
    localStorage.setItem("scores",JSON.stringify(storedScores));

  }

  return (
    <div className="game-container">

      
      {/* Game Info */}
      <div className="game-info">
        <span>Score: <span id="score">{score}</span></span>
        <br />
        <span>Time: <span id="time">{timer}</span>s</span>
      </div>

      {/* Game Controls */}
      <button id="startButton" onClick={handleStart} disabled={!gameOver}>
        Start Game
      </button>
      <button id="endButton" onClick={handleEnd} disabled={gameOver}>
        End Game
      </button>

      {/* Game Grid */}
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
  );
}