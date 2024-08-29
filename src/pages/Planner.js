import React, { useEffect, useState } from 'react'
import '../styles/Planner.css'
import { DataList } from '../helpers/DataList'
import { MyMealsAndIngredients } from '../helpers/MyMealsAndIngredients'
import uuid from 'react-uuid';
import Carousel from '../components/Carousel'



function Planner() {
    const [mealPlan, setMealPlan] = useState(localStorage.mealPlan ? JSON.parse(localStorage.mealPlan) : []);
  const [selectedDay, setSelectedDay] = useState(false);
    useEffect(() => {
        localStorage.setItem("mealPlan", JSON.stringify(mealPlan))
    
      }, [mealPlan])
      
      const addMeal = () => {
        const newMeal = {
         title: 'Today is ...',
         mealForADay: '',
         ingredients: '',
         id: uuid()
        }
        setMealPlan([newMeal, ...mealPlan])
       
        
      }
    const deleteDay = (mealId) => {
        setMealPlan(mealPlan.filter(({id}) => id!==mealId))
      }
      const updateDay = (myUpdatedMeal) => {
        const updatedMeal = mealPlan.map((mealPlans) => {
          if(mealPlans.id===myUpdatedMeal.id) {
            return myUpdatedMeal
          }
          return mealPlans
        })
        setMealPlan(updatedMeal)
      }
    
      const getActiveMeal = () => {
         
    return mealPlan.find(({id}) => id === selectedDay
        )
      }



  return (

<section id='Planner' className='planner-container'>

  
        <Carousel/>
<div className="planner">
      <h2>Weekly meal planner</h2>

      <div className='planner-data'>
      
      <DataList 
addMeal={addMeal} 
mealPlan={mealPlan} 
deleteDay={deleteDay}
selectedDay = {selectedDay}
setSelectedDay = {setSelectedDay}
updateDay={updateDay}
/>


          <MyMealsAndIngredients selectedDay={getActiveMeal()} updateDay={updateDay}/>
        

</div>
      </div>
</section>
  )
}

export default Planner
