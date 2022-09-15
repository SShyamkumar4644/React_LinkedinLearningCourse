// Building a custom Hook
import "./App.css";
import { useState } from "react";

// A custom hook is a function and this function is going to always start with the keyword use.
function useInput(initialValue) {
  const [value, setValue] =
    useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
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
  const [colorProps, resetColor] =
    useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(
      `${titleProps.value}, ${colorProps.value}`
    );
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        // All right, and finally, instead of having our onChange
        // and our value passed in this way, what we're going to do
        // instead is we're going to push in all of the values from
        // titleProps. This is a syntax that we're using to basically
        // spread all of the properties into this input. This is a
        // technique that you should use sort of sparingly but we're okay
        // with it in this case because we know that titleProps is only
        // the value and the onChange. 
        type="text"
        placeholder="color title..."
      />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;

// We've seen how React hooks can add additional functionality to our applications. We can use the state hook to manage state of form fields. 
// We can use ref to reach out to these inputs and figure out their values. And we've also used useEffect to perform side effects. Now, one of 
// the most exciting things about working with hooks is that we can create our own custom hooks that can be used inside of our applications to handle 
// all sorts of different things. So we want to think about our form here, right? We have a form element and the form element has two different inputs. 
// When I type into this input field, there's always going to be some sort of input and then we also want to be able to clear out whatever I've typed 
// into those inputs after I have submitted the form. So there's some kind of repeatable behavior going on here and this is how we're going to think 
// about it when we create our own custom hook. 

// We're able to create a custom hook. Remember,
// a hook is just a function that we can use for any sort
// of repeatable code. We want to think about a hook as being
// very reusable. We can share it across our project, we can
// write tests for this function and then we can use it inside
// of our form any time we need to process some user input. So think about all of the different form fields that I might create in my lifetime. They always take something in. We handle a change event, we handle resetting that field when we submit the form. So this is really flexible and reusable across projects and across components.

//STEP 1
// import "./App.css";
// import { useState } from "react";

// function useInput(initialValue) {
//   const [value, setValue] =
//     useState(initialValue);
//   return [
//     {
//       value,
//       onChange: (e) => setValue(e.target.value)
//     },
//     () => setValue(initialValue)
//   ];
// }

// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] =
//     useState("#000000");
//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${titleProps.value}, ${colorProps.value}`);
//     resetTitle();
//     resetColor();
//   };
//   return (
//     <form onSubmit={submit}>
//       <input
//         {...titleProps}
//         type="text"
//         placeholder="color title..."
//       />
//       <input {...colorProps} type="color" />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

// We've seen how React hooks can add additional functionality to our applications. 
// We can use the state hook to manage state of form fields. We can use ref to reach 
// out to these inputs and figure out their values. And we've also used useEffect to 
// perform side effects. Now, one of the most exciting things about working with hooks 
// is that we can create our own custom hooks that can be used inside of our applications 
// to handle all sorts of different things. So we want to think about our form here, right? 
// We have a form element and the form element has two different inputs. When I type into this 
// input field, there's always going to be some sort of input and then we also want to be able 
// to clear out whatever I've typed into those inputs after I have submitted the form. So there's 
// some kind of repeatable behavior going on here and this is how we're going to think about it 
// when we create our own custom hook. A custom hook is a function and this function is going to 
// always start with the keyword use. So this time for our useInput function, we want to take in 
// some sort of initialValue and we want to inside of this use another one of these useState hooks. 
// So any field, any input is going to take in a value and we're also going to use the setValue 
// function to update that value. And then finally, useState when we call it will take in some sort 
// of initialValue. So what we actually want to return, think of a hook, remember our useState hook 
// returns a pair. useRef is going to return this object. Our hook, and again, this can return whatever 
// you want, is going to return an array. The first item in the array is going to be the state value as 
// well as an onChange, which takes in whatever this input is and calls setValue with the event.target.value. 
// So really similar to what we did with our controlled component. The second item that we're going to pass 
// here is the cleanup function. We'll set the value to whatever that initialValue is. All right, so we'll 
// give that a save. And now within the form, we're going to use useInput. So instead of useState here, 
// we're going to use useInput. Our initialValue is going to be an empty string, and we're going to call 
// this titleProps, so again, it's the value and the onChange. And then then we'll also call the second 
// item resetTitle and this will be colorProps and resetColor. And we'll keep our initialValue as black here. 
// So here we can do some pretty cool cleanup. So we could say titleProps.value, so we want to figure out 
// what that is. colorProps.value. And now we can call resetTitle and we don't actually have to pass 
// anything in here, so we're making this a little bit more reusable. All right, and finally, 
// instead of having our onChange and our value passed in this way, what we're going to do 
// instead is we're going to push in all of the values from titleProps. This is a syntax that 
// we're using to basically spread all of the properties into this input. This is a technique 
// that you should use sort of sparingly but we're okay with it in this case because we know 
// that titleProps is only the value and the onChange. So we'll do the same thing here. We'll 
// get rid of the value, we'll get rid of the onChange and we're okay to use this spread syntax 
// to push in the colorProps because we know we're not pushing in too many properties, we're just 
// pushing in two. Okay, so we have used our useInput hook, our custom hook. And now what we'll do 
// is we'll try to grab purple. We see that pop up and then we clear it out on OK. So this is pretty 
// exciting. We're able to create a custom hook. Remember, a hook is just a function that we can use 
// for any sort of repeatable code. We want to think about a hook as being very reusable. We can share 
// it across our project, we can write tests for this function and then we can use it inside of our 
// form any time we need to process some user input. So think about all of the different form fields 
// that I might create in my lifetime. They always take something in. We handle a change event, we 
// handle resetting that field when we submit the form. So this is really flexible and reusable across projects and across components.
