import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FoodItemsContainer from "./FoodItemsContainer";
// import Sidebar from "./Sidebar";
import Form from "./Form";
import About from "./About";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [dietFilters, setDietFilters] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [mealPlan, setMealPlan] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  function getFoodItems() {
    fetch("http://localhost:9292/fooditems")
      .then((resp) => resp.json())
      .then((foodItemData) => {
        setFoodItems(foodItemData);
      });
  }

  function setMealPlanOnMount() {
    setMealPlan(foodItems.filter((item) => item.on_meal_plan === true));
  }

  useEffect(getFoodItems, []);

  useEffect(setMealPlanOnMount, [foodItems]);

  const [hide, setHide] = useState(true);
  function handleHide() {
    setHide(!hide);
  }

  return (
    <div className="App">
      <div className="banner">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>My FlatDiet</h1>
        </Link>
        <Link to="/form" style={{ textDecoration: "none" }}>
          <h2 id="form-link">Form</h2>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h2 id="about-link">About</h2>
        </Link>
      </div>
      <div id="page-content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FoodItemsContainer
                foodItems={foodItems}
                searchFilter={searchFilter}
                dietFilters={dietFilters}
                mealPlan={mealPlan}
                setMealPlan={setMealPlan}
                hide={hide}
                handleHide={handleHide}
                setDietFilters={setDietFilters}
                setSearchFilter={setSearchFilter}
              />
            }
          />
          {/* <div id="flex-side">
              {hide? <button id="sidebar-button" onClick={handleHide} >Hide Panel</button>: <button id="sidebar-button" onClick={handleHide} >Show Panel</button>}
              {hide ? <Sidebar searchFilter={searchFilter} setSearchFilter={setSearchFilter} setDietFilters={setDietFilters} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/> : null}
            </div> */}
          {/* <FoodItemsContainer foodItems={foodItems} searchFilter={searchFilter} dietFilters={dietFilters} mealPlan={mealPlan} setMealPlan={setMealPlan}/> */}
          {/* </Route> */}
          <Route path="/form" element={<Form />} />
          {/* <Form/>
          </Route> */}
          <Route path="/about" element={<About />} />
          {/* <About/>
          </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
