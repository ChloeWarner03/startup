import React, { useState, useEffect } from "react";
import "./Game.css";
import bombImg from "./bomb.png";

const GameNotifier = {
  broadcastEvent: (userName, event, data) => {
    console.log(`${userName} triggered event: ${event}`, data);
    // Placeholder for broadcasting the event, e.g., WebSocket
  }
};

const GameEvent = {
  Start: 'start',
  End: 'end'
};

export function Game({ userName }) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [moleIndex, setMoleIndex] = useState(null);
  const [moleSpeed, setMoleSpeed] = useState(1000);
  const [bombIndex, setBombIndex] = useState(null);

// Timer Effect
useEffect(() => {
  if (gameOver) return;

  setScore(0);
  setTimer(0);
  setMoleSpeed(1000);
  setBombIndex(null);

  const timeCounter = setInterval(() => {
    setTimer((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timeCounter);
}, [gameOver]);

// Mole Movement Effect
useEffect(() => {
  if (gameOver) return;

  const updateObjects = () => {
    const newIndex = Math.floor(Math.random() * 9);
    if (Math.random() < 0.2) {
      // 20% chance to spawn a bomb
      setMoleIndex(null);
      setBombIndex(newIndex);
    } else {
      setBombIndex(null);
      setMoleIndex(newIndex);
    }
  };

  updateObjects();
  const moleInterval = setInterval(updateObjects, moleSpeed);

  return () => clearInterval(moleInterval);
}, [moleSpeed, gameOver]);

const handleStart = () => {
  if (gameOver) {
    setGameOver(false);
    setScore(0);
    setTimer(0);
    setMoleSpeed(1000);
    setBombIndex(null);
  }

  GameNotifier.broadcastEvent(userName, GameEvent.Start, { gameStatus: 'started' });
};

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    alert(`Game Ended!\nYour final score: ${score}`);
}


const handleMoleClick = (index) => {
  if (!gameOver && index === moleIndex) {
    setScore((prev) => prev + 1);
    setMoleIndex(null);

    // Update mole speed dynamically
    setMoleSpeed((prevSpeed) => Math.max(300, prevSpeed * 0.98));
  }
};

const handleBombClick = () => {
  if (!gameOver) {
    handleEnd();
  }
};

const handleEnd = () => {
  saveScore(score);  // Call the saveScore function
  setGameOver(true);
};

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
          onClick={() => (index === bombIndex ? handleBombClick() : handleMoleClick(index))}
        >
          {index === bombIndex && <img src={bombImg} alt="Bomb" className="bomb" />}
        </div>
      ))}
    </div>
  </div>
);
}
