import React from "react";
export default function QuizCard({ quiz,onStart }) {
    console.log(quiz);
    
    return quiz && (
      <div className="bg-white p-6 rounded-lg shadow-md border-1 flex border-zinc-200 hover:shadow-lg transition-shadow">
        <div className="w-[50%]  h-[100%]">
            <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
            <p className="text-gray-600 mb-4">{quiz.description}</p>
            <p className="text-gray-600 mb-4">Duration : {quiz.duration} min</p>
            <p className="text-gray-600 mb-4">Total Questions : {quiz.questions.length}</p>
            <p className="text-gray-600 mb-4">Total Marks : {quiz.correct_answer_marks * quiz.questions.length}</p>
            <p className="text-gray-600 mb-4">Negative Marks : {quiz.negative_marks}</p>
            <button
            onClick={onStart}
            className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Start Quiz
            </button>
        </div>
        <div className="w-[50%]  h-[100%] overflow-hidden rounded-lg ml-5">
            <img className="w-full h-full object-cover object-center" src="https://cdn.splainer.in/CMS/8edd8d55-5655-4bec-9d64-9942c5461961.jpeg" alt="" />
        </div>
      </div>
    );
  }