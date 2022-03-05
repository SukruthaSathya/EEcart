import React from 'react'
import './CategoryItem.css'


function CategoryItem({item}) {
  return (
    <div className='cat-item-container'>
        <img src={item.img} alt="" />
        <div className="cat-info">
            <h1>{item.title}</h1>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem