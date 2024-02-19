// Quiz.jsx

import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Buttons from "./Buttons";
import flagsData from "../data/flagsData";

function Quiz({ selectedOption, active }) {
    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      // Filter the flagsData based on the user's selections
      const filteredData = flagsData.filter((country) => {
        const isSovereignState = active === 'Only Sovereign States' ? country.isSovereignState : true;
        const matchesContinent = selectedOption === 'All Continents' || country.continent === selectedOption;
        return isSovereignState && matchesContinent;
      });
  
      // Generate questions based on filtered data
      const generatedQuestions = filteredData.map((country) => ({
        text: 'What country does this flag belong to?',
        image: country.imagePath,
        correctAnswer: country.country,
        answers: [country.country],
      }));
  
      setQuestions(generatedQuestions);
    }, [selectedOption, active]);
  
    return (
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <img src={question.image} alt="flag" />
            {question.answers.map((answer, i) => (
              <button key={i}>{answer}</button>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Quiz;