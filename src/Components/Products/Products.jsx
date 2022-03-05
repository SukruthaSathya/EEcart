import React from 'react'
import {popularProducts} from '../../data'
import Product from '../Product/Product'
import './Products.css'

function Products() {
  return (
    <div className='prods-container'> 
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products