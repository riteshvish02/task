import React, { useEffect } from "react";
import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import QuizResult from "../components/QuizResult";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const totalQuestions = quizData.length;
  const handleAnswer = (selectedOption) => {
    if (selectedOption === true) {
      setScore(score + 4);
    }
    if(currentQuestion > 1 && currentQuestion+1 === totalQuestions) {
        setShowResult(true);
      }
      
  };
 
 
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };
  useEffect(() => {
    const fetchQuizData = async () => {
        fetch("/api")
        .then((response) => response.json())
        .then((data) => {
            setQuizData(data.questions);
        }
        )
        .catch((error) => console.error("Error fetching API:", error));
    };
    
    fetchQuizData();
  }, [id]);
  

  return (
    
    <div className="container mx-auto p-4">
      {showResult ? (
        <QuizResult
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      ) : quizData && (
        <QuizQuestion
          question={quizData[currentQuestion]}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}