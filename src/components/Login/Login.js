import React, {useState, useEffect} from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login-img">
          <div className="login-background">
            <div className="login">
              <h1>Login</h1>
              <form>
                <input type="text" name="userEmail"  placeholder="Username" required="required" />
                <input type="password" name="userPassword"  placeholder="Password" required="required" />
                <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
              </form>
              <br />
              or
              <div>
                <button className="loginBtn loginBtn--facebook">Login with facebook</button>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Login