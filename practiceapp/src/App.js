import logo from './logo.svg';
import './App.css';

// const cities = ["tokyo", "usa", "bend"];
// console.log(cities[0]);

const [firstCity, second] = 
["tokyo", "usa", "bend"];

console.log(firstCity, second)



function App({library}) {
  return (
    <div className="App">
    <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
