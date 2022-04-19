import {useState} from 'react'


function Search({foodItems, setFoodItems, setDietFilters, dietFilters}) {
    // const [dietFilters, setDietFilters] = useState([false, false, false, false, false, false, false, false])
    
    function handleCheck(e, value) {
        const updateDietFilters = dietFilters.map((diet, index) => (index === value) ? !diet : diet)
        setDietFilters(updateDietFilters)
        // setFoodItems(foodItems.filter(item => {
        //     item.diets.some(diet => diet.diet_name === e.target.id)
        // }))
    }


    return (
        <div id="search-and-filter">
            <input id="search-bar" type="text" placeholder="Search for Food..."/>
            <fieldset id="filters">
                <legend>Choose The Dietary Plan(s) That Fit Your Lifestyle:</legend>
                <input type="checkbox" value={1} id="Carnivorous" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Carnivorous">Carnivorous</label>
                <input type="checkbox" value={2} id="Keto" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Keto">Keto</label><br/>
                <input type="checkbox" value={3} id="Pescatarian" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Pescatarian">Pescatarian</label>
                <input type="checkbox" value={4} id="Vegan" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Vegan">Vegan</label><br/>
                <input type="checkbox" value={5} id="Vegetarian" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Vegetarian">Vegetarian</label>
                <input type="checkbox" value={6} id="Mediterranean" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Mediterranean">Mediterranean</label><br/>
                <input type="checkbox" value={7} id="High Protein" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="High Protein">High Protein</label>
                <input type="checkbox" value={8} id="Paleo" onChange={(e, value) => handleCheck(e, value)}/>
                <label htmlFor="Paleo">Paleo</label><br/>
            </fieldset>
        </div>
    )
}

export default Search;
    