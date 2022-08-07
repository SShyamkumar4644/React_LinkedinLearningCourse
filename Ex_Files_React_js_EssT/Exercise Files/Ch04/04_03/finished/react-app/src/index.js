import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App library="React" />
  </React.StrictMode>,
  document.getElementById("root")
);
// A really important JavaScript concept that we want to know 
// about is destructuring. So this is going to help us get 
// ready to deal with state in our application. Now, we saw 
// how passing properties to any component, we would just 
// do so wherever the component was rendered. On line nine 
// here, we could add a property called library. We could 
// set this to say react. Now, if we go back to our app.js 
// file, instead of just hard coding this, we're going to 
// grab this from our props object. So we could say props.library and then we should see this being rendered here in our 
// browser. So, let's make sure that this is working. We'll say GraphQL and this should re-render that. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
