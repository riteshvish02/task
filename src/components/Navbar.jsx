import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Quiz Platform</Link>
        <div>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/quiz/1" className="mx-2 hover:underline">Quiz</Link>
        </div>
      </div>
    </nav>
  );
}