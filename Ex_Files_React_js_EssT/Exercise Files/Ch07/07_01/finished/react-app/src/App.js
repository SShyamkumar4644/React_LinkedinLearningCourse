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

//EXPLANATION FOR STEP 1
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

//ChatGPT Explanation:

// - Importance of Navigation in Websites:
//   - For a seamless user experience, websites need a way to navigate between different pages.
//   - In React, which is typically used for single-page applications (SPAs), navigation between components can be achieved using **React Router**.

// - Introduction to React Router:
//   - **React Router** is a library that facilitates navigation in React applications by enabling the display of different components as if they were separate pages.
//   - As of the explanation, React Router is at version six.

// - Installing React Router:
//   - To install React Router version six, navigate to the appropriate project directory.
//   - Install React Router DOM version six using the command: `npm install react-router-dom@6`.

// - Adjusting the App for React Router:
//   - Make modifications to the App component to prepare for incorporating React Router.
//   - Temporarily remove existing components like "Peaks" and "List."

// - Displaying the App Component:
//   - With the adjustments made to the App component, render the App component itself for now.

// - Testing the App:
//   - Run the app using the command `npm start`.
//   - The app should be accessible at `localhost:3000`.
//   - On this page, you should now see the rendered "App" component as a starting point.

// The explanation introduces the concept of navigation in websites and highlights 
// the significance of React Router in facilitating navigation between components 
// in a React application. It guides you through installing React Router version 
// six and making initial adjustments to the App component for incorporating 
// React Router. The final step involves testing the app to ensure that 
// the "App" component is displayed.


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

//EXPLANATION FOR STEP 2
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

//ChatGPT Explanation:

// - Creating Different Components for Pages:
//   - To create navigation between different pages, you'll need separate components for each page.
//   - Components named "Home," "About," and "Contact" are introduced for the different pages.

// - Creating the "Home" Component:
//   - The "Home" component returns a `<div>` containing an `<h1>` tag.
//   - This component represents the home page of the website.

// - Creating the "About" and "Contact" Components:
//   - Separate components are created for the "About" and "Contact" pages.
//   - These components are part of a simple website navigation structure.

// - Rendering the "Home" Component:
//   - Initially, you can render the "Home" component using the following code:
//     ```jsx
//     <Home />
//     ```
//   - This will display the text "My Website" within an `<h1>` tag.

// - Preparing for Page Navigation:
//   - The goal is to configure React Router to enable navigation between these different components/pages.
//   - With React Router installed and the basic components in place, the next step is to set up the router for navigation.

// The explanation covers the creation of different components representing pages 
// like "Home," "About," and "Contact." It introduces the basic structure of these 
// components and mentions the plan to use React Router to enable navigation 
// between them. The focus is on preparing the components for future navigation 
// setup.



