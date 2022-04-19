import React from 'react'

function FoodItemCard({foodItem}) {

    const {item_name, number_of_calories, serving_size, image, diets} = foodItem
    
    const renderDiets = diets.map(diet => <h5 key={diet.id}>{diet.diet_name}</h5>)

    return (
        <div className="card-container">
            <div className="image-container">
            <img src={image} alt={item_name} /> 
            </div>
            <div className="card-title">
                <h3>{item_name}</h3>
            </div>
            <div className="card-body">
                <p>Serving Size: {serving_size}</p> 
                <p>Calories per Serving: {number_of_calories}</p> 
            </div>
            {renderDiets}
            <button>
                {/* <a>

                </a> */}
            </button>
        </div>
    )
}


export default FoodItemCard
