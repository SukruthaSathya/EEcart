import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='news-container'>
        <h1>Newsletter</h1>
        <div className="desc">Get timely updates from your favourite products</div>
        <div className="input-container">
            <input type="text" placeholder='Your email'/>
            <button><i className='fa fa-send'></i></button>
        </div>
    </div>
  )
}

export default Newsletter