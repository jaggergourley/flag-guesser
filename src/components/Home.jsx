import React from "react";
import Dropdown from "./Dropdown";
import Buttons from "./Buttons";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">Welcome to my app</h1>
      <Buttons />
      <Dropdown />
      <button className="start-button">Start Quiz</button>
    </div>
  );
}

export default Home;
