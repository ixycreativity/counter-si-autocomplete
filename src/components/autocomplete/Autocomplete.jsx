import React, { useState, useEffect, useRef } from "react";
import "./Autocomplete.css";

const options = [
  "Alexandria",
  "Alexandra M",
  "Alexa",
  "Ann",
  "Ana Blandiana",
  "Ana Ionescu",
];

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const autocompleteRef = useRef();

  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="autocomplete-container" ref={autocompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="type something..."
        onFocus={() => {
          setShowSuggestions(true);
        }}
        className="autocomplete"
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleSuggestionClick(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
