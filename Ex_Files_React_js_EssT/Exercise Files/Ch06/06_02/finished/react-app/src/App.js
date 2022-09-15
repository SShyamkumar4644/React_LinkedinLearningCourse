// Displaying data from an API
import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}
// Now that we have some data loaded, it is time to actually display our data in a component. 
// So, over here we have our object of data. We have a few different fields that we can make use of and we want to be 
// able to display this data in a separate component. So, I'm going to call this Github user and Github user is going 
// to take the data and display it. So, we'll go ahead and return a div, inside of that div we'll have an H1, and the 
// place we want to actually work with this is here. So, we're going to return the Github user. And, then, of course, 
// we need to pass it a few different property. So, the name property would be data.name. Let's make sure that we can see this. 
// So, we'll destructure name, name, and we should see that there. Pretty cool. So, now, of course, I've lost all my data. So, 
// let's go ahead and pull that up in a new window. Let's grab the person's location. So, I'll say location, location, location, 
// data.location. So, now we should see this as well. The final thing I want to display is some sort of image. So, we have a field 
// here called avatar Euro. We'll add an image here. The source will be avatar. So, this is data.avatar_URL. We also need to pass 
// this here. Nice. Let's make it a little smaller. So, we'll say height is 150, 150 pixels. Awesome. And, finally, we want to make 
// sure that we have some sort of alt text being displayed. So, we can go ahead and grab that from somewhere. We could say alt=name. 
// And, so now this should have an alt attribute. Perfect. So, regardless of what data you're displaying, anytime you are making a 
// fetch for some data from some sort of external API, like the Github API, the first step we need to take is to fetch the data using 
// a use state and use effect in combination. And, then we can use the magic of react to pass properties down to a child component 
// like Github user, and then we can pull from the data points that we need so that that data can be displayed.

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

export default App;

//STEP 1
// import "./App.css";
// import { useState, useEffect } from "react";

// function GithubUser({ name }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   );
// }
// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/SShyamkumar4644`)
//       .then((response) => response.json()) 
//       .then(setData);
//   }, []);
 
//   if (data)
//     return (
//       <GithubUser
//         name={data.name}
//       />
//     );
//   return <h1>Data</h1>;
// }
// export default App;
// Output S Shyam kumar
// EXPLANATION FOR STEP 1
//  Now that we have some data loaded, it is time to actually display 
// our data in a component. So, over here we have our object of data. 
// We have a few different fields that we can make use of and we want 
// to be able to display this data in a separate component. So, I'm 
// going to call this Github user and Github user is going to take 
// the data and display it. So, we'll go ahead and return a div, 
// inside of that div we'll have an H1, and the place we want to 
// actually work with this is here. So, we're going to return the 
// Github user. And, then, of course, we need to pass it a few different 
// property. So, the name property would be data.name. Let's make sure that 
// we can see this. So, we'll destructure name, name, and we should see that 
// there. Pretty cool. So, now, of course, I've lost all my data. So, let's 
// go ahead and pull that up in a new window.

//STEP 2
// import "./App.css";
// import { useState, useEffect } from "react";

// function GithubUser({ name, location, avatar }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{location}</p>
//       <img src={avatar} height={150} alt={name} />
//     </div>
//   );
// }
// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/SShyamkumar4644`)
//       .then((response) => response.json()) 
//       .then(setData);
//   }, []);
 
//   if (data)
//     return (
//       <GithubUser
//         name={data.name}
//         location={data.location}
//         avatar={data.avatar_url}
//       />
//     );
//   return <h1>Data</h1>;
// }

// export default App;
//EXPLNATION FOR STEP 2
// So, now, of course, I've lost all my data. So, let's go ahead and 
// pull that up in a new window. Let's grab the person's location. So, 
// I'll say location, location, location, data.location. So, now we should 
// see this as well. The final thing I want to display is some sort of image. 
// So, we have a field here called avatar Euro. We'll add an image here. The 
// source will be avatar. So, this is data.avatar_URL. We also need to pass 
// this here. Nice. Let's make it a little smaller. So, we'll say height is 
// 150, 150 pixels. Awesome. And, finally, we want to make sure that we have 
// some sort of alt text being displayed. So, we can go ahead and grab that 
// from somewhere. We could say alt=name. And, so now this should have an alt 
// attribute. Perfect. So, regardless of what data you're displaying, anytime 
// you are making a fetch for some data from some sort of external API, like 
// the Github API, the first step we need to take is to fetch the data using a 
// use state and use effect in combination. And, then we can use the magic of 
// react to pass properties down to a child component like Github user, and 
// then we can pull from the data points that we need so that that data can be displayed.
