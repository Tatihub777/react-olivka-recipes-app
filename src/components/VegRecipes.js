import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



function VegRecipes() {
  const MY_ID ='d8a424d5';
  const MY_KEY = '4ec5c4eb46205b322ec02873561d0f8d';
const [vegRecipes, setVegRecipes] = useState([]);
useEffect(()=>{
    getVegRecipe();
  }, []);
const getVegRecipe = async() => {
const check = localStorage.getItem("vegRecipes");

if(check) {
  setVegRecipes(JSON.parse(check));
} else {
  
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
     localStorage.setItem("vegRecipes", JSON.stringify(data.hits));
      setVegRecipes(data.hits)
     
    }
    
};

  
  
  return (
    <div className='container-slides'>
      <h3>Popular vegan picks</h3>
     <div className='recipes'>
      
      <div className="recipeSearch">
       
      <Splide 
      options={{
      perPage: 4,
      width: '100vw',
      pagination: false,
      drag: 'free',
      gap: '2rem',
      breakpoints: {
        800 : { perPage: 2 },
        640 : {perPage: 1},
      }
    }}>
        {vegRecipes.map((element, index) => {
          return (
            
            <SplideSlide className='recipe' key={index}>
              
               
                  <a href={element.recipe.url} target='_blank' rel='noopener noreferrer'><h2>{element.recipe.label}</h2></a>

                  <img src={element.recipe.image} alt='recipe pic' />

                  <h3>{element.recipe.calories.toFixed()} Cal</h3>
              
                 
                    <p>{element.recipe.source}</p>
               
            </SplideSlide>
          );
        })}
        </Splide>

        
        
      
      </div>
       
    </div>
  </div>
  )
}

export default VegRecipes;
