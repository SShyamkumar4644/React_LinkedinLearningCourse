// Incorporating useReducer
import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  // And by a little better, I mean it would be cool if we could extract this functionality 
  // into a separate function so that we don't have to manage this inside of our onChange. 
  // So, let's go ahead and change this. And the change we'll make is to use a different hook, 
  // to use a different hook function called useReducer. useReducer is going to take in two different 
  // arguments; the first is the function that we're going to use to update our state. So, that's just 
  // going to be placed right here. And then the second argument is going to be our initial state. 
  // So let's go ahead and we'll save that. We will get our onChange under control. Now, our onChange 
  // is going to take in the name of the function that we'll use to update the state. So we'll say, "setChecked." 
  // We'll give that a save. Now we can see this a little bit better. Remember, the function that we used to update 
  // the state is here, and then the initial state is here. As far as our output goes, the output is going to be 
  // exactly the same. But what's nice is that we don't have all of that extra code being written in the onChange 
  // that could potentially lead to bugs, and this is going to ensure that any time we call the setChecked function, the results are going to be the same.


  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;

// The next thing I want to do here is, let's create a check box that's going to manage state with useState. 
// So, we'll get rid of our useEffect call here. We will get rid of all of our state management stuff. Then we're going to, within our return statement, 
// we're going to, inside of this div, add an input. The input is going to have a type of checkbox, and so we should see that there. 
// Let's also display a label. And for now we'll just have it say, "checked." Okay. So, we'll zoom way in on that for now. 
// And what we want to do is create a checked variable. We'll say, "checked" and "setChecked," and that should be set equal to useState, 
// and the initial state is false. We're going to use this checked value to manage the state of the checkbox, so we want to use value here. 
// And now every time I change the status, I want this to change the output. So, we're going to call onChange, we will call setChecked, 
// and then we'll take a look at whatever the value of checked is and we will return the opposite. 

//before using useReducer

//STEP 1
// function App(){
//   const [checked, setChecked] = useState(false);
//   return(
//     <div className="App">
//       <input type="checkbox" 
//       value={checked} 
//       onChange={() => 
//       setChecked((checked) => !checked)}/>
//       <label> {checked ? "checked" : "not checked"} </label>
//     </div>

//   );
// }
//export default App;

// EXPLANATION FOR STEP 1
// The next thing I want to do here is, let's create a check box that's going to manage 
// state with useState. So, we'll get rid of our useEffect call here. We will get rid of 
// all of our state management stuff. Then we're going to, within our return statement, 
// we're going to, inside of this div, add an input. The input is going to have a type 
// of checkbox, and so we should see that there. Let's also display a label. And for 
// now we'll just have it say, "checked." Okay. So, we'll zoom way in on that for now. 
// And what we want to do is create a checked variable. We'll say, "checked" and 
// "setChecked," and that should be set equal to useState, and the initial state is 
// false. We're going to use this checked value to manage the state of the checkbox, 
// so we want to use value here. And now every time I change the status, I want this 
// to change the output. So, we're going to call onChange, we will call setChecked, 
// and then we'll take a look at whatever the value of checked is and we will return 
// the opposite. So now, we want to have our label reflect that change. So, inside 
// of the label, we'll check to see if checked is true. If so, we want it to read, 
// "checked;" otherwise, we want it to read, "not checked." So, on first render, 
// checked is false. Now, if I toggle this, it should work. So this is a good 
// way of being able to handle our checkbox using useState, but I want to update 
// this a little bit because I think that this could be a little better. And by a 
// little better, I mean it would be cool if we could extract this functionality 
// into a separate function so that we don't have to manage this inside of our onChange.

//ChatGPT Explanation:

// - Managing Checkbox State with `useState`:
//   - You can use `useState` to manage the state of a checkbox in a React component.
//   - The `useState` function returns a state value and an updating function for that value.

// - Implementing the Checkbox:
//   - Create a `checked` state variable and an associated `setChecked` function using `useState`.
//   - Use the `checked` state variable to control the state of the checkbox.
//   - Bind the `checked` value to the `value` attribute of the checkbox input.
//   - Implement the `onChange` event handler for the checkbox input to update the `checked` state.

// - Dynamic Label:
//   - Display a label next to the checkbox that dynamically changes based on the checkbox's state.
//   - Use the `checked` value to conditionally change the label text (e.g., "checked" or "not checked").

// - Separating Functionality:
//   - To improve code readability and organization, you can extract the logic for toggling the checkbox into a separate function.

// By using `useState` and extracting the logic into separate functions, 
// you can effectively manage the state of a checkbox and keep your code clean 
// and modular.

// STEP 2
// function App() {
//   const [checked, setChecked] = useReducer((checked) => !checked, false);
//   return (
//     <div className="App">
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={setChecked}
//       />
//       <label>
//         {checked ? "checked" : "not checked"}
//       </label>
//     </div>
//   );
// }

// export default App;

//EXPLANATION FOR STEP 2
// So, let's go ahead and change this. And the change we'll make is to use a different hook, 
// to use a different hook function called useReducer. useReducer is going to take in two 
// different arguments; the first is the function that we're going to use to update our state. 
// So, that's just going to be placed right here. And then the second argument is going to be 
// our initial state. So let's go ahead and we'll save that. We will get our onChange under 
// control. Now, our onChange is going to take in the name of the function that we'll use 
// to update the state. So we'll say, "setChecked." We'll give that a save. Now we can see 
// this a little bit better. Remember, the function that we used to update the state is here, 
// and then the initial state is here. As far as our output goes, the output is going to be 
// exactly the same. But what's nice is that we don't have all of that extra code being 
// written in the onChange that could potentially lead to bugs, and this is going to ensure 
// that any time we call the setChecked function, the results are going to be the same.

//ChatGPT Explanation:

// - Using `useReducer` to Manage Checkbox State:
//   - `useReducer` is an alternative hook to manage state, especially for more complex scenarios.
//   - It takes two arguments: a reducer function and an initial state value.

// - Implementing `useReducer` for Checkbox State:
//   - Define a reducer function that takes the current state and an action, and returns the new state.
//   - In the example of a checkbox, the action could be a boolean value indicating the new state.
//   - Pass the reducer function and the initial state (e.g., `false`) to `useReducer`.

// - Handling `onChange` with `useReducer`:
//   - Use the `dispatch` function provided by `useReducer` to update the state.
//   - In the `onChange` event handler, call `dispatch` with an action (e.g., `true` or `false`) to update the state.

// - Cleaner Code and Consistent Updates:
//   - Using `useReducer` can lead to cleaner code by separating the logic from the component.
//   - It ensures consistent updates to the state by centralizing the update logic in the reducer function.

// By using `useReducer`, you can simplify the `onChange` logic and ensure more 
// consistent state updates, especially for more complex state management scenarios.