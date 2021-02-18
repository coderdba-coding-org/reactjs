Reference: https://www.robinwieruch.de/react-function-component
- Callback functions: https://www.robinwieruch.de/javascript-callback-function
- Synthetic events: https://reactjs.org/docs/events.html

--------------------------------
SOME FILES IN THIS FOLDER
--------------------------------
The App*arrow* files in this folder are to be used as App.js in src folder

------------------------------------------------
SOME NOTES FROM THE REFERENCE ARTICLE
------------------------------------------------
By providing an event handler to the input field, we are able to do something with a callback function when the input field changes its value. As argument of the callback function we receive a synthetic React event which holds the current value of the input field. This value is ultimately used to set the new state for the Function Component with an inline arrow function. We will see later how to extract this function from there.

Note: The input field receives the value of the component state too, because you want to control the state (value) of the input field and don't let the native HTML element's internal state take over. Doing it this way, the component has become a controlled component.

As you have seen, React Hooks enable us to use state in React (Arrow) Function Components. Whereas you would have used a setState method to write state in a Class Component, you can use the useState hook to write state in a Function Component.

Note: If you want to use React's Context in Function Components, check out React's Context Hook called useContext for reading from React's Context in a component.