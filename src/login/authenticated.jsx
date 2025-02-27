import React from 'react';
import { useNavigate } from 'react-router-dom';



import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button  onClick={() => navigate('/play')} className="btn btn-outline-light" >
        Play
      </Button>
      <Button onClick={logout} className="btn  btn-outline-light">
        Logout
      </Button>
    </div>
  );
}