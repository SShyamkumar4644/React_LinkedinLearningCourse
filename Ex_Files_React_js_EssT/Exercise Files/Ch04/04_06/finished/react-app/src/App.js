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
