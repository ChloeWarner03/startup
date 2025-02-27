/*

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
            {Highscores will be saved in the database }
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
} */

    import React from 'react';
    import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
    import { Login } from './login/login';
    import { Play } from './play/play';
    import { Scores } from './scores/scores';
    import { About } from './about/about';
    import { AuthState } from './login/authState';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './app.css';
    
    function App() {
      const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
      const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
      const [authState, setAuthState] = React.useState(currentAuthState);
    
      return (
        <BrowserRouter>
          <div className='body bg-dark text-light'>
            <header className='container-fluid'>
              <nav className='navbar fixed-top navbar-dark'>
                <div className='navbar-brand'>
                  Simon<sup>&reg;</sup>
                </div>
                <menu className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to=''>
                      Login
                    </NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='play'>
                        Play
                      </NavLink>
                    </li>
                  )}
                  {authState === AuthState.Authenticated && (
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='scores'>
                        Scores
                      </NavLink>
                    </li>
                  )}
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='about'>
                      About
                    </NavLink>
                  </li>
                </menu>
              </nav>
            </header>
    
            <Routes>
              <Route
                path='/'
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                    }}
                  />
                }
                exact
              />
              <Route path='/play' element={<Play userName={userName} />} />
              <Route path='/scores' element={<Scores />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
    
            <footer className='bg-dark text-dark text-muted'>
              <div className='container-fluid'>
                <span className='text-reset'>Author Name(s)</span>
                <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
                  Source
                </a>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      );
    }
    
    function NotFound() {
      return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
    }
    
    export default App;
    