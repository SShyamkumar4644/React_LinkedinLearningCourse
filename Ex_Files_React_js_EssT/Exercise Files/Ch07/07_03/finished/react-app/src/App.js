// Incorporating the Link component
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}

// Now that we have successfully rendered our few different components at contact, at about, and at the home route, 
// we want to be able to link from these different pages without typing this into the browser. So, the first thing 
// I want to do here is import a component from React Router called link. A quick note, too, that the reason that we're 
// importing everything from React Router DOM is because we're using the DOM. We're using the browser to create a web application. 
// There are React Router tools for React Native as well. So this is why that's split out into its own package. The next thing we want 
// to do here is inside of our home component, we want to display these different links. So here we'll say link. So the link we want 
// to create here is to our about page. So first we want to display this. Let's go ahead and hit save. Nothing is going to be displayed 
// until I add this to slash about. So check it out, now I can click on about and that will take me over to that link. So let's do the 
// same for contact. And then back to our home route I should see both of those links here. All right, once I've created that nav I can 
// also add this to my about us. This might be nice to have here so we'll say link to equals slash and we'll call that home. So let's make 
// sure that we're on this page. We click home and that takes us back. And then finally, let's go ahead and paste that into here. 
// So now on each one of these pages I should be able to navigate successfully back and forth between these pages. So of course we could 
// style this a little nicer but this is letting us know that the link is a powerful component that we can use to navigate between our different pages.


