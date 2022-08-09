// Fetching data with Hooks
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json()) // take resposne and turn them into json format
      .then(setData);
  }, []);
  // And once I have this ready, we can go ahead and make this fetch. Now inside of our app,
  // we're going to create a container for the data which we'll call data and the function for updating
  // the data will be called setData. Then we're going to say useState. And our initial state for the 
  // data will be null. Then we're going to make use of useEffect. And this is where the exciting part 
  // happens because we're going to use this fetch call and we're going to fetch from HTTPS api.github.com/users/moonhighway. 
  // And again, you can use your own username for that. Fetch is built into the browser. It's supported. It's a way of making an 
  // HTTP request to get some data from some sort of source. Once we get that data back, we're going to take that response and we'll 
  // call this function called .JSON. So this is going to take whatever the response is and turn it into JSON. And then finally, 
  // we're going to chain on another .then function and say setData. So setData here is the same as saying, "Take this data and 
  // call setData with the data." But notice that the same value is being sent to this function that setData is being called with. 
  // So we can use a shorthand here and call setData that way. The other thing we want to do to use Effect of course is just pass 
  // in that empty array, meaning that we should only make a request for this data once when our application first renders. 
  // So this is super important, right? We want to make sure we're not making too many API requests.
  if (data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );
  return <h1>Data</h1>;
}
// Now, if we have some data, if data has a value, we're going to return for
// the moment a pre tag. And this is just a preformatted tag to format some JSON. 
// And we'll say that we want to stringify data, null, and two. Data is the data. And null and two are going to help format this so that we can actually read it out here in our browser. And notice that if there is some data, we're going to display it. Fetching this data with useEffect has allowed us to perform some sort of a side effect. This is more of a real world example outside of a console log, of course, like we saw before

export default App;

// Another important thing to know how to do with React is how to fetch data from some
// external API. So the API that I want to grab some data from is the GitHub API, which
// you can find at api.github.com/users/ whatever your user ID is. So you can do this for your 
// company, for yourself, whatever you see fit. You would just drop your username after that 
// last slash there. So this is our GitHub REST API that we can use to grab some live data from
// this source. And what we'll do here is we want to fetch this data using a combination of
// useState and useEffect. So we're going to use State to handle the data, and we're going to
// use useEffect to actually make that call for that external data. So in order to get us
// started here, let's just make sure that our app is working as we expect it to.