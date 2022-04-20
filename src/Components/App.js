import {useEffect, useState} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import FoodItemsContainer from './FoodItemsContainer'
import Sidebar from "./Sidebar"
import Form from "./Form"
import About from "./About"

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

  const [hide, setHide]=useState(true)
  function handleHide(){
    setHide(!hide)
  }
  
  return (
    <div className='App'>
      <div className="banner">
        <Link exact to="/" style={{ textDecoration:'none'}}><h1>My FlatDiet</h1></Link>
        <Link exact to="/form" style={{ textDecoration:'none'}}><h2 id="form-link">Form</h2></Link>
        <Link exact to="/about" style={{ textDecoration:'none'}}><h2 id="about-link">About</h2></Link>
      </div>
      <div id="page-content">
        <Switch>
          <Route exact path="/">
            <div id="flex-side">
              {hide? <button id="sidebar-button" onClick={handleHide} >Hide Panel</button>: <button id="sidebar-button" onClick={handleHide} >Show Panel</button>}
              {hide ? <Sidebar setDietFilters={setDietFilters} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/> : null}
            </div>
            <FoodItemsContainer foodItems={foodItems} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/>
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
