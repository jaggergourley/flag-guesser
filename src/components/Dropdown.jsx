import React, { ChangeEvent } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const options = [
    "All",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];
  const [selectedOption, setSelectedOption] = React.useState("All");

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
