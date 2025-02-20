import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
    return (
        <BrowserRouter>
            <div className='bg-dark text-light' style={{ height: '100vh' }}>
                <header className="container-fluid">
                    <nav className="navbar navbar-dark">
                    <img width="55px" src="/molewithcrown.png" style={{ borderRadius: '50%' }} alt="KingMole" />
                        <div className="navbar-brand" href="#">
                            Whack-a-Mole<sup>&reg;</sup>
                        </div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>
                                    Login
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='play'>
                                    GamePlay
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='scores'>
                                    Scores
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>
                                    About Whack-a-Mole
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className='text-white'>
                    <div className='container-fluid'>
                        <span className='text-reset'>Whack-a-Mole created by Chloe Warner</span>
                        <NavLink className='text-reset' to='https://github.com/ChloeWarner03/startup'>
                            Github 
                        </NavLink>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
  );
}
            function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}