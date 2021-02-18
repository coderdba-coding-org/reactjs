import React, { useState } from 'react';

// set greeting initial value and setGreeting as the modifier function
// Note: modifer function name can be arbitrary - need not be "set"<the item> 
export function State01a(greetingIn) {
    const [greeting, setGreeting] = useState(
        greetingIn
      );

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

// this export is necessary as the function is defined into a constant above
export default State01a;
