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

  const handleAuthChange = (userName, authState) => {
    setAuthState(authState);
    setUserName(userName);

    if (authState === AuthState.Authenticated) {
      localStorage.setItem('userName', userName); // Save userName on login
    } else {
      localStorage.removeItem('userName'); // Remove userName on logout
    }
  };

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
                <NavLink className='nav-link' to={authState === AuthState.Unauthenticated ? '' : '/play'}>
                  {authState === AuthState.Unauthenticated ? 'Login' : 'Logout'}
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/play'>
                      Play
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/scores'>
                      Scores
                    </NavLink>
                  </li>
                </>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
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
                onAuthChange={handleAuthChange}
              />
            }
            exact
          />
          <Route path='/play' element={<Play userName={userName} />} />
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

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }
}

export default App;
