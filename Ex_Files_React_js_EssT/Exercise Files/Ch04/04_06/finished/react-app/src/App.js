// Understanding the dependency array
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);
  // The point that I'm getting to, I swear, I have a point, is to make sure that we're 
  // keeping track of these emotions, and we're making sure to trigger these emotional changes when appropriate. 
  // So, check this out. We'll say useEffect, we'll pass in our helper function or callback function here, 
  // we'll say console.log, and we'll say it's secondary around here. Now, if I don't pass in that dependency 
  // array, we're going to notice that, as soon as I start to make these changes, trigger these emotions, we're 
  // going to get it's tired around here for every single one.

  // If we pass in that empty array, remember this will just call this useEffect when our component first renders. 
  // So, no matter how many emotions I change, we won't see it's tired again. Now, if we were to say secondary here, 
  // this is going to call that anytime that emotion changes. Now, something else to keep in mind is you could pass 
  // more than one of these into the dependency array. You could pass more than one of these state variables if you 
  // wanted to. So let's say you wanted to anytime the secondary emotion changed and the initial emotion changed, we 
  // want to call this function. Well, we can do it. We could say sad, excited, and then, if I say grateful, then we're 
  // going to see both of these actually rendering. So the dependency array, very important. Make sure that you don't 
  // forget to include it when you're calling useEffect.


  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>
      <h2>
        Current secondary emotion is {secondary}.
      </h2>
      <button
        onClick={() => setSecondary("grateful")}
      >
        Grateful
      </button>
    </div>
  );
}

export default App;

// It's also possible to use our useEffect calls and our useState calls to keep 
// track of different variables. So let's go ahead and create another one of these. 
// We're going to call this secondary and setSecondary, meaning emotion, and then 
// we're going to say useState, and our initial state is tired.

// So what we're going to do here is we're going to add another button. That's going to trigger this change. 
// So, setEmotion. Let's go ahead and put one next door. We'll say h2 Current secondary emotion is secondary. And now, we'll 
// say Grateful. So, now, we're going to add an onClick. Remember that this should trigger this change, setSecondary. And we'll 
// go ahead and trigger that here. We'll say setSecondary and pass in a new emotion, which will be grateful. Perfect. So, now, 
// this should work. Now, this is great for handling different emotions, but we also want to make use of our useEffect here. 
// The point that I'm getting to, I swear, I have a point, is to make sure that we're keeping track of these emotions, and 
// we're making sure to trigger these emotional changes when appropriate.

//STEP 1
// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   });
//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("sad")}>
//         Sad
//       </button>
//       <button
//         onClick={() => setEmotion("excited")}
//       >
//         Excited
//       </button>
//       <h2>
//         Current secondary emotion is {secondary}.
//       </h2>
//       <button
//         onClick={() => setSecondary("grateful")}
//       >
//         Grateful
//       </button>
//     </div>
//   );
// }

// export default App;
//EXPLANATION FOR STEP 1
// It's also possible to use our useEffect calls and our useState calls to keep 
// track of different variables. So let's go ahead and create another one of these. 
// We're going to call this secondary and setSecondary, meaning emotion, and then 
// we're going to say useState, and our initial state is tired. Very possible to be 
// happy and tired all at once. I always am. So what we're going to do here is we're 
// going to add another button. That's going to trigger this change. So, setEmotion. 
// Let's go ahead and put one next door. We'll say h2 Current secondary emotion is 
// secondary. And now, we'll say Grateful. So, now, we're going to add an onClick. 
// Remember that this should trigger this change, setSecondary. And we'll go ahead 
// and trigger that here. We'll say setSecondary and pass in a new emotion, which 
// will be grateful. Perfect. So, now, this should work. Now, this is great for 
// handling different emotions, but we also want to make use of our useEffect here. 
// The point that I'm getting to, I swear, I have a point, is to make sure that we're 
// keeping track of these emotions, and we're making sure to trigger these emotional 
// changes when appropriate. So, check this out. We'll say useEffect, we'll pass in our 
// helper function or callback function here, we'll say console.log, and we'll say it's secondary around here. 

//ChatGPT Explanation:

// - Using `useEffect` and `useState` Together:
//   - You can use both `useEffect` and `useState` hooks in combination to manage different variables and their associated side effects.

// - Managing Secondary Emotions:
//   - Introduced a secondary emotion state using `useState`, initialized with "tired".
//   - Added a button to change the secondary emotion using `setSecondary`.
//   - Displayed the secondary emotion using an `h2` tag with the message "Current secondary emotion is secondary".

