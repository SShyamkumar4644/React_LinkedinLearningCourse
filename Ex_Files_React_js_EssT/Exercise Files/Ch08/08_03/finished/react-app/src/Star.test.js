// Introducing React Testing Library
import { render } from "@testing-library/react";
import { Star } from "./Star";
test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Cool Star/);
  expect(h1).toHaveTextContent("Cool Star");
});

// Another test utility that's built directly into create React app is React testing library. So let's take 
// a closer look at how we might use this in our own project. And to do so, we're going to start by creating a 
// new component called Star. And then we'll also create a file called Star.test.js. And remember that Jest is 
// going to run any of these test files if they end in that .test.js extension. So in the Star.js file, we're going 
// to export our function. And our Star is going to display the following. We'll just say Cool Star. So now that I've 
// created that, we're going to open up our Star.test.js. Having things side by side is nice. And we're going to use a 
// function called test to say renders an h1. So remember, we're not actually rendering this to the DOM anywhere. 
// This is a brand new component that we haven't actually rendered. It's important to know that it doesn't matter. 
// We can use these test utilities to actually render this for us. So this is what this will look like. We're going 
// to first import a function called render from @testing-library/react. So let's zoom out a little bit. We will make 
// sure we see all this stuff and now inside of our text, inside of the callback function here, we're going to say const. 
// So we'll destructure from the render of Star what's called a React testing library query. So think of a query as being a 
// way of selecting a particular element based on some sort of a property. So in this case, we're going to say getByText, 
// which is going to, if we create another variable here, so we'll call getByText. So this is going to look for some text 
// that says Cool Star. So here we'll say expect the h1, so we expect this value toHaveTextContent Cool Star. So we're 
// selecting it and then we expect it to have that text. So let's go ahead and run this with npm test. This is going to 
// look for that file and then this is also letting us know that we need to import it. So we're getting helped out all 
// the time with testing. So let's go ahead and import this from Star. And then we should see that this has passed. 
// Just a note too that any time we want to rerun our tests, we can hit A in the terminal and that will rerun all A, 
// the tests. We've been able to render our component without actually having to render it and look at it. We're automating 
// the process of making sure that the right content is in the right place.


