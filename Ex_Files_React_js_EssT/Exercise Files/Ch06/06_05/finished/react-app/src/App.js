// Working with render props
import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;

// The final pattern I want to show you with data loading, has to do with how we use functions 
// to display the right data at the right time. So let me show you what I mean by that. We're going to get 
// rid of most of our code here. We're going to make this way shorter. We're also going to get rid of our map here. 
// So let's just make sure that's working. Perfect. So, let's also create some data here. So I'm going to create a data set 
// called tahoe_peaks that's going to be an array of objects. Each object is going to have its own name and elevation, so 10891. 
// These are real, you can check them out. We'll say Monument Peak, we will set that elevation at 10067. Let's add a couple more of 
// these, name Pyramid. And of course, if you don't feel like typing these, you can always find these in the finished files for this chapter. 
// No shame in copying and pasting. And then finally we'll add Tallac, elevation 9735, 9735. Perfect. So now that we have the elevation in feet, 
// we're going to create a function called List. So this List function is going to be a function that takes in a few different properties, the first 
// of which is data, the second is a function called renderItem, the third is a function called renderEmpty. So renderItem will help us to render an 
// individual list item, and then renderEmpty will be what is displayed if we don't have anything in this list. So let's go ahead and return, we'll 
// say if data.length doesn't exist, so if there's nothing in the data, we want to return the renderEmpty function. Otherwise, we want to return an 
// unordered list where we'll map over the data. So check this out, we'll say data.map for each item, we will return a list item. Sorry, let's save 
// that so we can actually read it, and then we're going to give each list item a key, which will just set to be the item.name, and then we'll say 
// renderItem with whatever that item is. Now it's up to us next to adjust our app, so that it's going to pump the data into the list component 
// in the correct way. So we'll get rid of our div, we'll use the app to render the list. List will have a property called data which we'll set 
// to tahoe_peaks, our list of peaks. We're also going to add renderEmpty. And renderEmpty is just going to render a paragraph, so we'll say, 
// "This list is empty" and then finally we'll say renderItem, and this is going to be a function. So for each item we want to return and check this out, 
// we're going to use a shorthand version of the React fragment. Remember our React fragment from before, we can use this shorthand syntax like we saw, 
// and then inside of this we'll say item.name, and item.elevation, and then we'll say ft. Perfect, so now we are able to see all of this content being 
// displayed. A couple things to think about, we are passing along some JSX to render if the List happens to be empty. So if we got rid of this, the List 
// is empty, pretty cool, renderItem is going to return just this fragment, it'll pass along a little bit of data, so that that can be displayed inside 
// of that list item. So our list and our app components will display any data in a list, no matter how long the list is, and there will even be some 
// fallback content in case we need to render an empty list.
