export function IngredientsComponent({ingredients}) {
    return( <div>
        <ul className="ingredient-list">
                {ingredients.map((ingredient, index)=> (
                  <li key={index}>
                    {ingredient}
                  </li>
                ))}
        </ul>
    </div>
    )
}