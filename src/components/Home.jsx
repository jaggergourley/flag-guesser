//Home.jsx

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Buttons from "./Buttons";
import Quiz from "./Quiz";
import "./Home.css";

function Home() {

  const [selectedOption, setSelectedOption] = useState("All Continents");
  const [active, setActive] = useState("All Countries");

  return (
    <div className="home">
      <h1 className="title">Select setting for quiz</h1>
      <Buttons active={active} setActive={setActive}/>
      <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <Quiz selectedOption={selectedOption} active={active}/>
      <button className="start-button">Start Quiz</button>
    </div>
  );
}

export default Home;
