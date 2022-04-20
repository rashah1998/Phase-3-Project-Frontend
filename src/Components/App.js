import FoodItemsContainer from './FoodItemsContainer'
import {useEffect, useState} from 'react'
import Sidebar from "./Sidebar"


function App() {

  const [foodItems, setFoodItems] = useState([])
  const [dietFilters, setDietFilters] = useState([false, false, false, false, false, false, false, false])

  function getFoodItems() {
    fetch('http://localhost:9292/fooditems')
    .then(resp => resp.json())
    .then(foodItemData => {
      setFoodItems(foodItemData)})
  }

  useEffect(getFoodItems, [])


  return (
    <div className='App'>
      <div className="banner">My FlatDiet</div>
      <div id="page-content">
        <Sidebar setDietFilters={setDietFilters} dietFilters={dietFilters}/>
        <FoodItemsContainer foodItems={foodItems} dietFilters={dietFilters}/>
      </div>
    </div>
  );
}

export default App;
