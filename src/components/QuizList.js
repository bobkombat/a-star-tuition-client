import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetScore } from "../store/actions/scoreActions.js";
import { getRandomizeQuestion, setLeaderboard } from "../utils/index.js";
import MultipleChoice from "./sub-components/MultipleChoice.js";
import TextboxQuestion from "./sub-components/TextboxQuestion.js";

export default function QuizList() {
  const score = useSelector((store) => store.scoreReducers.score);
  const questions = useSelector((store) => store.questionReducers.questions);
  const dispatch = useDispatch();
  const [totalQuestion] = useState(2);
  const [randomizedQuestion, setRandomizeQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function nextQuestion() {
    setCurrentQuestion((prev) => prev + 1);
  }

  useEffect(() => {
    setRandomizeQuestion(getRandomizeQuestion(questions, totalQuestion));
    dispatch(resetScore());
  }, [questions, totalQuestion, dispatch]);

  if (
    randomizedQuestion.length > 0 &&
    randomizedQuestion.length === currentQuestion &&
    localStorage.username
  ) {
    console.log("masuk sini");
    setLeaderboard(score);
  }

  return (
    <>
      <h1 className="font-bold text-7xl my-8 text-gray-900">Score: {score}</h1>
      {randomizedQuestion[currentQuestion] &&
        randomizedQuestion[currentQuestion].type === "MULTIPLE_CHOICE" && (
          <MultipleChoice
            questionData={randomizedQuestion[currentQuestion]}
            nextQuestion={nextQuestion}
            questionNo={currentQuestion + 1}
          />
        )}
      {randomizedQuestion[currentQuestion] &&
        randomizedQuestion[currentQuestion].type === "TEXTBOX" && (
          <TextboxQuestion
            questionData={randomizedQuestion[currentQuestion]}
            nextQuestion={nextQuestion}
            questionNo={currentQuestion + 1}
          />
        )}
      {randomizedQuestion.length !== currentQuestion ? (
        <Link to="/get-started" className="underline hover:text-gray-600 font-bold text-2xl m-4">
          Give Up?
        </Link>
      ) : (
        <div className="font-bold text-xl text-center text-gray-900">
          <h1>Thanks for taking the quiz.</h1>
          <h4>
            Your final score is {score} / {totalQuestion}
          </h4>
          <h5>If you are a registered user check the leaderboard for your final result.</h5>
          <Link to="/get-started" className="underline hover:text-gray-600 font-bold text-2xl m-4">
            Try Again?
          </Link>
        </div>
      )}
    </>
  );
}
