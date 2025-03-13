import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  async function logout() {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Logout failed:', response.status);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('userName');
      props.onLogout();
    }
  }

  return (
    <div className="text-center mt-4">
      <div className='playerName mb-3'>{props.userName}</div>
      <Button 
        variant="primary"
        onClick={() => navigate('/play')} 
        className="me-2"
      >
        Play
      </Button>
      <Button 
        variant="secondary"
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}