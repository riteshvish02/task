import React, { useEffect } from "react";
import QuizCard from "../components/QuizCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = React.useState([]);
  const [Quiz,setQuizData] = React.useState({});
  console.log(Quiz);
  
  useEffect(() => {
     const fetchQuizData = async () => {
         fetch("/api")
         .then((response) => response.json())
         .then((data) => {
             setQuizData(data);
             setQuizzes(()=>[...quizzes,data]);
         }
         )
         .catch((error) => console.error("Error fetching API:", error));
     };
 
     fetchQuizData();
   }, []);
console.log(quizzes);

 console.log(Quiz);
 

  return Quiz && (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key = {Quiz.id}
            quiz={Quiz}
            onStart={() => navigate(`/quiz/1`)}
          />
        ))}
      </div>
    </div>
  );
}