import {useState} from 'react'

function Form({foodItems, setFoodItems}) {

  const [newFoodItem, setNewFoodItem] = useState({
    item_name: "",
    number_of_calories: 0,
    serving_size: "",
    image: "",
    number_of_servings: 0,
    on_meal_plan: false,
    diets_to_add: []
  })

  function handleChange(e) {
    if (e.target.type !== "checkbox") {
      setNewFoodItem({...newFoodItem, [e.target.name]: e.target.value})
    } else {
      const dietArr = []   
      document.querySelectorAll("input[type=checkbox]").forEach(diet => diet.checked ? dietArr.push(diet.name) : null)
      setNewFoodItem({...newFoodItem, diets_to_add: [...dietArr]})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch("http://localhost:9292/fooditems", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
      body: JSON.stringify(newFoodItem)
    }).then(resp => resp.json())
    .then(newItem => setFoodItems([...foodItems, newItem]))
    console.log(newFoodItem)
    e.target.reset();
  }

  return (
    <div id='form-background'>
      <form onSubmit={handleSubmit}>
        <h5><label htmlFor="name of item">Name of Item:</label></h5>
        <input type="text" name="item_name" id="new-item-name" onChange={handleChange} required/>
        <h5><label htmlFor="image">Image URL:</label></h5>
        <input type="text" name="image" id="new-item-image" onChange={handleChange} required/>
        <h5><label htmlFor="Serving Size">Input the Serving Size With Units (i.e. "1 oz"):</label></h5>
        <input type="text" name="serving_size" onChange={handleChange} required/>
        <h5><label htmlFor="Calories per Serving">Calories Per Serving:</label></h5>
        <input type="number" min="1" name="number_of_calories" onChange={handleChange} required/>

        <h4>Choose the Diets for this Food:</h4>
        <input className='form-checkbox' type="checkbox" id="Carnivorous" name="Carnivorous" value="Carnivorous" onChange={handleChange}/>
        <h6><label htmlFor="Carnivorous"> Carnivorous </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Keto" name="Keto" value="Keto" onChange={handleChange}/>
        <h6><label htmlFor="Keto"> Keto </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Pescatarian" name="Pescatarian" value="Pescatarian" onChange={handleChange}/>
        <h6><label htmlFor="Pescatarian"> Pescatarian </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Vegan" name="Vegan" value="Vegan" onChange={handleChange}/>
        <h6><label htmlFor="Vegan"> Vegan </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian" onChange={handleChange}/>
        <h6><label htmlFor="Vegetarian"> Vegetarian </label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Mediterranean" name="Mediterranean" value="Mediterranean" onChange={handleChange}/>
        <h6><label htmlFor="Mediterranean"> Mediterranean</label><br/></h6>
        <input className='form-checkbox' type="checkbox" id="High Protein" name="High Protein" value="High Protein" onChange={handleChange}/>
        <h6><label htmlFor="High Protein"> High Protein</label></h6><br/>
        <input className='form-checkbox' type="checkbox" id="Paleo" name="Paleo" value="Paleo" onChange={handleChange}/>
        <h6><label htmlFor="Paleo"> Paleo </label></h6><br/>
        <input className='form-checkbox' type="submit" value="Submit" />
        <div id='circle-1'></div>
        <div id='circle-2'></div>
    </form>
    </div>
      

  )

}

export default Form;