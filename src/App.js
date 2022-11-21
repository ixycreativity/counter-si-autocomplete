import React from "react";
import "./App.css";
import Autocounter from "./components/autocounter/Autocounter";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Autocounter />
      <Counter />
    </div>
  );
}

export default App;
