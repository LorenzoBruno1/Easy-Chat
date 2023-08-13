import React from 'react'
import { Link } from 'react-router-dom';
import orphans from '../../assets/orphans.gif'
import candle from '../../assets/Candle.gif'

function Signup() {
  return (
    <div>
      <div className="login-page-fp-container">
        <div className='register-page-left'>
          <h1 className="login-page-left-title">Register and join <br />millions of strangers around world!</h1>
          <div className='login-page-img-container'>
            <img src={orphans} alt='illustration' className="login-page-illustration"></img>
          </div>
        </div>
        <div className='login-page-right'>
          <div>
          <img src={candle} alt='illustration' className="login-page-candle"></img>
          </div>
          <div>
            <form className='form-container'>
            <div className='register-page-name-container'>
                <input type="text" label="firstname"name="first-name" placeholder="First Name" autoComplete="off" className="firstname-input"></input>
                <input type="text" label="lastname" name="last-name" placeholder="Last Name" autoComplete="off" className="lastname-input"></input>
              </div>
              <input type="text" label="username" name="username" placeholder="Username" autoComplete="off" className="username-input" />
              <input type="text" label="email" name="email" placeholder="Enter your email" autoComplete="off" className="username-input" />
              <input type="password" name="password" placeholder="Password" autoComplete="off" className="password-input" />
              <button type="submit" className="login-page-btn">Sign up</button>
            </form>
            <div>
              <span className='text-to-login'>You already have an account ? sign in  <Link to="/">here</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup