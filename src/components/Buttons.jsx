// Buttons.jsx

import React, { useState } from "react";
import "./Buttons.css";

const Buttons = ({ active, setActive }) => {

  return (
    <div className="buttons">
      <button
        className={`button ${active === "All Countries" ? "active" : ""}`}
        onClick={() => setActive("All Countries")}
      >
        All Countries
      </button>
      <button
        className={`button ${
          active === "Only Sovereign States" ? "active" : ""
        }`}
        onClick={() => setActive("Only Sovereign States")}
      >
        Only Sovereign States
      </button>
    </div>
  );
};

export default Buttons;
