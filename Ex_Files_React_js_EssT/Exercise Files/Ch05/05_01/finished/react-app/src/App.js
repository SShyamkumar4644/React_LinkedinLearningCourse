// Working with uncontrolled components
import "./App.css";
import { useRef } from "react";
// I want to instead incorporate another one of these hooks called useRef. 
// A ref or a reference is a way that we can reach out to an individual element 
// and check in with what its value is.

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  // Once I've created this submit function, we're going to forward the form, add a handler called onSubmit, 
  // and basically any time the form submits, we want to do whatever is part of this function. So here's where 
  // those refs come into play. I want to be able to reach out to this and grab the name of the color, as well 
  // as the color itself. Now, the way that we'll do this is we're going to us txtTitle. We'll set that equal to useRef 
  // and then we'll say hexColor. And we'll also set that equal to useRef. So what are these values? Let's take a look 
  // at it in the console. We should see an object here and the object has this key on it called current. 

  const submit = (e) => {
    e.preventDefault();
    // The button will just say Add and we are going to inside of this App function 
    // create another function called submit. We're going to prevent the default 
    // behavior of the form with preventDefault. So we'll prevent the page from 
    // refreshing here.
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    //  want to reach out to figure out what the current value of the text field, as well as our color. 
    // So we'll do that here. We're going to create a variable called Title, which we'll set equal to whatever the 
    // txtTitle.current.value is. Same with the color. So we'll say const color equals hexColor.current.value. Then 
    // we're going to alert whatever these values are. So I'll just say title, color. Perfect, so now, if we say purple, 
    // we find purple here. And we click Add. We should see both the value, as well as that color. 
    txtTitle.current.value = "";
    hexColor.current.value = "";
    // Now, another little cleanup thing we might want to do is we can, once we click OK, we'll see that purple and 
    // the color purple are still here. So txtTitle.current.value, as soon as I alert it, we want to set it back to 
    // an empty string. Same with hexColor.current.value. We'll set that equal to an empty string. And now if we try 
    // that one more time with say yellow, we get the alert, we get those values and then once we click OK, we'll get those cleared out.
  };
  return (
    <form onSubmit={submit}>
      <input
        ref={txtTitle} // So think of 
        // the current as being whatever the value of this field might be at any given time. We're going to attach these 
        // references to these inputs. So the first ref will be called txtTitle. And the second ref hexColor. So now if I 
        // try that again, we should see the object again and the current input has a value. 
        type="text"
        placeholder="color title..."
      />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
    // So we're going to use this in our app. And we're going to create our first React form. In it, 
    // we'll have an input. This time it'll be type equals text and we'll call this a placeholder. 
    // We'll say color title. And then the other type of input that we're going to use is a color input. 
    // So if you haven't worked with this one before, it's pretty cool. It's an input that's going to collect 
    // some sort of color value. So the other thing I need to add here is a button.
  );
}

export default App;

// So think of a useRef as being a hook that is going to reach out to some sort 
// of UI element and get its value. The way that we're handling this form right 
// now, we're creating what's called an uncontrolled component. So we're saying 
// create this little container, give us whatever that value is and something to 
// keep in mind is unlike useState where the component will re-render if there's 
// some sort of a change, useRef is not going to re-render. We always are going 
// to have to reach out to the current value, the current dot value to figure out
// what that value actually is by reaching out to the input itself.

//Step 1
// function App(){
//   const submit = (e) =>{
//     e.preventdefault();
//   }

//   return(
//     <form onSubmit={submit}>
//       <input type="text" placeholder='color title'/>
//       <input type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

//Step 2
// function App(){
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   console.log(txtTitle);
//   const submit = (e) =>{
//     e.preventdefault();
//   }

//   return(
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder='color title'/>
//       <input ref={hexColor} type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;
//EXPLANATION FOR STEP 2:
// I want to be able to reach out to this and grab the name of the color, as well 
// as the color itself. Now, the way that we'll do this is we're going to us txtTitle. We'll set that equal to useRef 
// and then we'll say hexColor. And we'll also set that equal to useRef. So what are these values? Let's take a look 
// at it in the console. We should see an object here and the object has this key on it called current. 

//ChatGPT Explanation:

// - Refs in React:
//   - Refs are a way to access and interact with the DOM elements directly in React.

// - Creating Refs:
//   - To create a ref, you use the `useRef` hook.
//   - Refs are used to store references to DOM elements or other values that persist across renders.

// - Accessing DOM Elements with Refs:
//   - You can create refs for specific DOM elements and access their properties using the `.current` property of the ref.

// - Using Refs to Capture Input:
//   - In the example given, `txtTitle` and `hexColor` are refs created using `useRef`.
//   - `txtTitle.current` will refer to the corresponding DOM input element for the title.
//   - `hexColor.current` will refer to the corresponding DOM input element for the color.

// - Use Cases of Refs:
//   - Refs can be used for various purposes like focusing elements, getting input values, and interacting with third-party libraries.

// Using `useRef` allows you to create references to specific DOM 
// elements and interact with them in your React components.

