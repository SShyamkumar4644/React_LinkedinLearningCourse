// Understanding the useState Hook
import "./App.css";
import { useState } from "react";
// Managing state in a React application is really important and the most modern way to handle state variables 
// in an app is to use a function called useState.
function App() {
  //Step 3
  const [emotion, setEmotion] = useState("happy");
  

  //Step 1
  // const what = useState();
  // console.log(what);
// But what we will actually want to do here is we want to, on line five, use this value called what 
// and we're using the what value to figure out what does useState return? When I call this state function, 
// what is actually being returned? So what we see here, if we hit Refresh to clear out those older logs, we 
// see an array. This array has two values. The first is an undefined value. And then the second is a function. 
// So we want to think about this undefined value as being the state value currently when we run the app for the 
// first time, when we render our app component. The second value here is a function that we're going to use to update the state. 

//Step 2
// const what = useState("happy");
// console.log(what);
// o how do I set an initial state for this app? Well, I'm going to set it by passing a value to this useState function. 
// Check it out. The first value now is happy

// Well, I'm going to set it by passing a value to this useState function. Check it out. 
// The first value now is happy. Now, how do I assign some sort of a name to this value? 
// We know from before that we can use array destructuring to do just this. So what we're 
// going to do here on line five is we'll create a value for a state called emotion. Then we're 
// going to create an updating function called setEmotion. Now, when my app first renders, the state will be happy. 

  return ( // Step 4
    <div className="App">
    <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("sad")}>Sad</button>
    <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
    // The second thing we want to do is call this setEmotion function to change the state. We need to have this respond to some sort of user input. 
    // So I'm going to call this button sad. We're going to hit the sad button. So now I'm going to add to this an onClick method so I can change the 
    // emotion to sad. So here we're going to use this function to call setEmotion and setEmotion will take in the new emotion, which is sad. So check 
    // this out, as soon as I click Sad, the current emotion will be, you guessed it, sad. Emotion is our state variable. setEmotion is the function that 
    // we're going to use to update the state
  );
}

export default App;

// Remember that you can use this for all sorts of new emotions if you wanted to. 
// Let's say excited. We'll set the emotion to excited. And now when I click the 
// Excited button, the current emotion is excited. So a state variable can be a 
// string, it can be a Boolean, it can be an object, it can be an array. But the 
// important thing to know is that when we pass in its initial value, this is the 
// value when our app is actually rendered to the page for the first time and then 
// any time I call setEmotion, I'll do so with a new state and that will change the 
// state for the entire app.

//STEP 1
// function App({library}){
//   const what = useState();
//   console.log(what);
//   return(
//     <div className='App'>
//       <h1>Hello from {library}</h1>
//     </div>
//   );
//  }

// export default App;
// EXPLANATION FOR STEP 1
// Managing state in a React application is really important and the most modern way to 
// handle state variables in an app is to use a function called useState. Let's take a look. 
// So the first thing that we want to do here is we want to import from React a function called 
// useState and then we're also going to get rid of our destructured array from before. Those 
// skills will come into play in one second here. But what we will actually want to do here 
// is we want to, on line five, use this value called what and we're using the what value to 
// figure out what does useState return? When I call this state function, what is actually 
// being returned? So what we see here, if we hit Refresh to clear out those older logs, 
// we see an array. This array has two values. The first is an undefined value. And then 
// the second is a function. So we want to think about this undefined value as being the 
// state value currently when we run the app for the first time, when we render our app 
// component. The second value here is a function that we're going to use to update the state.

//ChatGPT Explanation:

// - Managing State with `useState`:
// - State management is crucial in React applications to handle dynamic data changes.
// - The `useState` function is a modern way to manage state variables in React components.

// - Importing `useState`:
// - To use `useState`, you need to import it from the React library.
// - The syntax is `import React, { useState } from 'react';`.

// - `useState` Basics:
// - When you call `useState(initialValue)`, it returns an array with two values.
// - The first value is the current state, initialized with the provided `initialValue`.
// - The second value is a function used to update the state.

// - Understanding the Returned Array:
// - Upon calling `useState`, an array with two values is returned.
// - The first value is the current state, initially set to the provided `initialValue`.
// - The second value is a function that can be used to modify the state.

// - The `what` Example:
// - In the example using `what`, the array returned by `useState` is logged to the console.
// - The first value is initially `undefined`, and the second value is a state-updating function.

