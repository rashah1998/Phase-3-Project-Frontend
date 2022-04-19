import Search from "./Search"

function Sidebar({foodItems, setFoodItems, setDietFilters, dietFilters}) {

    return (
        <div id="sidebar">
            <Search foodItems={foodItems} setFoodItems={setFoodItems} dietFilters={dietFilters} setDietFilters={setDietFilters}/>
        </div>
    )
}

export default Sidebar;