import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import { getItem, setItem } from "./localStorage";
import Login from "./Login";
function App() {

  
  return (
    <React.Fragment>
      <div className="container">
        <Login/>
        {/* <CurrentLocation /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
