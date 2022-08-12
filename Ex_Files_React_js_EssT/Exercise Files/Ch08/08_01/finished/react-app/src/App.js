// Using Create React App as a testing platform
import "./App.css";
import { Link, Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
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

// So far, we keep using npm start to run our application on local host 3000. But there's a pretty cool built-in feature
// that is part of Create React App where we can run npm test to run all of our tests. So anytime I type npm test, 
// we're going to run any of the tests that are currently in the app. So here in our terminal, we should be able to see 
// that one of these tests has failed. So the test that we're actually seeing run is here in this App.test.js file. And 
// what this is saying is that we expect our screen to say, learn react. Just know that npm test will run anything with 
// that .test.js extension. So right now, this is telling us that our test suite failed to run 'cause our test suite must 
// contain at least one test. So Create React App gives us this mechanism for dealing with running tests. In the next video, 
// we're going to take a look at how we actually write these and connect them to functions that are part of our app.


