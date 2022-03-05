import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="left">
            <h1>STYLE.</h1>
            <p className="desc">There are many variations of passages of lorem ipsum available, but the majority have suffered 
            alteration in some form, by injected humour, or randomised words which dont lookeven slighlty believable.</p>
            <div className="social-container">
                <div className='social-icon' id='fb'>
                    <i className='fa fa-facebook-square	'></i>
                </div>
                <div className='social-icon' id='ig'>
                    <i className='fa fa-instagram	'></i>
                </div>
                <div className='social-icon' id='tw'>
                    <i className='fa fa-twitter-square	'></i>
                </div>
                <div className='social-icon' id='pt'>
                    <i className='fa fa-pinterest-square'></i>
                </div>
            </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
    </div>
  )
}

export default Footer