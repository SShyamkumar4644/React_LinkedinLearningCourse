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
// Now that we have some data loaded, it is time to actually display 
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

//ChatGPT Explanation:

// - Displaying Data in a Separate Component:
//   - The goal is to display the loaded data in a separate component called `GithubUser`.

// - Creating the `GithubUser` Component:
//   - A new component named `GithubUser` is created to display the loaded data.
//   - Inside the `GithubUser` component, a `div` is returned to structure the content.

// - Displaying Specific Data:
//   - The `data.name` field is being displayed in an `H1` tag within the `GithubUser` component.
//   - Destructuring is used to extract the `name` property from the `data` object.

// - Maintaining Data Flow:
//   - The component structure is updated to include the `GithubUser` component and pass the relevant data as props.
//   - The goal is to separate concerns and improve the organization of the code.

// - Data Loss and Retrieval:
//   - It's noted that the loaded data is currently lost. To retrieve it again, the browser's history could be revisited.

// The code is being organized to display the loaded data in a separate `GithubUser` 
// component, enhancing code modularity and readability.


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

//EXPLANATION FOR STEP 2
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

//ChatGPT Explanation:

// - Displaying Additional Data:
//   - The `location` and `avatar_URL` fields from the loaded data are being displayed.
//   - To display the `location`, the property `data.location` is used.
//   - For the image, the `avatar_URL` property is used as the `src` attribute of an `img` tag.

// - Displaying the Image:
//   - An image is added using the `img` tag, with the `src` attribute set to `data.avatar_URL`.
//   - The `height` attribute is set to 150 pixels to adjust the image size.
//   - An `alt` attribute is also added to provide alternative text for the image.

// - The Process of Fetching and Displaying Data:
//   - When fetching data from an external API (e.g., GitHub API), the process generally involves using `useState` and `useEffect`.
//   - The fetched data can be passed down to child components using React's property system.
//   - In this case, the `GithubUser` component receives the fetched `data` as props and displays the required data points.

// The explanation highlights the process of fetching and displaying data from an 
// external API using React's state management and component composition.