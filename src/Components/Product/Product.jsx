import React from 'react'
import './Product.css'

function Product({item}) {
  return (
    <div className='prod-container'>
        <div className="circle">

        </div>
        <img src={item.img} alt="" />
        <div className="prod-info">
            <i className='fa fa-shopping-cart	'></i>
            <i className='fa fa-search	'></i>
            <i className='fa fa-heart-o	'></i>
        </div>
        
    </div>
  )
}

export default Product