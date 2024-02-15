import React from "react";
import "./Switch.css";

interface SwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
