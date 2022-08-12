// Nesting links with React Router v6
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  App,
  About,
  Contact,
  History
} from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
      <Route path="history" element={<History />}
        />
      </Route>
      <Route path="/contact" element={<Contact />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// // Notes are in App.js file also
// The next step we want to take here is we want to create a child page for our 
// About component that's going to display some information about our company's 
// history. First things first, we'll create a <div>. Inside of that <div> we'll 
// create an h1, and then we'll say Our History. Nice, what a beautiful page. 
// Let's say we wanted to display this as a child of the About page. I want the 
// contents of this to be displayed underneath our About Us. There's a couple 
// steps we need to take to make that happen. The first step is we're going to go 
// back to our route configuration and we're going to nest some routes. So let's 
// go ahead and open our index.js file. And then inside of this Route, inside of 
// the About Route, we're going to close this, and then we're going to put in 
// another Route, and this other Route is going to display that other component. 
// So we'll start with the element because that's the easier part. We'll say 
// History. We also need to import History from the app file. There we go. And 
// then what we want to do for our path is we'll just say path="history", and 
// we'll omit the slash from that. When I click on About, and then when I visit 
// about/history, we're still not seeing that content there. So the step I need 
// to take is I need to open our app .js once more. We're going to import another 
// component from react-router-dom called Outlet. So you want to think about Outlet 
// as being like a little container that's going to display our History component. 
// So here on line 25, we're going to say <Outlet />. So Our History is going to 
// pop up right here. So we're displaying this component as soon as I'm on the page 
// about/history. If I remove /history, we'll just see About Us. And then, if I 
// wanted to, I could link to this as well. A nested route configuration is really 
// a powerful thing because we can then create all sorts of page hierarchies within 
// our application. It's just important to know that, at some level, we want to have our route configuration created. 
// We define all of the paths, and then we create the element property to display the correct component at the correct time.
