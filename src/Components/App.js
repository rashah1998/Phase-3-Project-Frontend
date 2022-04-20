import FoodItemsContainer from './FoodItemsContainer'
import {useEffect, useState} from 'react'
import Sidebar from "./Sidebar"


function App() {

  const [foodItems, setFoodItems] = useState([])
  const [dietFilters, setDietFilters] = useState([false, false, false, false, false, false, false, false])
  const [mealPlan, setMealPlan] = useState([])

  function getFoodItems() {
    fetch('http://localhost:9292/fooditems')
    .then(resp => resp.json())
    .then(foodItemData => {
      setFoodItems(foodItemData)})
  }

  function setMealPlanOnMount() {
    setMealPlan(foodItems.filter(item => item.on_meal_plan === true))
  }

  useEffect(getFoodItems, [])

  useEffect(setMealPlanOnMount, [foodItems])


  return (
    <div className='App'>
      <div className="banner">My FlatDiet</div>
      <div id="page-content">
        <Sidebar setDietFilters={setDietFilters} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/>
        <FoodItemsContainer foodItems={foodItems} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/>
      </div>
    </div>
  );
}

export default App;
