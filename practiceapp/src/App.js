// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("");
//   const [color, setColor] = useState("#000000");
//   // Next thing I want to do, is we're going to create two different
//   // state variables, title, setTitle. Our initial state will be an
//   // empty string. We also want to create a color value and the initial
//   // state here should be zero, zero, zero, zero, zero, zero, which is black.
//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${title}, ${color}`);
//     setTitle("");
//     setColor("#000000");
//     // give us our color title and our color value and then we also want to perform
//     // that cleanup with setTitle. We'll set it back to an empty string and then
//     // setColor, we'll set back to our initial state, which is black.
//   };
//   return (
//     <form onSubmit={submit}>
//       <input
//         value={title}
//         onChange={(event) =>
//           setTitle(event.target.value)
//         }
//         type="text"
//         placeholder="color title..."
//       />
//       <input
//         value={color}
//         type="color"
//         onChange={(event) =>
//           setColor(event.target.value)
//         }
//         // Now within our inputs, we're going to set the value to title same goes
//         // for our color input. We'll set that value to color. And then remember,
//         // we want to trigger some sort of onChange event. And this time we want
//         // to trigger some sort of onChange event for our inputs. That's going to
//         // look like this. We'll take in the event and we'll call setTitle with
//         // whatever the event target value is. So, in other words, when I add
//         // something to this field I want to be able to capture that on the
//         // target.value. We'll do the same for color, but here we're just going
//         // to say, event setColor event.target.value.
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

// Building a custom Hook
import "./App.css";
import { useState } from "react";

// A custom hook is a function and this function is going to always start with the keyword use.
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}
// So this time for our useInput function, we want to take in some sort of initialValue and
// we want to inside of this use another one of these useState hooks. So any field, any input is
// going to take in a value and we're also going to use the setValue function to update that value.
// And then finally, useState when we call it will take in some sort of initialValue. So what we
// actually want to return, think of a hook, remember our useState hook returns a pair. useRef is
// going to return this object. Our hook, and again, this can return whatever you want, is going
// return an array. The first item in the array is going to be the state value as well as an onChange,
// which takes in whatever this input is and calls setValue with the event.target.value. So really
// similar to what we did with our controlled component. The second item that we're going to pass here is the cleanup function. We'll set the value to whatever that initialValue is.

function App() {
  // Our initialValue is going to be an empty string, and we're going to call this titleProps, so again,
  // it's the value and the onChange. And then then we'll also call the second item resetTitle and this will
  // be colorProps and resetColor. And we'll keep our initialValue as black here. So here we can do some pretty cool
  // cleanup. So we could say titleProps.value, so we want to figure out what that is. colorProps.value. And now we can
  // call resetTitle and we don't actually have to pass anything in here, so we're making this a little bit more reusable.
  // All right, and finally, instead of having our onChange and our value passed in this way, what we're going to do instead
  // is we're going to push in all of the values from titleProps.
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
