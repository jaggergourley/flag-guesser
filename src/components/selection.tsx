import React from "react";
import Switch from "./Switch";
import Dropdown from "./Dropdown";

function Selection() {
  const [isToggled, setIsToggled] = React.useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
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
  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Switch isToggled={isToggled} onToggle={handleToggle} />
      <Dropdown options={options} onSelect={handleSelect} />
    </>
  );
}

export default Selection;
