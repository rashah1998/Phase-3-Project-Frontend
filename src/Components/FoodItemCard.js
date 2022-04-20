import React, {useState} from 'react'

function FoodItemCard({foodItem, mealPlan, setMealPlan}) {

    const [servings, setServings] = useState("")

    const {item_name, number_of_calories, serving_size, image, diets} = foodItem
    
    const renderDiets = diets.map(diet => <h5 key={diet.id}>{diet.diet_name}</h5>)

    function handleServings(e) {
        setServings(e.target.value)
    }

    function handleAddMeal(e) {
        e.preventDefault()
        
        const updatedItem = {
            ...foodItem,
            on_meal_plan: true,
            number_of_servings: foodItem.number_of_servings + parseInt(servings)
        }

        fetch(`http://localhost:9292/fooditems/${foodItem.id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify(updatedItem)
        }).then(resp => resp.json())
        .then(modifiedItem => {
            if(mealPlan.some(item => item.item_name === updatedItem.item_name)){
                const updateMealPlan = mealPlan
                updateMealPlan[mealPlan.findIndex(item => item.item_name === updatedItem.item_name)].number_of_servings += parseInt(servings)
                setMealPlan(updateMealPlan)
            } else {
                setMealPlan([...mealPlan, modifiedItem])
            }
        })

        e.target.reset()
    }

    return (
        <div className="card-container">
            <div className="image-container">
            <img src={image} alt={item_name} /> 
            </div>
            <div className="card-details">
                <h3>{item_name}</h3>
            </div>
            <div className="card-details">
                <p>Serving Size: {serving_size}</p> 
                <p>Calories per Serving: {number_of_calories}</p>
            </div>
            {renderDiets}
            <form onSubmit={handleAddMeal}>
                <input id="servings-input" type="number" step="0.1" placeholder="Number of Servings" onChange={handleServings}></input>
                <input type="submit" value="Add to Meal Plan" id="card-button" />
            </form>
        </div>
    )
}


export default FoodItemCard
