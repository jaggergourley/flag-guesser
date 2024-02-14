import React, { useState } from "react";
import Selection from "./components/Selection";
import Switch from "./components/Switch";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <h1>Welcome to my app</h1>
      <Selection />
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
    </div>
  );
}

export default App;
