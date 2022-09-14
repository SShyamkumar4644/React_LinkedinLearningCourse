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
