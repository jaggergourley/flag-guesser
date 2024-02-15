import React from "react";
import "./Dropdown.css";

interface DropdownProps {
  options: string[]; // Array of strings representing dropdown options
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <select className="dropdown">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
