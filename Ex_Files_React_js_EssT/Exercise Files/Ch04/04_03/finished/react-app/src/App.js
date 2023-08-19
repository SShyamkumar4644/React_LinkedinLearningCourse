// Destructuring arrays and objects
import "./App.css";

// const cities = ["Tokyo","Tahoe City", "Bend"];
// console.log(cities[0]); // Tokyo

const [firstCity, second] = [
  "Tokyo", // firstCity pointing to tokyo
  "Tahoe City",// second pointing to tahoe city
  "Bend"// So what we're doing with array destructuring, is we are 
  // assigning a variable name based on a position in the array.
];
// Now, unlike our destructuring of the object, we can't reach into 
// the city's array and assign some sort of a property name based on a key. 
// Instead what we would need to do, is we would need to use a pattern 
// called array destructuring. We're going to replace cities with a set of 
// square braces and then we're going to say first city and then now we will 
// console log first city and this will give us Tokyo. So now what 
// we've done with array destructuring, is we've given this value a name. 
// We could also say second. We're going to see Tahoe City being 
// added here. So what we're doing with array destructuring, is we are 
// assigning a variable name based on a position in the array.

console.log(firstCity);
console.log(second);

function App({ library }) { // props, instaed of props, can 
  // only mention library and remove props.library and
  // mention only library
  return (
    <div className="App">
      <h1>Hello from {library}</h1> 
    </div>
    //props.library we can use, but
    // Now something that's important to do here, let's go 
    // back to our app.js, 
    // is we can use destructuring to actually grab properties from 
    // this prop's object by their key. 
    // So think of the object as having a key called library, a value 
    // called react. Now, what I can do here, 
    // is I can say, let's just select the library key and now I don't 
    // have to access this via props.library, 
    // instead I can just grab it on library. So again, we can just grab 
    // that directly from that object. 
    // This is a pattern called destructuring or destructuring an object 
    // for reaching in and grabbing it by its key. 
  );
}

export default App;

//STEP 1:
//Index.js file
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <App library="React" />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//App.js file
// function App(props){
//   return(
//     <div className='App'>
//       <h1>Hello from {props.library}</h1>
//     </div>
//   );
//  }

// export default App;
// After MODIFYING TWO FILES OUTPUT: HELLO FROM REACT

//EXPLANATION FOR STEP 1
//A really important JavaScript concept that we want to know about is destructuring. 
//So this is going to help us get ready to deal with state in our application. Now, we 
//saw how passing properties to any component, we would just do so wherever the component 
//was rendered. On line nine here, we could add a property called library. We could set this to 
//say react. Now, if we go back to our app.js file, instead of just hard coding this, we're going 
//to grab this from our props object. So we could say props.library and then we should see this being 
//rendered here in our browser. So, let's make sure that this is working. We'll say GraphQL and this 
//should re-render that. 

//ChatGPT EXPLANATION:
// Certainly, here's the information presented in bullet points:

// - Introduction to Destructuring:
//   - Destructuring is a crucial JavaScript concept that aids in preparing to work with state in a React application.

// - Passing Properties to Components:
//   - In the context of passing properties to components, properties can be added wherever the component is rendered.

// - Example: Passing "library" Property:
//   - On line 9 of the code snippet, a "library" property is added to a component, e.g., `library="react"`.

// - Using Destructuring for Accessing Props:
//   - In the `app.js` file, instead of hardcoding the property, it can be accessed using destructuring from the `props` object.
//   - This is done by using `props.library` to access the value passed to the "library" property.

// - Demonstrating Destructuring:
//   - When "GraphQL" is added as the property value, the browser should re-render with "GraphQL" displayed.
//   - This highlights how destructuring helps in obtaining and using passed properties.

// In summary, destructuring is a fundamental concept in JavaScript that 
// becomes essential when dealing with state in a React application. It enables 
// efficient access to properties passed to components, improving the way data is 
// used and manipulated within the application.


//STEP 2
// function App({library}){
//   return(
//     <div className='App'>
//       <h1>Hello from {library}</h1>
//     </div>
//   );
//  }

// export default App;

//EXPLANATION FOR STEP 2
//now something that's important to do here, let's go back to our app.js, 
//is we can use destructuring to actually grab properties from this prop's 
//object by their key. So think of the object as having a key called library, 
//a value called react. Now, what I can do here, is I can say, let's just select 
//the library key and now I don't have to access this via props.library, instead 
//I can just grab it on library. So again, we can just grab that directly from 
//that object. This is a pattern called destructuring or destructuring an object 
//for reaching in and grabbing it by its key

//ChatGPT Explanation:

// - Destructuring to Access Properties:
//   - Destructuring can be used to efficiently access properties from the `props` object in React components.
//   - The idea is to extract values from the `props` object directly by their keys.

