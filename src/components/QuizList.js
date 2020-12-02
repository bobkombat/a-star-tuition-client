import React, { useState } from "react";

export default function QuizList(props) {
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="font-bold text-7xl my-8 text-gray-900">Score: {score}</h1>
    </>
  );
}
