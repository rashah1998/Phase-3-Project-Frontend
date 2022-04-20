import FoodItemCard from "./FoodItemCard"

function FoodItemsContainer({foodItems, dietFilters, mealPlan, setMealPlan}){

    const allDietOptions = ["Carnivorous", "Keto", "Pescatarian", "Vegan", "Vegetarian", "Mediterranean", "High Protein", "Paleo"]

    const filteredDietOptions = []

    dietFilters.forEach((filter, index) => filter ? filteredDietOptions.push(allDietOptions[index]) : null)

    const filteredFoodItems = []

    foodItems.forEach(fooditem => filteredDietOptions.every(option => fooditem.diets.some(diet => diet.diet_name === option)) ? filteredFoodItems.push(fooditem) : null)

    const renderFoodItems = filteredFoodItems.map(foodItem => <FoodItemCard key={foodItem.id} foodItem={foodItem} mealPlan={mealPlan} setMealPlan={setMealPlan}/>)

    return (
        <div id="food-items-container">
            {renderFoodItems}
        </div>
    )
}

export default FoodItemsContainer