import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, Link, NavLink } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="bg-dark text-light" style="height: 100vh;">
                <header class="container-fluid">
                    <nav class="navbar navbar-dark">
                        <img 
                            width="55px" 
                            src="molewithcrown.png" 
                            style="border-radius: 50%;" 
                            alt="KingMole" />
                            <div class="navbar-brand" href="#">Whack-a-Mole<sup>&reg;</sup></div>
                                 <menu class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="index.html">
                                          Home
                                         </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="play.html">
                                            GamePlay
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="scores.html">
                                            Scores
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">
                                            About Whack-a-Mole
                                        </a>
                                    </li>
                                 </menu>
                            </div>
                        </nav>
                 </header>

                <main>App components go here</main>

                <footer className="text-white">
                    <div className="container-fluid">
                        <span className="text-reset">Whack-a-Mole created by Chloe Warner</span>
                        <br />
                        <a className="text-reset" href="https://github.com/ChloeWarner03/startup">GitHub Repository</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
