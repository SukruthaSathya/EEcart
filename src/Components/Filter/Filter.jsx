import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <div className='filter-parent'>
        <h1>Dresses</h1>
        <div className="filter-container">
                <div className="filter">
                    <span>Filter Products:</span>
                    <select name="" id="">
                        <option disabled selected>Color</option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Red</option>
                        <option value="">Blue</option>
                        <option value="">Yellow</option>
                        <option value="">Green</option>
                    </select>
                    <select name="" id="">
                        <option disabled selected>Size</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                </div>
                <div className="filter">
                    <span>Sort Products:</span>
                    <select name="" id="">
                        <option  selected>Newest</option>
                        <option value="">Price (asc)</option>
                        <option value="">Price (desc)</option>
                        
                    </select>
                </div>
        </div>
    </div>
  )
}

export default Filter