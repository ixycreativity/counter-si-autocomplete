import React, { useState } from "react";
import "./Counter.css";
import Autocomplete from "../autocomplete/Autocomplete";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      console.log("Autocomplete show");
    }
  };

  return (
    <>
      <div className="counter-container">
        <h2 className="counter">{count}</h2>
        <p>{count > 9 && `Ati ajuns la maximum!`}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      {count > 9 && <Autocomplete />}
    </>
  );
};

export default Counter;
