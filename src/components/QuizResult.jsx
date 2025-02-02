import React from "react";
export default function QuizResult({ score, totalQuestions, onRestart }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-gray-600 mb-6">
          You scored {score} out of {totalQuestions*4}.
        </p>
        <button
          onClick={onRestart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Restart Quiz
        </button>
      </div>
    );
  }