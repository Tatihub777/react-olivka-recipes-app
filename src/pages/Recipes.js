import React, { useEffect, useState } from 'react';
import { RecipesComponent } from '../helpers/RecipesComponent'
import '../styles/Recipes.css';
import LoaderPage from '../components/LoaderPage';



function Recipes() {
const [stateLoader, setStateLoader] = useState(true);

  const MY_ID ='d8a424d5';
  const MY_KEY = '4ec5c4eb46205b322ec02873561d0f8d';
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('lunch');
  
 useEffect(() => {
  const timer = setTimeout(() => setStateLoader(false), 2000);
  return () => clearTimeout(timer)
 }, [])
  useEffect(()=>{
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
     
      setRecipes(data.hits)
    }
    getRecipe()

  }, [wordSubmitted])

 
  const onChangeSearch = (e) => (
    setQuery(e.target.value)
  )
  const onSubmitSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(query)
};



  return (
    <div className="RecipeApp">
      <div className='searchForm-container'>
        <form className="search-form" onSubmit={onSubmitSearch}>
          <input type="text" className="search-input" placeholder='search your recipe...' autoComplete='off' onChange={onChangeSearch} required/>
          <input type="submit" className="search-input" value='search' onClick={onSubmitSearch} />
        </form>
      </div>

      {stateLoader && <LoaderPage />

    }

    <div className='recipes'>

      <div className="recipeSearch">

        {recipes.map((element, index) => (
        
        <RecipesComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        url={element.recipe.url}
        source={element.recipe.source}
        />
        
        ))}
  
      </div>
      
    </div>
    
  </div>
  )
  
}

export default Recipes;