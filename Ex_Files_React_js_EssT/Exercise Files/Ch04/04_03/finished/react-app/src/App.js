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
//Index.js 
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

//app.js
// function App(props){
//   return(
//     <div className='App'>
//       <h1>Hello from {props.library}</h1>
//     </div>
//   );
//  }

// export default App;
// After MODIFYING TWO FILES OUTPUT: HELLO FROM REACT
//EXPLNATION FOR STEP 1
//A really important JavaScript concept that we want to know about is destructuring. 
//So this is going to help us get ready to deal with state in our application. Now, we 
//saw how passing properties to any component, we would just do so wherever the component 
//was rendered. On line nine here, we could add a property called library. We could set this to 
//say react. Now, if we go back to our app.js file, instead of just hard coding this, we're going 
//to grab this from our props object. So we could say props.library and then we should see this being 
//rendered here in our browser. So, let's make sure that this is working. We'll say GraphQL and this 
//should re-render that. 

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
//EXPLANTION FOR STEP 4
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




