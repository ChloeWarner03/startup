import React from 'react';

export function Login() {
    return (
        <main class="container-fluid text-center">
        <div class="login-box">
          <h1>Let's Whack-a-Mole!</h1>
          <form method="get" action="play.html">
            <small>Enter a valid email. (Validation via MailboxLayer API goes here)</small>
            <div class="input-group mb-3">
              <span class="input-group-text">✉</span>
              <input class="form-control" type="text" placeholder="email@email.com" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">ꗃ</span>
              <input class="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" class="btn btn-outline-light">Login</button>
            <button type="submit" class="btn  btn-outline-light">Create an Account</button>
          </form>
        </div>
      </main> 
    );
}