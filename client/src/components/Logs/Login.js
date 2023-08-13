import React from 'react'
import { Link } from 'react-router-dom';  
import myImage from '../../assets/elephantGIF.gif';
import google from '../../assets/google.svg';
import candle from '../../assets/Candle.gif'

function Login() {
  return (
    <div>
      <div className="login-page-fp-container">
        <div className='login-page-left'>
          <h1 className="login-page-left-title">Sign in and chat <br />with strangers around world!</h1>
          <div className='login-page-img-container'>
            <img src={myImage} alt='illustration' className="login-page-illustration"></img>
          </div>
        </div>
        <div className='login-page-right'>
          <div>
          <img src={candle} alt='illustration' className="login-page-candle"></img>
          </div>
          <div>
            <form className='form-container'>
              <input type="text" labep="username" name="username" placeholder="Email or Username" autoComplete="off" className="username-input" />
              <input type="password" label="password" name="password" placeholder="Password" autoComplete="off" className="password-input" />
              <button type="submit" className="login-page-btn">Sign in</button>
            </form>
            <div className='separator'></div>
            <div className="login-page-socials">
              <div className='login-page-socials-container'><img src={google} alt='google' className="login-page-socials-img"></img>Sign in with google</div>
            </div>
            <div className='text-to-register'>
              <span>You don't have an account ? create one <Link to="/register">here</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login