

export const MyMealsAndIngredients = ({selectedDay, updateDay}) => {
    const editMeal = (myInput, value)=> {
    updateDay({
        ...selectedDay,
        [myInput]: value
    })
    }
    if (!selectedDay) return <div className="selectedText">
        <div className="messageText">
          <h2>Plan your week ahead of time!</h2>
        </div>
        </div>
    return (
        <div className="whole-plan">
            <div className="plan-notes">
                <input 
                type="date" 
                className="myInput" 
                placeholder="Today is..."
                id="title"
                value={selectedDay.title}
                onChange={(e)=>editMeal('title', e.target.value)}
                />

                <textarea
                placeholder="wright your meals plan here..."
                type='text'
                className="taskText"
                id='mealForADay'
                value={selectedDay.mealForADay}
                onChange={(e)=>editMeal('mealForADay', e.target.value)}
                />
                <textarea 
                placeholder="shopping list..."
                type='text'
                className="ingredText"
                id='mealForADay'
                value={selectedDay.ingredients}
                onChange={(e)=>editMeal('ingredients', e.target.value)}
                />

            </div>
            
            
        </div>
    )
}