// - Utilizing `useEffect`:
//   - The goal is to keep track of and trigger changes to secondary emotions appropriately.
//   - Demonstrated the use of `useEffect` with a `console.log` side effect to log "secondary" when the component renders or when the secondary emotion changes.

// - Syncing State and Side Effects:
//   - By using `useEffect`, you ensure that side effects occur when the component renders or when specific state values change.
//   - This helps to keep state and side effects in sync, allowing you to respond to changes in your application.

// In summary, combining `useEffect` and `useState` allows you to manage and respond 
// to changes in different variables and their associated side effects. 
// Using `useEffect` helps ensure that side effects are triggered at the right times, 
// helping you maintain synchronized behavior in your React components.

//STEP 2
// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   });
//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("sad")}>
//         Sad
//       </button>
//       <button
//         onClick={() => setEmotion("excited")}
//       >
//         Excited
//       </button>
//       <h2>
//         Current secondary emotion is {secondary}.
//       </h2>
//       <button
//         onClick={() => setSecondary("grateful")}
//       >
//         Grateful
//       </button>
//     </div>
//     </div>
//   );
// }

// export default App;

// EXPLANATION FOR STEP 2
// Now, if I don't pass in that dependency array, we're going to notice that, 
// as soon as I start to make these changes, trigger these emotions, we're going 
// to get it's tired around here for every single one. If we pass in that empty 
// array, remember this will just call this useEffect when our component first 
// renders. So, no matter how many emotions I change, we won't see it's tired again.

//ChatGPT Explanation:

// - Managing Side Effects with `useEffect`:
//   - Using `useEffect` helps manage side effects that are not directly related to component rendering, like console messages or data loading.

// - Effect of Dependency Array:
//   - The dependency array in `useEffect` specifies when the effect should be called.
//   - Without a dependency array, the effect runs every time the component renders, including on state changes.
//   - When an empty dependency array is provided, the effect only runs once when the component initially renders.

// - Preventing Unnecessary Side Effects:
//   - Not providing a dependency array can lead to repeated side effect executions on state changes, which might not be intended.
//   - Using an empty dependency array ensures the effect is executed only once during the initial render, preventing unnecessary side effects.

// In summary, the dependency array in `useEffect` controls when a side effect is 
// triggered. Providing an empty dependency array ensures the effect runs only once 
// during the initial component render, avoiding excessive and unintended side effect 
// executions.

//STEP 3
// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   }, [secondary]);
//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("sad")}>
//         Sad
//       </button>
//       <button
//         onClick={() => setEmotion("excited")}
//       >
//         Excited
//       </button>
//       <h2>
//         Current secondary emotion is {secondary}.
//       </h2>
//       <button
//         onClick={() => setSecondary("grateful")}
//       >
//         Grateful
//       </button>
//     </div>
//   );
// }

// export default App;

// EXPLANATION FOR STEP 3
// Now, if we were to say secondary here, this is going to call that anytime that emotion changes. 
// Now, something else to keep in mind is you could pass more than one of these into the dependency 
// array. You could pass more than one of these state variables if you wanted to. So let's 
// say you wanted to anytime the secondary emotion changed and the initial emotion changed, 
// we want to call this function. Well, we can do it. We could say sad, excited, and then, 
// if I say grateful, then we're going to see both of these actually rendering. So the 
// dependency array, very important. Make sure that you don't forget to include it 
// when you're calling useEffect.

//ChatGPT Explanation:

// - `useEffect` and Dependency Array:
//   - The dependency array in `useEffect` specifies which state variables trigger the effect when they change.
//   - You can include state variables in the dependency array to control when the effect runs based on their changes.

// - Multiple Dependencies:
//   - You can include multiple state variables in the dependency array by listing them inside the array.
//   - When any of the state variables listed in the dependency array change, the effect will be triggered.

// - Importance of Dependency Array:
//   - It's crucial to include the dependency array to ensure the effect runs when the intended state changes occur.
//   - Missing the dependency array can lead to unintended effects being triggered too frequently.

// In summary, the dependency array in `useEffect` allows you to specify which state 
// variables should trigger the effect when they change. You can list multiple state 
// variables in the dependency array to control the conditions under which the effect 
// runs. Including the correct dependency array is essential for managing when side 
// effects occur in your React components.



