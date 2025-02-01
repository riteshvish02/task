import React, { useEffect, useState } from "react";

export default function QuizQuestion({ question, onAnswer, currentQuestion, setCurrentQuestion }) {
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (isCorrect, index) => {
    onAnswer(isCorrect);
    setShowSolution(true);
    setSelectedOption(index);
  };

  useEffect(() => {
    console.log("created");
    setShowSolution(false);
    setSelectedOption(null);
  }, [currentQuestion]);

  return question && (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Question {currentQuestion + 1} : {question.description}</h3>
      <div className="space-y-3 w-fit">
      
        {question.options.map((option, index) => {
          let buttonClass = "w-full cursor-pointer p-3 rounded-lg transition-colors ";
          if (selectedOption === index) {
            if (option.is_correct) {
              buttonClass += "bg-green-500 text-white";
            } else {
              buttonClass += "bg-red-500 text-white";
            }
          } else {
            buttonClass += "bg-gray-100 hover:bg-gray-200";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option.is_correct, index)}
              className={buttonClass}
              disabled={selectedOption !== null}
            >
              {option.description}
            </button>
          );
        })}
      </div>
      {showSolution && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
          className="mt-4 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next Question
        </button>
      )}
      {showSolution && question.detailed_solution && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold">Detailed Solution:</h3>
          <p dangerouslySetInnerHTML={{ __html: question.detailed_solution }} />
        </div>
      )}
     
    </div>
  );
}