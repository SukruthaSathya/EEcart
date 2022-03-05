import React from 'react'
import {categories} from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'
import './Categories.css'

function Categories() {
  return (
    <div className='cat-container'>
        {categories.map((item)=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories