import Search from "./Search"
import MealPlanList from "./MealPlanList"

function Sidebar({setDietFilters, dietFilters, mealPlan, setMealPlan, searchFilter, setSearchFilter}) {

    return (
        <div id="sidebar">
            <Search dietFilters={dietFilters} setDietFilters={setDietFilters}/>
            <MealPlanList mealPlan={mealPlan} setMealPlan={setMealPlan}/>
        </div>
    )
}

export default Sidebar;