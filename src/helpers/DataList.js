export const DataList = ({addMeal, mealPlan, deleteDay, selectedDay, setSelectedDay}) => {
    return (
        <div className="dataList">
            
               
           
            <div>
                <button onClick={addMeal} className="buttonAdd">Add</button>
            </div>
            
            
            {mealPlan.map(({title, id, mealForADay})=>{
                return(
                    <div key={id} className="add-container">
                    <div  onClick={()=>setSelectedDay(id)} className={`meal ${id===selectedDay ? 'selected' : 'inactive'}`}>
                        <p className="titleText">{title}</p>
                        <p className="mealText"> { mealForADay.substring(0, 50)}</p>
                        <button className="buttonDelete"onClick={()=> deleteDay(id)}>Delete</button>
                    </div>
                    </div>
                )
            })}
            
        </div>
    )
}