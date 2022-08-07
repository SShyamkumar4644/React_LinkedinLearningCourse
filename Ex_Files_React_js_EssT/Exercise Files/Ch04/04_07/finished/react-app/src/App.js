import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
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
