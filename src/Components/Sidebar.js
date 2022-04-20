import Search from "./Search"
import MealPlanList from "./MealPlanList"

function Sidebar({setDietFilters, dietFilters}) {

    return (
        <div id="sidebar">
            <Search dietFilters={dietFilters} setDietFilters={setDietFilters}/>
            <MealPlanList />
        </div>
    )
}

export default Sidebar;