import React from 'react';


export function Login() {
    return (
        <main className="container-fluid text-center">
            <div className="login-box">
                <h1>Let's Whack-a-Mole!</h1>
                <small>Enter a valid email. (Validation via MailboxLayer API goes here)</small>
                <form method="get" action="play.html">
                    <div className="input-group mb-3">
                        <span className="input-group-text">✉</span>
                        <input className="form-control" type="text" placeholder="email@email.com" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">ꗃ</span>
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-outline-light">Login</button>

                    <button type="submit" className="btn  btn-outline-light">Create an Account</button>
                </form>
            </div>
        </main>
    );
}