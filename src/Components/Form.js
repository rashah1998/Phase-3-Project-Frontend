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

 

  function handleSubmit(e) {
    e.preventDefault()
    
    const dietArr = []   
    document.querySelectorAll("input[type=checkbox]").forEach(diet => diet.checked ? dietArr.push(diet.name) : null)
    setNewFoodItem({...newFoodItem, diets: [...dietArr]})

    e.target.reset();
  }

  return (
    <div id='form-background'>
      <form onSubmit={handleSubmit}>
        {console.log(newFoodItem)}
        <h5><label htmlFor="name of item">Name of Item:</label></h5>
        <input type="text" name="item_name" id="new-item-name" onChange={handleChange} required/>
        <h5><label htmlFor="image">Image URL:</label></h5>
        <input type="text" name="image" id="new-item-image" onChange={handleChange} required/>
        <h5><label htmlFor="Serving Size">Input the Serving Size With Units (i.e. "1 oz"):</label></h5>
        <input type="text" name="serving_size" onChange={handleChange} required/>
        <h5><label htmlFor="Calories per Serving">Calories Per Serving:</label></h5>
        <input type="number" min="1" name="number_of_calories" onChange={handleChange} required/>

        <h4>Choose the Diets for this Food:</h4>
        <input className='form-checkbox' type="checkbox" id="Carnivorous" name="Carnivorous" value="Carnivorous"/>
        <h6><label htmlFor="Carnivorous"> Carnivorous </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Keto" name="Keto" value="Keto"/>
        <h6><label htmlFor="Keto"> Keto </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Pescatarian" name="Pescatarian" value="Pescatarian"/>
        <h6><label htmlFor="Pescatarian"> Pescatarian </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Vegan" name="Vegan" value="Vegan"/>
        <h6><label htmlFor="Vegan"> Vegan </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"/>
        <h6><label htmlFor="Vegetarian"> Vegetarian </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Mediterranean" name="Mediterranean" value="Mediterranean"/>
        <h6><label htmlFor="Mediterranean"> Mediterranean</label><br/></h6>
        <input className='form-checkbox' type="checkbox" id="High Protein" name="High Protein" value="High Protein"/>
        <h6><label htmlFor="High Protein"> High Protein</label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Paleo" name="Paleo" value="Paleo"/>
        <h6><label htmlFor="Paleo"> Paleo </label></h6><br/>
        <input className='form-checkbox' type="submit" value="Submit" />
        <div id='circle-1'></div>
        <div id='circle-2'></div>
    </form>
    </div>
      

  )

}

export default Form;