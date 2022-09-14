import logo from './logo.svg';
import React, { useRef } from 'react';
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
// const cities = ["Tokyo","Tahoe City", "Bend"];
// console.log(cities[0]); // Tokyo 
const [firstCity, second] = [
  "Tokyo", // firstCity pointing to tokyo
  "Tahoe City",// second pointing to tahoe city
  "Bend"// So what we're doing with array destructuring, is we are 
  // assigning a variable name based on a position in the array.
];
console.log(firstCity);
console.log(second);
 function App({library}){
  return(
    <div className='App'>
      <h1>Hello from {library}</h1>
    </div>
  );
 }

export default App;