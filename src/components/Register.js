import React from 'react'

import { Auth0Context } from '../store/auth0-context'

function Register() {
    const auth0 = useContext(Auth0Context);

    return (
        <div className="container signup-container">
            <Navbar />
            <h2>Sign up</h2>
            <form>
                <div className="form-group">
                    <label for="userName">Email address</label>
                    <input type="email" className="form-control" id="userName" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                    <label for="fullname">Full name</label>
                    <input type="text" className="form-control" id="fullname" />
                </div>
                <button type="submit" className="btn btn-success" onClick={handleSignup}>Sign up</button>
            </form>
        </div>
    )
}

export default Register
