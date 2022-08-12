// Configuring the Router
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact } from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// The first step in configuring our router is to head over to our index.js file where we're rendering our app. 
// So I'm going to perform a little bit of cleanup here just so that we can focus on the important stuff. We're going 
// to get rid of React.StrictMode for now. We don't need those extra warnings. We'll also remove reportWebVitals. We need to 
// import BrowserRouter from react-router-dom here. And this is going to be the component that we need to wrap around the app. 
// So how do I give my app and any of the child components underneath that app information about routing and where I am currently? 
// I need to pass it with this BrowserRouter. Okay, so we're going to also import Routes here and Route. So the Routes component is 
// going to go inside of the BrowserRouter. And then here's where we're going to configure, setup all of our different paths that we 
// want to display. So instead of just using the app here, we're going to say that hey, at Route path equals slash. So whenever I'm 
// just visiting localhost:3000, which element do I want to display? Which component do I want to display? We're going to pass this 
// in via a JSX expression here. App. And then we can remove that from here. We also need to close that, of course. There were go. 
// So now when I visit this page, I should see this here. Next up, let's do this. We'll say Route path equals /about and then the 
// component that I want to display here is going to be About. So what I need to do is import App but I also need to import our 
// About component. Let's also make sure that we are exporting this correctly. So we'll say export function About. We'll export 
// function Contact. We'll export function App. And we'll just leave function Home as is. Here we want to remove this default export. 
// So that's going to break our app until we import it correctly. Okay. So now if we visit About, we should see About Us over here in 
// the browser. And I just did that by going to, and it's hard to see, /about. So you can create as many of these as you'd like to 
// inside of your route configuration. So we could say Route path equals /contact. Here we would need to import this. We'll say Contact. 
// We should be importing these all from the same import. You're probably yelling at your screen for me to do that. So let's go ahead and 
// make sure that's closed, and then every time I go to these different routes, I should be able to see that information displayed. Now, 
// we don't want to force our users to type the correct route into the URL bar. So in the next video, we're going to take a closer look 
// at how we can create links to these different pages.


