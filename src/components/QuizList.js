import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomizeQuestion } from "../utils/index.js";

export default function QuizList(props) {
  const score = useSelector((store) => store.scoreReducers.score);
  const questions = useSelector((store) => store.questionReducers.questions);
  const [totalQuestion] = useState(10);
  const [randomizedQuestion, setRandomizeQuestion] = useState([]);

  useEffect(() => {
    setRandomizeQuestion(getRandomizeQuestion(questions, totalQuestion));
  }, [questions, totalQuestion]);

  return (
    <>
      <h1 className="font-bold text-7xl my-8 text-gray-900">Score: {score}</h1>
      <Link to="/get-started" className="underline hover:text-gray-600 font-bold text-lg">
        Give Up?
      </Link>
    </>
  );
}
