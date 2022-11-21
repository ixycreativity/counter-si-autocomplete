import React, { useState, useEffect } from "react";
import "./Autocounter.css";

const Autocounter = () => {
  const [autoCount, setAutoCount] = useState(0);

  useEffect(() => {
    const timer =
      autoCount < 60 && setTimeout(() => setAutoCount(autoCount + 1), 1000);
  }, [autoCount]);

  return (
    <div className="autocounter-container">
      <h2 className="autocounter">{autoCount}</h2>
    </div>
  );
};

export default Autocounter;
