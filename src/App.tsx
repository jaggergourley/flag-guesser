import React, { useState } from "react";
import Selection from "./components/Selection";
import Switch from "./components/Switch";
import Dropdown from "./components/Dropdown";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const options = [
    "All",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];

  return (
    <div>
      <h1>Welcome to my app</h1>
      <Selection />
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <Dropdown options={options} />
    </div>
  );
}

export default App;
