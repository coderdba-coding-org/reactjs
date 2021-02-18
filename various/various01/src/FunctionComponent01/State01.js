import React, { useState } from 'react';

// set greeting initial value and setGreeting as the modifier function
// Note: modifer function name can be arbitrary - need not be "set"<the item> 
const State01 = () => {
    const [greeting, setGreeting] = useState(
        'Hello Function Component with state!'
      );

      // THIS WORKS
      // this will return a static greeting 
      // with no modifer function
      //return <h1>{greeting}</h1>;

      // THIS WORKS
      // send the greeting with modifier function
      /*
      return (
        <div>
          <h1>{greeting}</h1>
          <input
            type="text"
            value={greeting}
            onChange={event => setGreeting(event.target.value)}
          />
        </div>
      );
      */

      // THIS WORKS
      // to call event-handler, we an define another function and assign to a constant and use it
      const handleChange = event => setGreeting(event.target.value);
      return (
        <div>
          <h1>{greeting}</h1>
          <input
            type="text"
            value={greeting}
            onChange={handleChange}
          />
        </div>
      );
};

export default State01;
