import React from "react";
import "./Switch.css";

const Switch = ({
  isToggled,
  onToggle,
}: {
  isToggled: boolean;
  onToggle: () => void;
}) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
