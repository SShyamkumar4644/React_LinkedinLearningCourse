// Creating controlled form elements
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  // Next thing I want to do, is we're going to create two different 
  // state variables, title, setTitle. Our initial state will be an 
  // empty string. We also want to create a color value and the initial 
  // state here should be zero, zero, zero, zero, zero, zero, which is black.
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
    // give us our color title and our color value and then we also want to perform 
    // that cleanup with setTitle. We'll set it back to an empty string and then 
    // setColor, we'll set back to our initial state, which is black.
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        type="color"
        onChange={(event) =>
          setColor(event.target.value)
        }
        // Now within our inputs, we're going to set the value to title same goes 
        // for our color input. We'll set that value to color. And then remember, 
        // we want to trigger some sort of onChange event. And this time we want 
        // to trigger some sort of onChange event for our inputs. That's going to 
        // look like this. We'll take in the event and we'll call setTitle with 
        // whatever the event target value is. So, in other words, when I add 
        // something to this field I want to be able to capture that on the 
        // target.value. We'll do the same for color, but here we're just going 
        // to say, event setColor event.target.value.
      />
      <button>ADD</button>
    </form>
  );
}

export default App;

// It's also possible to manage forms using state. So this useRef, anytime we 
// see useRef being used we are creating what's called an uncontrolled component 
// where we manage our form elements outside of state but using state for this is 
// a really good idea too. So the first thing we want to do is remove useRef and 
// all references, no pun intended to that. Then we're going to update our app 
// here to remove those. We'll also remove refs from both of our inputs. And 
// finally, let's go ahead and remove those references to current.value.

// Whenever we see a state value being used with a form. We want to think about 
// this as being a controlled component, controlled meaning that we're controlling 
// our form by creating state values for these form elements.

// STEP 1
// Working with uncontrolled components
// import "./App.css";
// import { useState } from "react";
// function App() {
 
  
//   const submit = (e) => {
//     e.preventDefault();
  
//     alert(`${title}, ${color}`);
//     txtTitle.current.value = "";
//     hexColor.current.value = ""; 
//   };
//   return (
//     <form onSubmit={submit}>
//       <input
       
//         type="text"
//         placeholder="color title..."
//       />
//       <input  type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }
// export default App;
//EXPLNATION FOR STEP 1
// It's also possible to manage forms using state. So this useRef, 
// anytime we see useRef being used we are creating what's called an 
// uncontrolled component where we manage our form elements outside of 
// state but using state for this is a really good idea too. So the 
// first thing we want to do is remove useRef and all references, no 
// pun intended to that. Then we're going to update our app here to 
// remove those. We'll also remove refs from both of our inputs. 
// And finally, let's go ahead and remove those references to current.value. 

//STEP 2
// Working with uncontrolled components
// import "./App.css";
// import { useState } from "react";
// function App() {
//   const [title, setTitle] = useState("");
//   const [color, setColor] = useState("#000000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${title}, ${color}`);
//     setTitle("");
//     setColor("#000000");
//   };
//   return (
//     <form onSubmit={submit}>
//       <input
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//         type="text"
//         placeholder="color title..."
//       />
//       <input
//         value={color}
//         type="color"
//         onChange={(event) => setColor(event.target.value)}
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;
//EXPLNATION FOR STEP 2
// Next thing I want to do, is we're going to create two different state variables, 
// title, setTitle. Our initial state will be an empty string. We also want to create a 
// color value and the initial state here should be zero, zero, zero, zero, zero, zero, 
// which is black. Now within our inputs, we're going to set the value to title same goes 
// for our color input. We'll set that value to color. And then remember, we want to 
// trigger some sort of onChange event. And this time we want to trigger some sort of 
// onChange event for our inputs. That's going to look like this. We'll take in the event 
// and we'll call setTitle with whatever the event target value is. So, in other words, 
// when I add something to this field I want to be able to capture that on the target.value. 
// We'll do the same for color, but here we're just going to say, event setColor event.target.value. 
// Nice. So if we zoom out a little bit, we should see that both of these inputs now are handling 
// our state and each is associated with its own state variable. Now, the final thing I want to 
// do here is let's go ahead and we'll keep this alert here and let's try this. This should pop 
// up, give us our color title and our color value and then we also want to perform that cleanup 
// with setTitle. We'll set it back to an empty string and then setColor, we'll set back to our 
// initial state, which is black. So now trying it again, let's say orange and we'll get a 
// beautiful orange color there. And now once we click, OK, both should be exited out. 
// Whenever we see a state value being used with a form. We want to think about this as 
// being a controlled component, controlled meaning that we're controlling our form by 
// creating state values for these form elements.