// - Initialization of State:
// - The `useState` function is used in components to create and manage local state.
// - The `initialValue` parameter sets the initial state value when the component is first rendered.

// In summary, the `useState` function in React provides a modern and efficient way to manage 
// state variables within components. It returns an array with the current state value 
// and a state-updating function, allowing you to manage dynamic data changes in your 
// application.

//STEP 2
// function App({library}){
//   const what = useState("HAPPY");
//   console.log(what);
//   return(
//     <div className='App'>
//       <h1>Hello from {library}</h1>
//     </div>
//   );
//  }

// export default App;
// EXPLANATION FOR STEP 2
// So how do I set an initial state for this app? Well, I'm going to set it by 
// passing a value to this useState function. Check it out. The first value now 
// is happy.

//STEP 3
// function App(){
//   const [emotion, setEmotion] = useState("happy");
  
//   return(
//     <div className="App">
//     <h1>Current emotion is {emotion}</h1>
//     <button onClick={() => setEmotion("sad")}>Sad</button>
//     <button onClick={() => setEmotion("excited")}>Excited</button>
//     </div>
//   );
//  }

// export default App;
//EXPLANATION FOR STEP 3
// Now, how do I assign some sort of a name to this value? We know from before that 
// we can use array destructuring to do just this. So what we're going to do here on 
// line five is we'll create a value for a state called emotion. Then we're going to 
// create an updating function called setEmotion. Now, when my app first renders, the 
// state will be happy. So within our h1 here, let's go ahead and change this to read 
// Current emotion is emotion. So there we go. We our current emotion, our emotion as 
// soon as we run this is happy. Let's also get rid of this library from before. We want 
// to keep our code clean. So let's go ahead and fix that. Now, we've created our emotion 
// value. The second thing we want to do is call this setEmotion function to change the 
// state. We need to have this respond to some sort of user input. So I'm going to call 
// this button sad. We're going to hit the sad button. So now I'm going to add to this 
// an onClick method so I can change the emotion to sad. So here we're going to use this 
// function to call setEmotion and setEmotion will take in the new emotion, which is sad. 
// So check this out, as soon as I click Sad, the current emotion will be, you guessed it, 
// sad. Emotion is our state variable. setEmotion is the function that we're going to use 
// to update the state. Remember that you can use this for all sorts of new emotions if you 
// wanted to. Let's say excited. We'll set the emotion to excited. And now when I click the 
// Excited button, the current emotion is excited. So a state variable can be a string, it 
// can be a Boolean, it can be an object, it can be an array. But the important thing to 
// know is that when we pass in its initial value, this is the value when our app is 
// actually rendered to the page for the first time and then any time I call setEmotion, 
// I'll do so with a new state and that will change the state for the entire app.

//ChatGPT Explanation:

// - Managing State with `useState` and Changing State:
//   - To manage state in a React component, you can use the `useState` function.
//   - `useState` returns an array with the current state value and a state-updating function.

// - Initializing State:
//   - To initialize state, create a state variable using array destructuring.
//   - Example: `const [emotion, setEmotion] = useState("happy");`

// - Displaying State in JSX:
//   - You can display the current state value within JSX using curly braces.
//   - Example: `<h1>Current emotion is {emotion}</h1>`

// - Updating State with User Input:
//   - To change the state based on user input, use event handlers like `onClick`.
//   - Assign an event handler to a button or other element: `<button onClick={handleClick}>Sad</button>`

// - State Update Function:
//   - Create a function that handles state updates, often named with "set" + variable name.
//   - Example: `const setEmotion = newEmotion => setEmotion(newEmotion);`

// - Updating State:
//   - When a user interacts with an element with an event handler, the state update function is called.
//   - Example: `const handleClick = () => setEmotion("sad");`

// - Changing State Dynamically:
//   - State variables can hold different data types: strings, Booleans, objects, arrays, etc.
//   - When a state update function is called, the entire component re-renders with the new state.

// - Note on Initialization:
//   - The initial state value set in `useState` is the value when the component is first rendered.
//   - Subsequent updates to the state will cause re-renders based on the new state value.

// In summary, `useState` is a powerful tool to manage state in React components. 
// You can initialize state variables, display them in JSX, and update them based 
// on user interactions. The state update function triggers re-renders with the new 
// state value, allowing dynamic changes in your application's UI.