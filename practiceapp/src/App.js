import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


// const cities = ["tokyo", "usa", "bend"];
// console.log(cities[0]);

// const [firstCity, second] = 
// ["tokyo", "usa", "bend"];

// console.log(firstCity)
// console.log(second)



// function App() {
//   // const what = useState();
//   // console.log(what);
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() =>{
//     console.log(`it's ${emotion} around here`);
//   }, [emotion]);

//   useEffect(() =>{
//     console.log(`it's ${secondary} around here`);
//   }, [secondary]);
//   return (
//     <div className="App">
//     <h1>Current emotion is {emotion}</h1>
//     <button onClick={() => setEmotion("AWESOME")}>AWESOME</button>
//     <button onClick={() => setEmotion("excited")}>Excited</button>
//     <h2>Current Secondary emotion is {secondary}</h2>
//     <button onClick={() => setSecondary("grateful")}>Grateful</button>
//     </div>
   
//   );
// }

function App(){
  const [emotion, setEmotion] = useState("happy");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);
  
  return(
    <div className="App">
    <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("sad")}>Sad</button>
    <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
 }

 export default App;