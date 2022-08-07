// Working with useEffect
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);// Now, something else to note here is useEffect 
  // actually takes into arguments. The first is this function that's 
  // going to be called whenever we want our effect to happen. 
  // But the second has to do with when the effect is actually 
  // being called. We're going to pass into this an empty array. 
  // If you pass in an empty array, this means that the effect 
  // is not going to be called again after the first render. So, 
  // it's only going to be called once as soon as the component renders, 
  // but not as we change this emotion. We call this array, the dependency 
  // array because we can use it to define when this should be called. Should 
  // it just be called once when our component first renders or another 
  // option is we could pass in a property, a state value, to listen for 
  // any changes in this array. So check this out. If I refresh, 
  // it's happy right now. If I click it again, excited, sad. 
  // Anytime this emotion changes, we're going to see this useEffect fire.


  // So the first thing we want to do, we'll import useEffect from react and 
  // then we're going to use inside of our app component this useEffect hook. 
  // Now this time, instead of setting this equal to some sort of array, 
  // we're going to pass in a function to this. So we'll go ahead and say 
  // console log, it's emotion right now. So now we'll see that this will 
  // log this message to our console. We think about this as being a side 
  // effect. It's not necessarily going to be affected by the render but 
  // instead it's going to be something that just happens alongside the render.
  

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
  );
}

export default App;

// Another important hook that's part of the react library is useEffect. 
// UseEffect is another one of these hooks that is built into react. 
// And this one can feel a little bit tricky because it's typically 
// used to manage side effects that aren't related to a components render. 
// Things like console messages, loading data, and working with animations 
// can often benefit from useEffect. 
