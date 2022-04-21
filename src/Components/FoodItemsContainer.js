import React from "react"
import FoodItemCard from "./FoodItemCard"
import Sidebar from "./Sidebar"

function FoodItemsContainer({foodItems, dietFilters, mealPlan, setMealPlan, searchFilter, setSearchFilter, hide, handleHide, setDietFilters}){

    const allDietOptions = ["Carnivorous", "Keto", "Pescatarian", "Vegan", "Vegetarian", "Mediterranean", "High Protein", "Paleo"]

    const filteredDietOptions = []

    dietFilters.forEach((filter, index) => filter ? filteredDietOptions.push(allDietOptions[index]) : null)

    const filteredFoodItems = []

    foodItems.forEach(fooditem => filteredDietOptions.every(option => fooditem.diets.some(diet => diet.diet_name === option)) ? filteredFoodItems.push(fooditem) : null)

    const renderFoodItems = filteredFoodItems.filter(fooditem => fooditem.item_name.toLowerCase().includes(searchFilter.toLowerCase()))
    .map(foodItem => <FoodItemCard key={foodItem.id} foodItem={foodItem} mealPlan={mealPlan} setMealPlan={setMealPlan}/>)

    return (
        <React.Fragment>
            <div id="flex-side">
              {hide? <button id="sidebar-button" onClick={handleHide} >Hide Panel</button>: <button id="sidebar-button" onClick={handleHide} >Show Panel</button>}
              {hide ? <Sidebar searchFilter={searchFilter} setSearchFilter={setSearchFilter} setDietFilters={setDietFilters} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/> : null}
            </div>
            <div id="food-items-container">
            {renderFoodItems}
            </div>
        </React.Fragment>
    )
}

export default FoodItemsContainer