// - Example: Destructuring the "library" Property:
//   - In the `app.js` file, destructuring can be employed to directly access the "library" property from the `props` object.
//   - Instead of using `props.library`, destructuring allows for directly using `library`.

// - Key-Value Relationship in Destructuring:
//   - When destructuring, think of the `props` object as a collection of key-value pairs.
//   - In this case, "library" is the key and "react" is the corresponding value.

// - Advantages of Destructuring:
//   - Destructuring simplifies the code by eliminating the need for repetitive object references.
//   - It enhances readability and maintains a clean, concise syntax.

// - Pattern of Destructuring:
//   - Destructuring an object involves directly grabbing values by their keys, improving code efficiency and organization.

// In summary, using destructuring allows for a more concise and readable way of 
// accessing properties from the `props` object in React components. It simplifies 
// the code structure by directly obtaining values by their corresponding keys.


//STEP 3
// const cities = ["Tokyo","Tahoe City", "Bend"];
// console.log(cities[0]); // Tokyo 
//  function App({library}){
//   return(
//     <div className='App'>
//       <h1>Hello from {library}</h1>
//     </div>
//   );
//  }

// export default App;

//EXPLANATION FOR STEP 3
// We can also destructure arrays. So for example, let's go ahead and we're 
// going to create an array of cities and this array of cities, will have a 
// few different values in it. And we'll also add bend here. Now, if I wanted 
// to grab a city from this array I could say cities zero and grab the first of 
// these. So let's go back to our browser and we should see this popping up here. 
// We see Tokyo.

//ChatGPT Explanation:

// - Destructuring Arrays:
//   - Destructuring can also be applied to arrays in JavaScript.
//   - Arrays consist of elements, and these elements can be extracted using destructuring.

// - Example: Creating an Array of Cities:
//   - An array called "cities" is created, containing various city names including "Tokyo" and "Bend".

// - Accessing Elements from Arrays:
//   - Destructuring allows for accessing specific elements from arrays.
//   - To retrieve a particular element, indexing can be used, such as `cities[0]` for the first element.

// - Result in the Browser:
//   - When accessing the first element of the "cities" array using `cities[0]`, the browser will display the value "Tokyo".

// - Destructuring Arrays vs. Regular Indexing:
//   - Destructuring provides a concise way to access specific elements from arrays, enhancing code readability and efficiency.

// In summary, destructuring is not limited to objects; it can also be applied to 
// arrays. This technique simplifies the process of accessing specific array elements 
// by providing a more elegant syntax for retrieval.

//STEP 4
// const [firstCity, second] = [
//   "Tokyo", // firstCity pointing to tokyo
//   "Tahoe City",// second pointing to tahoe city
//   "Bend"// So what we're doing with array destructuring, is we are 
//   // assigning a variable name based on a position in the array.
// ];
// console.log(firstCity);
// console.log(second);
//  function App({library}){
//   return(
//     <div className='App'>
//       <h1>Hello from {library}</h1>
//     </div>
//   );
//  }

// export default App;

//EXPLANATION FOR STEP 4
// Now, unlike our destructuring of the object, we can't reach into 
// the city's array and assign some sort of a property name based on a key. 
// Instead what we would need to do, is we would need to use a pattern 
// called array destructuring. We're going to replace cities with a set of 
// square braces and then we're going to say first city and then now we will 
// console log first city and this will give us Tokyo. So now what 
// we've done with array destructuring, is we've given this value a name. 
// We could also say second. We're going to see Tahoe City being 
// added here. So what we're doing with array destructuring, is we are 
// assigning a variable name based on a position in the array.

//ChatGPT Explanation:

// - Array Destructuring:
//   - Array destructuring is a technique that allows you to extract values from arrays and assign them to variable names.

// - Syntax of Array Destructuring:
//   - Instead of accessing array elements using indexing, square braces `[ ]` are used to indicate array destructuring.
//   - The variable names used for destructuring are based on positions within the array.

// - Example: Destructuring an Array of Cities:
//   - Given an array of cities, such as `cities = ["Tokyo", "Tahoe City", "Bend"]`, array destructuring can be used.
//   - By using variable names within the square braces, elements are assigned to those variables based on their positions.

// - Using Destructured Variables:
//   - The destructured variables, such as `first` and `second`, can be used to access the corresponding array elements.
//   - For example, `console.log(first)` will display "Tokyo," and `console.log(second)` will display "Tahoe City."

// - Associating Names with Array Positions:
//   - Array destructuring provides a way to give specific variable names to array elements based on their positions.
//   - This makes the code more expressive and easier to understand.

// In summary, array destructuring allows you to assign variable names to specific positions within an array, making it 
// easier to work with array elements in a more structured and intuitive manner.




