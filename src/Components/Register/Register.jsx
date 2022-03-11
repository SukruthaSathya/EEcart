import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
      <div className="go-back"><i className='fa fa-arrow-left'></i></div>
      <div className='reg-container'>
        <div className='reg-wrapper'>
          <h1>
            CREATE AN ACCOUNT
          </h1>
          <form action="">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Confirm Password' />
            <span className="agreement">
              By creating an account, I consent to the processing of my personal data in accordance with the <b className='privacy-policy'>PRIVACY POLICY</b>.
            </span>
            <button>CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register