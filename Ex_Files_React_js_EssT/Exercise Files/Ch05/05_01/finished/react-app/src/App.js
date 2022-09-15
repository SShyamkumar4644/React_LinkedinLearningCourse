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



