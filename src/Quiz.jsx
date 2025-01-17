import React, { useState } from "react";
import "./Quiz.css";

const myArr = [
  {
    Answers: [
      "Hyper Text Markup Language",
      "Transmission Control Protocol",
      "Generative Pre-trained Transformer",
      "Serial Advanced Technology Attachment",
      "User Datagram Protocol"
    ]
  },
  {
    Question: "1) What is full form of HTML?",
    Answers: [
      "Hyper Text Makeup Language",
      "Hyper Text Markup Language",
      "Hyper Test Makeup Language",
      "Hypo Text Makeup Language"
    ]
  },
  {
    Question: "2) What is full form of TCP?",
    Answers: [
      "Translation Control Protocol",
      "Transmission Call Protocol",
      "Transportation Control Protocol",
      "Transmission Control Protocol"
    ]
  },
  {
    Question: "3) What is full form of GPT?",
    Answers: [
      "General Purpose Technology",
      "Generative Pre-trained Transformer",
      "Generative Purpose Technology",
      "General Pre-trained Transform"
    ]
  },
  {
    Question: "4) What is full form of SATA?",
    Answers: [
      "Serial Advanced Technology Attachment",
      "Series Attachment of Technical Advancement",
      "Simple Attachment of Technology Asset",
      "Simplified Attachment of Technical Asset"
    ]
  },
  {
    Question: "5) What is full form of UDP?",
    Answers: [
      "User Defined Protocol",
      "Using Dynamic Protocol",
      "User Datagram Protocol",
      "User Data type Protocol"
    ]
  }
];
export default function Quiz() {
  const [count, setCount] = useState(1);
  const [answered, setanswered] = useState(Array(myArr.length).fill(''));
  const [resultPage, setresultPage] = useState(false);

  const Next = () => {
    if (count < myArr.length - 1) {
      setCount(count + 1);
    } else {
      setresultPage(true);
    }
  };

  const Previous = () => {
    if (count > 1 && count < myArr.length) {
      setCount(count - 1);
    }
  };

  const selectedOption = (option) => {
    const newResponses = [...answered];
    newResponses[count] = option;
    setanswered(newResponses);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < myArr.length; i++) {
      if (answered[i+1] === myArr[0].Answers[i]) {
        score++;
      }
    }
    return score;
  };

  return (
    <div><br/>
      {resultPage ? (
        <div id="result">
          <h2>Scorecard</h2><br/>
          <p id="total">Total Questions: {myArr.length-1}</p><br/>
          <p id="correct">Correct Answers: <span>{calculateScore()-1}</span></p>
        </div>
      ) : (
        <div>
          
          <h3>{myArr[count].Question}</h3>
          {myArr[count].Answers.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`option-${count}`}
                value={option}
                checked={answered[count] === option}
                onChange={() => selectedOption(option)} 
              />
              {option}
              <br/>
            </label>
          ))}
          <div>
            <button onClick={Previous} disabled={count === 1}>
              Previous
            </button>
            <button onClick={Next} id="Next">
              {count < myArr.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
