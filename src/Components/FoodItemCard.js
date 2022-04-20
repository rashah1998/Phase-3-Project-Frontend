import React from 'react'

function FoodItemCard({foodItem}) {

    const {item_name, number_of_calories, serving_size, image, diets} = foodItem
    
    const renderDiets = diets.map(diet => <h5 key={diet.id}>{diet.diet_name}</h5>)

    function handleAddMeal(e) {

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
                <input type="number" step="0.1" placeholder="Number of Servings to Add"></input>
                <input type="submit" value="Add to Meal Plan" id="card-button" />
            </form>
        </div>
    )
}


export default FoodItemCard
