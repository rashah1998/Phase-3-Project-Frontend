import {useState} from 'react'

function Form({setMealPlan}) {

  const [newFoodItem, setNewFoodItem] = useState({
    item_name: "",
    number_of_calories: 0,
    serving_size: "",
    image: "",
    number_of_servings: 0,
    on_meal_plan: false,
    diets: []
  })

  function handleChange(e) {
    setNewFoodItem({...newFoodItem, [e.target.name]: e.target.value})
  }

  const dietArr = []   
  document.querySelectorAll("input[type=checkbox]").forEach(diet => diet.checked ? dietArr.push(diet.name) : null)
  setNewFoodItem({...newFoodItem, diets: [...dietArr]})

  function handleSubmit(e) {
    e.preventDefault()
    

    e.target.reset();
  }

  return (
      <form onSubmit={handleSubmit}>
        {console.log(newFoodItem)}
        <label htmlFor="name of item">Name of Item:</label>
        <input type="text" name="item_name" id="new-item-name" onChange={handleChange} required/>
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" id="new-item-image" onChange={handleChange} required/>
        <label htmlFor="Serving Size">Input the Serving Size With Units (i.e. "1 oz"):</label>
        <input type="text" name="serving_size" onChange={handleChange} required/>
        <label htmlFor="Calories per Serving">Calories Per Serving:</label>
        <input type="number" min="1" name="number_of_calories" onChange={handleChange} required/>

        <h4>Choose the Diets for this Food:</h4>
        <input type="checkbox" id="Carnivorous" name="Carnivorous" value="Carnivorous"/>
        <label htmlFor="Carnivorous"> Carnivorous </label><br/>
        <input type="checkbox" id="Keto" name="Keto" value="Keto"/>
        <label htmlFor="Keto"> Keto </label><br/>
        <input type="checkbox" id="Pescatarian" name="Pescatarian" value="Pescatarian"/>
        <label htmlFor="Pescatarian"> Pescatarian </label><br/>
        <input type="checkbox" id="Vegan" name="Vegan" value="Vegan"/>
        <label htmlFor="Vegan"> Vegan </label><br/>
        <input type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"/>
        <label htmlFor="Vegetarian"> Vegetarian </label><br/>
        <input type="checkbox" id="Mediterranean" name="Mediterranean" value="Mediterranean"/>
        <label htmlFor="Mediterranean"> Mediterranean</label><br/>
        <input type="checkbox" id="High Protein" name="High Protein" value="High Protein"/>
        <label htmlFor="High Protein"> High Protein</label><br/>
        <input type="checkbox" id="Paleo" name="Paleo" value="Paleo"/>
        <label htmlFor="Paleo"> Paleo </label><br/>
        <input type="submit" value="Submit" />
    </form>

  )

}

export default Form;