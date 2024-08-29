import React from 'react'
import Banner1 from '../assets/planner2.jpg'
import Banner2 from '../assets/planner4.jpg'
import Banner3 from '../assets/planner3.jpg'

function Banner({title, image}) {
    const images = [Banner1, Banner2, Banner3]
  return (
    <main>
        <div className='home_banner'>
      <div className='home_banner_images'>
        <img src={image ?? images[Math.floor(Math.random() *images.length)]} alt="hero images" />
      </div>

      <div className='home_banner_title'>
        <h1>
          {title}
        </h1>
        
      </div>
    </div>
    </main>
    
  )
}

export default Banner
