import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { carouselData } from '../helpers/carouselData';
import '../styles/Carousel.css';


function Carousel() {
  const [carouselRecipe, setCarouselRecipe] = useState(0);
  const {id, label, image, url} = carouselData[carouselRecipe];

    const PreviousRecipeCard = () => {
      setCarouselRecipe((carouselRecipe)=> {
        carouselRecipe --;
        if(carouselRecipe<0) {
        return carouselData.length -1
        }
        return carouselRecipe;
      })
       
    }
    const NextRecipeCard = () => {
      setCarouselRecipe((carouselRecipe)=> {
        carouselRecipe ++;
        if(carouselRecipe>carouselData.length-1) {
             carouselRecipe=0
        }
        return carouselRecipe;
      })
    }
  return (
    <section id='Carousel'>
      <div className="carousel-container">
    <div className='carousel'>
      
      <div className="container carousel-card" key={id}>
      <h2>Breakfast Ideas</h2>
        <div className='container carousel-wrapper-text'>
        
          <h3>{label}</h3>
          <a href={url} target='_blank' rel=' noreferrer' className="button-link">recipe</a>
        </div>
        <div className='carousel-wrapper'>
        <img src={image} alt="slider images" className='carousel-img' /> 
        </div>

        <div className="carousel-buttons">
          
          <button onClick={PreviousRecipeCard} className="button-arrow"><ArrowBackIosSharpIcon /></button>
          
          <button onClick={NextRecipeCard} className="button-arrow"><ArrowForwardIosIcon /></button>
        </div>

      </div>
    </div>
    </div>
    </section>
  )
}

export default Carousel;
