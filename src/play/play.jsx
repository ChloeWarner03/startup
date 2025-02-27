/*import React from 'react';
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

import React from 'react';

import { Players } from './players';
import { Game } from './Game';

export function Play(props) {
  return (
    <main>
      <Players userName={props.userName} />
      <Game userName={props.userName} />
    </main>
  );
}
