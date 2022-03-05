import React, { useState } from 'react'
import { sliderItems } from '../../data'
import './Slider.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex*-100}vw);`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
   return (
    <div className='slider-container'>
      <div className="arrow" id="left" onClick={() => handleClick("left")} >
        <i className='fa fa-arrow-left	'></i>
      </div>

      {sliderItems.map((item) => (
        <Wrapper slideIndex={slideIndex}>

          <div className="slide" id={item.id}>
           <div className="ImgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="InfoContainer">
              <h1 className="Title">{item.title}</h1>
              <p className="Desc">{item.desc}</p>
              <button className="Button">SHOP NOW</button>
            </div>
          </div>
          </Wrapper>
      ))}

      <div className="arrow" id='right' onClick={() => handleClick("right")}>
        <i className='fa fa-arrow-right'></i>
      </div>
    </div>
  )
}

export default Slider