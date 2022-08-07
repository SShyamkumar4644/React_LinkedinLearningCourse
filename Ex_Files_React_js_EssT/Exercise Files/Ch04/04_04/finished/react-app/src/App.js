// Understanding the useState Hook
import "./App.css";
import { useState } from "react";
// Managing state in a React application is really important and the most modern way to handle state variables 
// in an app is to use a function called useState.
function App() {
  const [emotion, setEmotion] = useState("happy");
// Well, I'm going to set it by passing a value to this useState function. Check it out. 
// The first value now is happy. Now, how do I assign some sort of a name to this value? 
// We know from before that we can use array destructuring to do just this. So what we're 
// going to do here on line five is we'll create a value for a state called emotion. Then we're 
// going to create an updating function called setEmotion. Now, when my app first renders, the state will be happy. 

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
    </div>
    // The second thing we want to do is call this setEmotion function to change the state. We need to have this respond to some sort of user input. 
    // So I'm going to call this button sad. We're going to hit the sad button. So now I'm going to add to this an onClick method so I can change the 
    // emotion to sad. So here we're going to use this function to call setEmotion and setEmotion will take in the new emotion, which is sad. So check 
    // this out, as soon as I click Sad, the current emotion will be, you guessed it, sad. Emotion is our state variable. setEmotion is the function that 
    // we're going to use to update the state
  );
}

export default App;

// But what we will actually want to do here is we want to, on line five, use this value called what 
// and we're using the what value to figure out what does useState return? When I call this state function, 
// what is actually being returned? So what we see here, if we hit Refresh to clear out those older logs, we 
// see an array. This array has two values. The first is an undefined value. And then the second is a function. 
// So we want to think about this undefined value as being the state value currently when we run the app for the 
// first time, when we render our app component. The second value here is a function that we're going to use to update the state. 

// Remember that you can use this for all sorts of new emotions if you wanted to. 
// Let's say excited. We'll set the emotion to excited. And now when I click the 
// Excited button, the current emotion is excited. So a state variable can be a 
// string, it can be a Boolean, it can be an object, it can be an array. But the 
// important thing to know is that when we pass in its initial value, this is the 
// value when our app is actually rendered to the page for the first time and then 
// any time I call setEmotion, I'll do so with a new state and that will change the 
// state for the entire app.

