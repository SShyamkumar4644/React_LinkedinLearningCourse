// Installing React Router v6
import "./App.css";

function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;

// On any website, it's really important to have some sort of mechanism for moving from page to page. Now, with React, we're dealing with different components. 
// So how do we move from component to component when we're dealing with a single-age application? The solution for that is to incorporate React Router. React Router 
// will allow for us to seamlessly move from page to page by displaying different components. React Router is at version six right now, so we're going to go ahead and 
// install this in our project. So let's make sure that we're in the correct folder. We're going to move to the react-app that's in chapter seven, lesson one here, 
// and we're going to go ahead and install, npm install react-router-cdom@6. We're trying to install, specifically, version six. Great, so once you've done that, we're 
// going to make some adjustments here to our app. Let's go ahead and get rid of our peaks for now. We're going to get rid of our List for now. So in our App component, 
// we're going to go ahead and just display App. Let's make sure that this is running with npm start. And then over here on localhost 3000, we should see our App rendering, 
// so we'll get those side-by-side here. Nice, so let's also create a few different components here. We're going to create a component called Home. And the Home component 
// is going to return a div that has an h1. And then we'll also create a few different components here for different pages on that website. So we'll say About, very 
// simple website here. We'll say About, and then we'll also create a page for Contact, so just kind of mimicking what a simple website nav might look like. Okay, 
// so we could just say let's render our Home component here. And that's going to render My Website. But eventually, we want to be able to click through to different 
// pages simply by using the router. So now that React Router is installed, and we have a few pages in our app skeleton here, in the next video, we're actually going 
// to configure the router so that we can make this navigation happen.

//STEP 1

// import "./App.css";

// function App() {
//   return (
//     <h1>App</h1>
//   );
// }

// export default App;
//EXPLNATION FOR STEP 1
// On any website, it's really important to have some sort of mechanism for
// moving from page to page. Now, with React, we're dealing with different
// components. So how do we move from component to component when we're
// dealing with a single-age application? The solution for that is to
// incorporate React Router. React Router will allow for us to seamlessly
// move from page to page by displaying different components. React Router
// is at version six right now, so we're going to go ahead and install this
// in our project. So let's make sure that we're in the correct folder.
// We're going to move to the react-app that's in chapter seven, lesson
// one here, and we're going to go ahead and install, npm install
// react-router-cdom@6. We're trying to install, specifically, version six.
// Great, so once you've done that, we're going to make some adjustments here
// to our app. Let's go ahead and get rid of our peaks for now. We're going
// to get rid of our List for now. So in our App component, we're going to
// go ahead and just display App. Let's make sure that this is running with
// npm start. And then over here on localhost 3000, we should see our App
// rendering, so we'll get those side-by-side here. 

//STEP 2

// import "./App.css";

// function Home() {
//   return (
//     <div>
//       <h1>My Website</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//     </div>
//   );
// }

// function App() {
//   return <Home />;
// }

// export default App;
//EXPLNATION FOR STEP 2
// Nice, so let's also create a few different components here.
// We're going to create a component called Home. And the Home
// component is going to return a div that has an h1. And then
// we'll also create a few different components here for different
// pages on that website. So we'll say About, very simple website here.
// We'll say About, and then we'll also create a page for Contact,
// so just kind of mimicking what a simple website nav might look like.
// Okay, so we could just say let's render our Home component here.
// And that's going to render My Website. But eventually, we want
// to be able to click through to different pages simply by using
// the router. So now that React Router is installed, and we have
// a few pages in our app skeleton here, in the next video, we're
// actually going to configure the router so that we can make this
// navigation happen.



