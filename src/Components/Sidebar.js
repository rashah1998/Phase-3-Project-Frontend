import Search from "./Search"
import MealPlanList from "./MealPlanList"

function Sidebar({setDietFilters, dietFilters, mealPlan, setMealPlan, setSearchFilter}) {

    return (
        <div id="sidebar">
            <Search dietFilters={dietFilters} setDietFilters={setDietFilters} setSearchFilter={setSearchFilter}/>
            <MealPlanList mealPlan={mealPlan} setMealPlan={setMealPlan}/>
        </div>
    )
}

export default Sidebar;