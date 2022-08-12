// Testing small functions with Jest
import timesTwo from "./functions";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

// We can start to think about testing with a small example here. So inside of our source folder we want to create two different files. 
// The first is called functions.js, and the second will be called functions.test.js. So we want to think about our functions file as 
// being the place where our code will be written. And then our NPM test command is going to run any test that are part of this file. 
// Create React App already has just configured. So all we need to do is start writing tests. So we're going to write a test using the test 
// function and then the test function is going to have a name as its first argument. So we're going to keep it real simple here. We'll just 
// say multiplies by two. And then it's also going to take in this callback function. So this callback function is going to have another 
// function inside of it called expect. Okay. So the next thing we want to do is let's open up our functions.js file. We'll open this to 
// the side here. So there's side by side. Export default a function called timesTwo and this function is going to just be stubbed for now. 
// And then within our functions test, we need to import this. So we'll say import timesTwo from ./functions. And then here's where we start 
// to write our test. We want to hear call the timesTwo function and we want to pass in four. So even if we haven't written our function yet, 
// we know that if I call the timesTwo function with the value four, I expect the output to be whatever four times two is. So we're going to 
// chain on this function called twoBe and we're going to pass eight here. So we expect anytime I call this function that if given this value, 
// we want to return this value. Let's try to run NPM test. So NPM test should run our tests. Any files that have tests in it. At this moment 
// we should have some sort of an error because it says that timesTwo is not a function because we haven't written it yet. So let's go ahead 
// and fix this. We're going to, within our functions.js file, take in some sort of argument. And then we'll say return a times two. Now, 
// if we save this we're seeing timesTwo is not a function again. And that's because I've imported it wrong. So what we can do to fix this 
// is you either get rid of default and then we should see that passing, or you can keep default and then just import this as the module 
// instead of as the function. What's great about this is that by going through the process of testing, we're seeing, hey, some of our code 
// is problematic. We're exporting things incorrectly and testing will let us know what the problem is. So just to recap, Jest is built 
// in to Create React App. We're using the expect function to figure out what the value of times two is if we call it with four. We're 
// chaining on this matcher here, this Jest matcher. Now, something to keep in mind is that if you take a look at the Jest documentation 
// there are a ton of different matchers that you can make use of, toBe is going to just match for exact equality. But there are others, 
// you could check for values being truthy, falsey, null, you can check for numbers, you can match strings and all sorts of different things. 
// So if you want to take a look at this documentation you don't have to memorize all of this. Thankfully, all of this is well documented on this page.
