import React from 'react' 
import './Login.css'

function Login() {
  return (
    <div>
      <div className="go-back"><i className='fa fa-arrow-left'></i></div>
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1>
          SIGN IN
        </h1>
        <form action="">
          
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />
          <button>LOGIN</button>
          <a href="">Do not remember the password? </a>
          <a href="">CREATE NEW ACCOUNT</a>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login