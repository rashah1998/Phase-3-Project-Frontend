import FoodItemCard from "./FoodItemCard"

function FoodItemsContainer({foodItems, dietFilters}){

    const allDietOptions = ["Carnivorous", "Keto", "Pescatarian", "Vegan", "Vegetarian", "Mediterranean", "High Protein", "Paleo"]

    const filteredDietOptions = []

    dietFilters.forEach((filter, index) => filter ? filteredDietOptions.push(allDietOptions[index]) : null)

    //We have: filteredDietOptions (an array of all of the currently 'checked' filters) and all FoodItems
    //We need to: use the filtered options and the FoodItems to determine which fooditems contain ALL of the currently selected filters
    //To do this: for each diet option that is checked, filter the FoodItems array

    const renderFoodItems = foodItems.map(foodItem => <FoodItemCard key={foodItem.id} foodItem={foodItem}/>)

    return (
        <div id="food-items-container">
            {renderFoodItems}
        </div>
    )
}

export default FoodItemsContainer