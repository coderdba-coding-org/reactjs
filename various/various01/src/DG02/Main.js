import React, { ReactDOM } from 'react';

export default function Main(){

    return (
        <section>
        <div>
        <h1>Flavor Picker</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
  
        <div>
          <br></br>
          <button onClick={this.handleClick}>Click to Re-check</button>
        </div>
        </section>
      );
    }

}