import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const [isValidating, setIsValidating] = React.useState(false);

    async function loginUser() {
        try {
            if (!userName || !password) {
                setDisplayError('⚠ Please enter both email and password');
                return;
            }

            // Validate email format first
            if (!validateEmailFormat(userName)) {
                setDisplayError('⚠ Please enter a valid email address format');
                return;
            }

            setIsValidating(true);

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
        } finally {
            setIsValidating(false);
        }
    }

    async function createUser() {
        try {
            if (!userName || !password) {
                setDisplayError('⚠ Please enter both email and password');
                return;
            }

            setIsValidating(true);

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
        } finally {
            setIsValidating(false);
        }
    }

    return (
        <>
            <div className="container-fluid text-center">
                <div className="login-box">
                    <h1>Let's Whack-a-Mole!</h1>
                    <div className="input-group">
                        <span className="input-group-text">✉</span>
                        <input 
                            className="form-control" 
                            type="email" 
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
                        disabled={!userName || !password || isValidating}
                    >
                        {isValidating ? 'Validating...' : 'Login'}
                    </Button>
                    <Button 
                        variant="secondary"
                        className="mt-2" 
                        onClick={() => createUser()} 
                        disabled={!userName || !password || isValidating}
                    >
                        {isValidating ? 'Validating...' : 'Create'}
                    </Button>
                </div>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}