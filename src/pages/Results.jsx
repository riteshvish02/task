import React from "react";
import QuizResult from "../components/QuizResult";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const score = 5; // Replace with actual score from state or context
  const totalQuestions = 10; // Replace with actual total questions

  return (
    <div className="container mx-auto p-4">
      <QuizResult
        score={score}
        totalQuestions={totalQuestions}
        onRestart={() => navigate("/")}
      />
    </div>
  );
}