import React, { useEffect, useState } from "react";

export default function QuizQuestion({ question, onAnswer, currentQuestion,setCurrentQuestion }) {
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
  },[currentQuestion])
  return question && (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Question {currentQuestion + 1} : {question.description}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.is_correct, index)}
            className={`w-full cursor-pointer p-3 rounded-lg transition-colors ${
              selectedOption === index
                ? option.is_correct
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {option.description}
          </button>
        ))}
      </div>
      {showSolution && (
        <button
          onClick={()=>setCurrentQuestion(currentQuestion+1)}
          className="mt-4 cursor-pointer w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
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