//STEP 3
// function App(){
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   // console.log(txtTitle);
//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     alert(`${title}, ${color}`);
//   };

//   return(
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder='color title'/>
//       <input ref={hexColor} type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;
//Explanation for step 3
// So here's where those refs come into play. I want to be able to reach out to this and 
// grab the name of the color, as well as the color itself. Now, the way that we'll do this 
// is we're going to us txtTitle. We'll set that equal to useRef and then we'll say hexColor. 
 // And we'll also set that equal to useRef. So what are these values? Let's take a look at 
 // it in the console. We should see an object here and the object has this key on it called 
 // current. So think of the current as being whatever the value of this field might be at any 
 // given time. We're going to attach these references to these inputs. So the first ref will be 
 // called txtTitle. And the second ref hexColor. So now if I try that again, we should see 
 // the object again and the current input has a value. So that's really what I'm curious about here. 
 // I want to reach out to figure out what the current value of the text field, as well as our color. 
 // So we'll do that here. We're going to create a variable called Title, which we'll set equal to 
 // whatever the txtTitle.current.value is. Same with the color. So we'll say const color equals 
 // hexColor.current.value. Then we're going to alert whatever these values are. So I'll just say 
 // title, color. Perfect, so now, if we say purple, we find purple here. And we click Add. We 
 // should see both the value, as well as that color.

 //ChatGPT Explanation:
 
// - Refs for DOM Access:
//   - Refs can be used to access and manipulate DOM elements directly in React components.

// - Creating Refs with `useRef`:
//   - `useRef` is a hook that allows you to create refs.
//   - In the example, `txtTitle` and `hexColor` are created using `useRef`.

// - Refs' `current` Property:
//   - The `current` property of a ref points to the current value of the ref.
//   - When a ref is attached to a DOM element, `ref.current` provides access to the element's properties.

// - Using Refs to Capture Input Values:
//   - The purpose of `txtTitle` and `hexColor` refs is to capture the input values from the corresponding input fields.

// - Retrieving Input Values:
//   - In the example, the input values for the title and color are retrieved using `txtTitle.current.value` and `hexColor.current.value`.

// - Alerting Input Values:
//   - The retrieved values (title and color) are alerted using the `alert` function.

// - Demonstrating Input Retrieval:
//   - After entering input values like "purple" for title and "#800080" for color, clicking the "Add" button alerts these values.

// Using refs allows you to access and manipulate DOM elements 
// and their values directly in React components. In this case, 
// refs are used to capture the input values for title and color 
// and then demonstrate their retrieval using the `alert` function.

 //Step 4:
//  function App(){
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   // console.log(txtTitle);
//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     alert(`${title}, ${color}`);
//     txtTitle.current.value = "";
//     hexColor.current.value = ""; // add these two
//   };

//   return(
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder='color title'/>
//       <input ref={hexColor} type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;
//EXPLANATION FOR STEP 4
//Now, another little cleanup thing we might want to do is we can, once we click 
// OK, we'll see that purple and the color purple are still here. 
// So txtTitle.current.value, as soon as I alert it, we want to set it back 
// to an empty string. Same with hexColor.current.value. We'll set that equal 
// to an empty string. And now if we try that one more time with say yellow, 
// we get the alert, we get those values and then once we click OK, we'll get 
// those cleared out. So think of a useRef as being a hook that is going to 
// reach out to some sort of UI element and get its value. The way that we're 
// handling this form right now, we're creating what's called an uncontrolled 
// component. So we're saying create this little container, give us whatever 
// that value is and something to keep in mind is unlike useState where the 
// component will re-render if there's some sort of a change, useRef is not 
// going to re-render. We always are going to have to reach out to the current 
// value, the current dot value to figure out what that value actually is by 
// reaching out to the input itself.

//ChatGPT Explanation:

// - Clearing Input Values After Submission:
//   - To clean up the form after submission, `txtTitle.current.value` and `hexColor.current.value` are set to empty strings.

// - Handling Form Inputs as Uncontrolled Components:
//   - The example demonstrates creating an uncontrolled component for handling the form inputs.
//   - Uncontrolled components work by directly querying the DOM for the current values of the inputs using `ref.current.value`.

// - Limitations of `useRef` with Uncontrolled Components:
//   - Unlike `useState`, which triggers re-renders when state changes, `useRef` doesn't cause re-renders.
//   - Accessing `ref.current.value` allows fetching the current value from the input without re-rendering the component.

// - Understanding `useRef`:
//   - `useRef` is used to reach out to UI elements and get their current values.
//   - It's particularly useful for managing form input values and other DOM interactions.

// - Form Cleanup and Reset:
//   - Clearing the values after submission creates a better user experience, as the form is reset and ready for new inputs.

// - Uncontrolled Components:
//   - Uncontrolled components rely on direct DOM manipulation and are suitable for simple interactions where real-time state updates are not required.

// Using `useRef` in this way allows you to create a more lightweight approach to 
// handling form inputs without triggering re-renders and is suitable for uncontrolled 
// components.



