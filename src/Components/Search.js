function Search({setDietFilters, dietFilters, setSearchFilter}) {
      
    function handleCheck(e) {
        const updateDietFilters = dietFilters.map((diet, index) => index === parseInt(e.target.value) ? !diet : diet)
        setDietFilters(updateDietFilters)
    }
    function handleSearch(e) {
        setSearchFilter(e.target.value)
    }

    return (
        
        <div id="search-and-filter">
            <input id="search-bar" type="text" placeholder="Search for Food..." onChange={handleSearch} />
            <fieldset id="filters">
                <legend>Choose The Dietary Plan(s) That Fit Your Lifestyle:</legend>
                <input type="checkbox" value={0} id="Carnivorous" onChange={handleCheck}/>
                <label htmlFor="Carnivorous">Carnivorous</label>
                <input type="checkbox" value={1} id="Keto" onChange={handleCheck}/>
                <label htmlFor="Keto">Keto</label><br/>
                <input type="checkbox" value={2} id="Pescatarian" onChange={handleCheck}/>
                <label htmlFor="Pescatarian">Pescatarian</label>
                <input type="checkbox" value={3} id="Vegan" onChange={handleCheck}/>
                <label htmlFor="Vegan">Vegan</label><br/>
                <input type="checkbox" value={4} id="Vegetarian" onChange={handleCheck}/>
                <label htmlFor="Vegetarian">Vegetarian</label>
                <input type="checkbox" value={5} id="Mediterranean" onChange={handleCheck}/>
                <label htmlFor="Mediterranean">Mediterranean</label><br/>
                <input type="checkbox" value={6} id="High Protein" onChange={handleCheck}/>
                <label htmlFor="High Protein">High Protein</label>
                <input type="checkbox" value={7} id="Paleo" onChange={handleCheck}/>
                <label htmlFor="Paleo">Paleo</label><br/>
            </fieldset>
        </div>
    )
}


export default Search;
    