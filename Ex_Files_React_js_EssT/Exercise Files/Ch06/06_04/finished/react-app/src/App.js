// Fetching data with GraphQL
import "./App.css";
import { useState, useEffect } from "react";

// We can also use React to fetch data from a GraphQL API. So let's take a look at the GraphQL 
// API that we're going to fetch from. We're going to make a request to this endpoint, snowtooth.moonhighway.com. 
// So if you haven't worked with GraphQL before, just know that GraphQL is a way of creating an API where you can 
// specify what data you want by using its field. So over here is our query. This tool that we're looking at is called 
// the GraphQL playground, and you can use it to send requests much like you do with REST. Instead of grabbing our GitHub user, 
// we're going to call this lift, then with each one of these, we're going to grab its name, elevation gain and status. So here in the 
// h1, we'll say name. We'll say elevationGain, and then we'll say status. Then we can remove our image here. We're basically 
// just going to create one of these lift components for every one of our lifts in our list. So, the place we'll fetch from is 
// this endpoint here, snowtooth.moonhighway.com. There we go. We can keep the rest of the data fetching logic the same. The only 
// thing we would need to change is down here in our return. So if we want to iterate over this data, we're going to need to do 
// this so we're going to first create a div that we want to render here. Then inside of this div, inside of a JSX expression, 
// we'll say data.allLifts.map. For each one of our lifts that we create, we want to return our lift component and the lift 
// component needs a little bit of data, right? So we'll say name, elevationGain=lift.elevationGain. And finally, we'll use 
// status, which is lift.status. Now it's still loading over here. We aren't quite finished because we need to make our fetch 
// request a little bit more robust to send along the body of the query. Right now, we're just saying, hey, give me all the 
// data from this but I need to pass along the query, which would look like this, to actually get all of this information back. 
// So let's go ahead and copy this query. We're going to paste it into our page here. So we'll say const query = and this query 
// should be a string so we'll use backticks around the query. Then we're going to specify some options. So we'll say const opts. 
// The method that we're going to use to send this request is a post request. We're going to specify some headers. So, here we'll 
// say Content-Type application/json and then we'll say body: JSON.stringify the query. So we'll send along that string when we 
// send that request. The final thing we need to do here, now that we have these options, is fetch is going to take in both the 
// URL that we're making the request to and the options. So OPTS. So even though this looks pretty good to me, I'm still not 
// seeing any data coming back. It says loading, and then no data is returned. We also see here that there's some sort of an error 
// 'cause it can't read properties of undefined map. So here's a really interesting thing that's going on here. If we console.log data, 
// and let's call out that that's where that's happening. If we scroll up a little bit, we should see that data is coming back but it's 
// underneath another key called data. So, let's try that. And there we go. Data, data, one of those fun, little fetch request things that's 
// going on, we have to make sure that we are referencing the correct fields on the data that's coming back. Now that we are, we should 
// see all of this data being displayed. So this is a look at how you might use GraphQL with a fetch request inside of a React application. 
// If you are dealing with a GraphQL data source, you can make use of fetch just as you would with a REST API.
const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;

// STEP 1
// import "./App.css";
// import { useState, useEffect } from "react";

// function Lift({ name, elevationGain, status }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>
//         {elevationGain} {status}
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://snowtooth.monnhighway.com`)
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

//EXPLNATION FOR STEP 1
//  We can also use React to fetch data from a GraphQL API. So let's take a 
// look at the GraphQL API that we're going to fetch from. We're going to make
// a request to this endpoint, snowtooth.moonhighway.com. So if you haven't 
// worked with GraphQL before, just know that GraphQL is a way of creating
// an API where you can specify what data you want by using its field.
// So over here is our query. This tool that we're looking at is called
// the GraphQL playground, and you can use it to send requests much like
// you do with REST. Instead of grabbing our GitHub user, we're going to
// call this lift, then with each one of these, we're going to grab its
// name, elevation gain and status. So here in the h1, we'll say name.
// We'll say elevationGain, and then we'll say status. Then we can remove
// our image here. We're basically just going to create one of these lift
// components for every one of our lifts in our list. So, the place we'll
// fetch from is this endpoint here, snowtooth.moonhighway.com. There we go.
// We can keep the rest of the data fetching logic the same. The only thing
// we would need to change is down here in our return. So if we want to
// iterate over this data, we're going to need to do this so we're going
// to first create a div that we want to render here. 

//STEP 2
// Fetching data with GraphQL
// import "./App.css";
// import { useState, useEffect } from "react";

// const query = `
// query {
//   allLifts {
//     name
//     elevationGain
//     status
//   }
// }
// `;

// const opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query })
// };

// function Lift({ name, elevationGain, status }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>
//         {elevationGain} {status}
//       </p>
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
//       `https://snowtooth.moonhighway.com/`,
//       opts
//     )
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error)
//     return <pre>{JSON.stringify(error)}</pre>;
//   if (!data) return null;
//   return (
//     <div>
//       {data.data.allLifts.map((lift) => (
//         <Lift
//           name={lift.name}
//           elevationGain={lift.elevationGain}
//           status={lift.status}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
//EXPLNATION FOR STEP 2
// Then inside of this div, inside of a JSX expression, we'll
// say data.allLifts.map. For each one of our lifts that we
// create, we want to return our lift component and the]
// lift component needs a little bit of data, right?
// So we'll say name, elevationGain=lift.elevationGain. And
// finally, we'll use status, which is lift.status. Now it's
// still loading over here. We aren't quite finished because
// we need to make our fetch request a little bit more robust
// to send along the body of the query. Right now, we're just
// saying, hey, give me all the data from this but I need to
// pass along the query, which would look like this, to actually
// get all of this information back. So let's go ahead and copy
// this query. We're going to paste it into our page here. So
// we'll say const query = and this query should be a string
// so we'll use backticks around the query. Then we're going
// to specify some options. So we'll say const opts. The method
// that we're going to use to send this request is a post request.
// We're going to specify some headers. So, here we'll say Content-Type
// application/json and then we'll say body: JSON.stringify the query.
// So we'll send along that string when we send that request. The final
// thing we need to do here, now that we have these options, is fetch
// is going to take in both the URL that we're making the request to
// and the options. So OPTS. So even though this looks pretty good to
// me, I'm still not seeing any data coming back. It says loading, and
// then no data is returned. We also see here that there's some sort of
// an error 'cause it can't read properties of undefined map. So here's a
// really interesting thing that's going on here. If we console.log data,
// and let's call out that that's where that's happening. If we scroll up
// a little bit, we should see that data is coming back but it's underneath
// another key called data. So, let's try that. And there we go. Data, data,
// one of those fun, little fetch request things that's going on, we have to
// make sure that we are referencing the correct fields on the data that's
// coming back. Now that we are, we should see all of this data being
// displayed. So this is a look at how you might use GraphQL with a
// fetch request inside of a React application. If you are dealing
// with a GraphQL data source, you can make use of fetch just as you
// would with a REST API.



