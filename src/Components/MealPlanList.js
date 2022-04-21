


function MealPlanList({mealPlan, setMealPlan}) {

    function handleRemoval(e) {
        const updatedItem = {
            ...mealPlan.find(item => item.item_name === e.target.name),
            on_meal_plan: false,
            number_of_servings: 0
        }

        const updateMealPlan = mealPlan.filter(item => item.item_name !== e.target.name)

        fetch(`http://localhost:9292/fooditems/${e.target.id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify(updatedItem)
        }).then(setMealPlan(updateMealPlan))
    }

    const renderMealPlan = mealPlan.map(item => {
       return <li key={item.id}>
                <h3>{item.item_name}</h3>
                <h4>Servings: {item.number_of_servings} Total Calories: {item.number_of_calories * item.number_of_servings}</h4>
                <button id={item.id} name={item.item_name} onClick={handleRemoval}>Remove from Meal Plan</button>
            </li>
    })

    let totalCalories = 0;

    mealPlan.forEach(item => totalCalories += (item.number_of_calories * item.number_of_servings))
    
    return (
        <div id="meal-plan-list">
            <h1>My Meal Plan</h1>
            {mealPlan.length === 0 ? null : <h2>Total Calories: {totalCalories}</h2>}
            <ol>
                {renderMealPlan}
            </ol>
        </div>
    )
}

export default MealPlanList