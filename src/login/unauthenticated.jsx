import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userName, password: password }),
            });
            
            if (response.ok) {
                const user = await response.json();
                localStorage.setItem('userName', user.email);
                props.onLogin(user.email);
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        } catch (error) {
            setDisplayError('⚠ Error connecting to service');
        }
    }

    async function createUser() {
        try {
            const response = await fetch('/api/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userName, password: password }),
            });
            
            if (response.ok) {
                const user = await response.json();
                localStorage.setItem('userName', user.email);
                props.onLogin(user.email);
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        } catch (error) {
            setDisplayError('⚠ Error connecting to service');
        }
    }

    return (
        <>
            <div className="container-fluid text-center">
                <div className="login-box">
                    <h1>Let's Whack-a-Mole!</h1>
                    <small>Enter a valid email. (Validation via MailboxLayer API goes here)</small>

                    <div className="input-group">
                        <span className="input-group-text">✉</span>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)} 
                            placeholder="Email" 
                        />
                    </div>

                    <div className="input-group mt-2">
                        <span className="input-group-text">ꗃ</span>
                        <input 
                            className="form-control" 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                        />
                    </div>
                    <Button 
                        variant="primary"
                        className="mt-2 me-2" 
                        onClick={() => loginUser()} 
                        disabled={!userName || !password}
                    >
                        Login
                    </Button>
                    <Button 
                        variant="secondary"
                        className="mt-2" 
                        onClick={() => createUser()} 
                        disabled={!userName || !password}
                    >
                        Create
                    </Button>
                </div>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}

/*
return (
    <>
      <div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
*/