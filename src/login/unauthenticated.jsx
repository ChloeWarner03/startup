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
                    <span className="input-group-text">✉</span>
                    <input className="form-control" type="text" placeholder="email@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">ꗃ</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-outline-light">Login</button>
                <button type="submit" className="btn  btn-outline-light">Create an Account</button>
        </div >

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
