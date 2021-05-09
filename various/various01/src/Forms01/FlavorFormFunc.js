import React, { useState } from 'react';

export default function FlavorFormFunc(){
//const FlavorFormFunc = () => {

  const [value, setValue] = useState('coconut');

  const handleChange = event => setValue(event.target.value);
  //handleChange.bind(this); // bind may not be needed when using function component instead of form

  const handleSubmit = event => {
    alert('Your favorite fun flavor is: ' + value);
    event.preventDefault()
  }
  //handleSubmit.bind(this); // bind may not be needed when using function component instead of form

  const handleClick = event => {
    alert('Your favorite fun flavor selected is: ' + value);
    event.preventDefault()
  }
  //handleClick.bind(this); // bind may not be needed when using function component instead of form

  return (
    <section>
      <div>
        <h1>Flavor Picker</h1>
        <form onSubmit={handleSubmit}>
          <label>
          Pick your favorite flavor:
            <select value={value} onChange={handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <br></br>
      <div>
        <button onClick={handleClick}>Click to Re-check</button>
      </div>
    </section>
  )
  
}

// this export is necessary if the function is defined into a constant above
//export default FlavorFormFunc;