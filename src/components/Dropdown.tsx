import React, { ChangeEvent } from "react";
import "./Dropdown.css";

interface DropdownProps {
  options: string[]; // Array of strings representing dropdown options
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select className="dropdown" onChange={handleSelect}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
