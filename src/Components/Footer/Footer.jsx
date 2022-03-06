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
        <div className="footer-center">
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Man Fashion</li>
                <li>Woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Cart</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="right">
            <h3>Contact</h3>
            <div className="contact-item">
                <i className='fa fa-map-marker	'></i>
                <p>622 Dixie Path, South Tobinchester 98336</p>
                
            </div>
            <div className="contact-item">
                <i className='fa fa-phone'></i>
                <p>+1234 56 78 90</p>
                
            </div>
            <div className="contact-item">
                <i className='fa fa-envelope'></i>
                <p>contact@style.dev</p>
            </div>
            <img src="https://perfectwebexperts.com/public/images/cmspages/1605659242.png" alt="" className="payment" />
        </div>
    </div>
  )
}

export default Footer