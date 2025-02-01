import React from "react";
export default function QuizCard({ quiz,onStart }) {
    console.log(quiz);
    
    return quiz && (
      <div className="bg-white p-6 rounded-lg shadow-md border-1 border-zinc-200 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <p className="text-gray-600 mb-4">Duration : {quiz.duration} min</p>
        <button
          onClick={onStart}
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Start Quiz
        </button>
      </div>
    );
  }