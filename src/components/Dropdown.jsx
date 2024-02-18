// Dropdown.jsx

import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ selectedOption, setSelectedOption }) => {
  const options = [
    "All Continents",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select className="dropdown" value={selectedOption} onChange={handleSelect}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
