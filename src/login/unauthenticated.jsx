import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <>
            <div className="container-fluid text-center">
                <div className="login-box">
                    <h1>Let's Whack-a-Mole!</h1>
                    <small>Enter a valid email. (Validation via MailboxLayer API goes here)</small>

                    <div className="input-group">
                        <span className="input-group-text">✉</span>
                        <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Email" />
                    </div>

                    <div className="input-group mt-2">
                        <span className="input-group-text">ꗃ</span>
                        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>

                    <div className="mt-3">
                        <Button onClick={() => loginUser()} disabled={!userName || !password}>
                            Login
                        </Button>
                        <Button onClick={() => createUser()} disabled={!userName || !password} className="ms-2">
                            Create An Account
                        </Button>
                    </div>
                </div>

                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </>
    );

}