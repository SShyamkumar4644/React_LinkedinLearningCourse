// Handling loading states
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

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // When we're fetching data from some sort of external API, our data can be in one of a few different states. 
  // So let's talk through what those are. First of all, we have a loading state. So a loading state just means we're 
  // fetching the data but it hasn't yet come back. We have a success state where we have some data to display. Then we 
  // want to have some sort of an error state if something goes wrong. We can represent all of this with useState hooks. 
  // So we have our data here on line 15. Let's also create a value for error and setError. We'll set that equal to useState 
  // and initialize with null. Finally, we'll say const loading and setLoading. This will be set equal to useState and our 
  // initial state will be false. Okay, so now we need to represent all of these inside of our component. So first things first, 
  // we want to scroll down a little bit so that we can in our useEffect model the flow of data into our component. So the first 
  // thing we'll do is we're going to setLoading to true. Then we're going to make our fetch a little bit more robust too. So once 
  // the data comes back, we'll set the data with that setData function and then we're also going to use this to set our loading 
  // state back to false because we have the data. It's no longer loading. And then finally, what's cool about these .then chains 
  // is that you can chain on a catch. Catch is going to, if there's some sort of an error, set an error. So now what we want to do 
  // here is we want to display our GitHub user component if everything goes as expected. So we're going to get rid of if data. We're 
  // going to get ride of this return here. And then above this, we're going to say if loading is true, we want to return an h1 that 
  // says loading. Also, if there's an error of any kind, then we want to return a pre-formatted JSON string to display that error. 
  // So we'll say error and then we'll say if there's no data, then we'll return null. Perfect. So let's try to refresh this. It's 
  // working kind of fast. Our internet is too fast here but once this loads for the first time, it's going to say loading here at
  // the top. Then we're going to see the rest of the data once it's ready. So any sort of asynchronous requests we're making, we 
  // need to handle a loading state where we're waiting on that data to come back. We need to handle a success case, as well as an 
  // error state. So all of this can be represented using these useState hooks.



  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false)) 
      .catch(setError);
      // So once the data comes back, we'll set the data with that setData function
      // and then we're also going to use this to set our loading state back to false because we have the data. 
      // It's no longer loading. And then finally, what's cool about these .then chains is that you can chain on a catch. 
      // Catch is going to, if there's some sort of an error, set an error.
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;

//STEP 1
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

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       `https://api.github.com/users/moonhighway`
//     )
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false)) 
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error)}</pre>;
//   if (!data) return null;

//   return (
//     <GithubUser
//       name={data.name}
//       location={data.location}
//       avatar={data.avatar_url}
//     />
//   );
// }

// export default App;

//EXPLANATION FOR STEP 1

// When we're fetching data from some sort of external API, our data can be 
// in one of a few different states. So let's talk through what those are. 
// First of all, we have a loading state. So a loading state just means we're 
// fetching the data but it hasn't yet come back. We have a success state where 
// we have some data to display. Then we want to have some sort of an error 
// state if something goes wrong. We can represent all of this with useState 
// hooks. So we have our data here on line 15. Let's also create a value for 
// error and setError. We'll set that equal to useState and initialize with 
// null. Finally, we'll say const loading and setLoading. This will be set 
// equal to useState and our initial state will be false. Okay, so now we 
// need to represent all of these inside of our component. So first things 
// first, we want to scroll down a little bit so that we can in our useEffect 
// model the flow of data into our component. So the first thing we'll do is 
// we're going to setLoading to true. Then we're going to make our fetch a 
// little bit more robust too. So once the data comes back, we'll set the 
// data with that setData function and then we're also going to use this to 
// set our loading state back to false because we have the data. It's no longer 
// loading. And then finally, what's cool about these .then chains is that you 
// can chain on a catch. Catch is going to, if there's some sort of an error, 
// set an error. So now what we want to do here is we want to display our 
// GitHub user component if everything goes as expected. So we're going to 
// get rid of if data. We're going to get ride of this return here. And then 
// above this, we're going to say if loading is true, we want to return an h1 
// that says loading. Also, if there's an error of any kind, then we want to 
// return a pre-formatted JSON string to display that error. So we'll say 
// error and then we'll say if there's no data, then we'll return null. 
// Perfect. So let's try to refresh this. It's working kind of fast. Our 
// internet is too fast here but once this loads for the first time, it's 
// going to say loading here at the top. Then we're going to see the rest 
// of the data once it's ready. So any sort of asynchronous requests we're
//  making, we need to handle a loading state where we're waiting on that 
// data to come back. We need to handle a success case, as well as an error
// state. So all of this can be represented using these useState hooks.

//ChatGPT Explanation:

// - Handling Data Fetching States:
//   - When fetching data from an external API, the data can be in various states:
//     - **Loading state:** Data is being fetched but hasn't returned yet.
//     - **Success state:** Data has been fetched successfully and is ready for display.
//     - **Error state:** An error occurred while fetching the data.
//   - These states can be effectively managed using the `useState` hook in React.

// - Managing Loading State:
//   - To manage the loading state, a `loading` state variable and `setLoading` function are created using `useState`.
//   - Initially, `loading` is set to `false`.
//   - When data fetching starts, `setLoading(true)` is called, and after data is fetched, `setLoading(false)` is used to indicate that loading has finished.

// - Handling Data and Error States:
//   - A `data` state variable and `setData` function are created using `useState` to store the fetched data.
//   - An `error` state variable and `setError` function are created using `useState` to handle errors during fetching. Initially, `error` is set to `null`.
//   - Inside the `useEffect`, after fetching data successfully, `setData` is used to update the data state and `setLoading(false)` to indicate that loading is complete.
//   - The `.catch` chain in the fetch call sets the `error` state if an error occurs.

// - Rendering Components Based on States:
//   - In the component's rendering logic, a conditional rendering approach is used to display different content based on the current state.
//   - If `loading` is true, an `<h1>` element with "loading" is returned.
//   - If there's an `error`, a pre-formatted JSON string of the error is displayed.
//   - If no `data` is available, `null` is returned to prevent rendering the rest of the component.
//   - Otherwise, the `GitHubUser` component is rendered with the fetched data.

// - Importance of Handling Asynchronous Requests:
//   - Asynchronous requests like data fetching require handling various states to provide a smooth user experience.
//   - Loading, success, and error states help manage the user interface during different stages of data fetching.

// The explanation emphasizes how to manage different data fetching states 
// using `useState` hooks, including loading, success, and error states. 
// It also highlights the importance of handling asynchronous requests to 
// ensure a responsive and user-friendly application.

