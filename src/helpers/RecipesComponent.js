
import { useState } from "react";
import { IngredientsComponent } from "./IngredientsComponent";




export function RecipesComponent({label, image, url, calories, ingredients, source}) {
   const [show, setShow] = useState(false);
   
    return(
    <div className="recipeCard">
        <div className='recipe'>       
            <div className="recipeContainer">
               
                   <img src={image} alt='recipe pic' />

                <a className='recipeLabel' href={url} target='_blank' rel='noopener noreferrer'><h2>{label}</h2></a> 
               
           </div>
           
           <div className="ingredient">
                <button onClick={() => setShow(!show)}>
                    Ingredients
                </button>
                {show && <IngredientsComponent ingredients={ingredients}/>}
           </div>     
           

           
           
           

                <div className="source">
                    <h5>{source}</h5>
                    <h5>{calories.toFixed()} Calories</h5>
                </div>

           
        </div>
    </div>
    )
}