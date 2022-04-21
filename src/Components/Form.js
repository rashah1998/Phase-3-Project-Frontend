

function Form() {


  return (
      <form>
        <div>
          <label for="name of item">Name of Item</label>
          <input type="text" name="name" id="name" required/>
        </div>
        <div>
        <label for="image">Image</label>
        <img src="https://example.com/wp-content/uploads/2020/02/my_image.jpg" alt="placeholder" />
      </div>
      <div>
        <label for="Serving Size">Age</label>
        <input type="number" min="1" max="200" step="5"/>
      </div>
        
      <div>
        <label for="Calorie per Serving">Age</label>
        <input type="number" min="1" max="200" step="5"/>
      </div>
        <div>
        <h1>Choose Diet</h1>

        <form action="/action_page.php">
          <input type="checkbox" id="Carnivorous" name="Carnivorous" value="Carnivorous"/>
          <label for="Carnivorous"> Carnivorous </label><br/>
          <input type="checkbox" id="Keto" name="Keto" value="Keto"/>
          <label for="Keto"> Keto </label><br/>
          <input type="checkbox" id="Pescatarian" name="Pescatarian" value="Pescatarian"/>
          <label for="Pescatarian"> Pescatarian </label><br/>
          <input type="checkbox" id="Vegan" name="Vegan" value="Vegan"/>
          <label for="vehicle1"> Vegan </label><br/>
          <input type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"/>
          <label for="vehicle2"> Vegetarian </label><br/>
          <input type="checkbox" id="Mediterranean" name="Mediterranean" value="Mediterranean"/>
          <label for="Mediterranean"> Mediterranean</label><br/>
          <input type="checkbox" id="High Protein" name="High Protein" value="High Protein"/>
          <label for="vehicle3"> "High Protein"</label><br/>
          <input type="checkbox" id="Paleo" name="Paleo" value="Paleo"/>
          <label for="vehicle1"> "Paleo" </label><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>

  )

}

export default Form;