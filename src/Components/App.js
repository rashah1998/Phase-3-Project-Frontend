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

  const [hide, setHide]=useState(true)
  function handleHide(){
    setHide(!hide)
  }


  return (
    <div className='App'>
      <div className="banner"><h1>My FlatDiet</h1></div>
      <div id="page-content">
      <div id="flex-side">
        {hide? <button id="sidebar-button" onClick={handleHide} >Hide Panel</button>: <button id="sidebar-button" onClick={handleHide} >Show Panel</button>}
        {hide ? <Sidebar foodItems={foodItems} setFoodItems={setFoodItems} setDietFilters={setDietFilters} dietFilters={dietFilters} /> : null}
      </div>
        <FoodItemsContainer foodItems={foodItems} dietFilters={dietFilters}/>
      </div>
    </div>
  );
}

export default App;
