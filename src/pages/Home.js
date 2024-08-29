
import React from 'react'
import '../styles/Home.css'

import LowCarb from '../components/LowCarb'
import VegRecipes from '../components/VegRecipes'
import Banner from '../components/Banner'



function Home() {
  return (
    <main>
     <div className='home-container'>
      

  <VegRecipes />    
<Banner />
  <LowCarb />
    </div> 
  

       


    </main>
  
  

  )
}

export default Home

