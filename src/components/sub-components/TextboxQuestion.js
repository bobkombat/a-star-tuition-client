import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increaseScore } from "../../store/actions/scoreActions";

export default function TextboxQuestion({ questionData, nextQuestion, questionNo }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const dispatch = useDispatch();
  const [answeredValue, setAnsweredValue] = useState("");

  function checkAnswer(e) {
    e.preventDefault();
    setAnswer(false);
    for (let i of Object.values(questionData.answer)) {
      if (i === answeredValue) {
        setAnswer(true);
        dispatch(increaseScore());
        break;
      }
    }

    setIsAnswered(true);
  }

  function setImg(data, repeat) {
    const list = [];
    for (let i = 0; i < repeat; i++) {
      list.push(<img key={i + 40} className="w-full h-full" src={data.src} alt={data.alt} />);
    }
    return list;
  }

  useEffect(() => {
    setIsAnswered(false);
    setAnswer(null);
    setAnsweredValue("");
  }, [questionData]);

  return (
    <div className="w-3/5 sm:w-full sm:p-8 p-16 bg-black font-header font-bold text-gray-100">
      {answer === true ? (
        <h1 className="text-2xl text-center text-green-500">Correct Answer!</h1>
      ) : answer === false ? (
        <h1 className="text-2xl text-center text-red-500">Wrong Answer!</h1>
      ) : null}
      <h1 className="text-5xl underline">Question: {questionNo}</h1>
      <br />
      <h1 className="text-2xl" dangerouslySetInnerHTML={{ __html: questionData.questions }} />
      <div className="my-5">
        <div className="flex">
          {questionData.assets.map((data, idx) => (
            <div key={idx + 10} className="sm:w-auto sm:h-16 w-auto h-40 p-2 bg-white flex">
              {setImg(data, data.repeat).map((imgData, idxImg) => imgData)}
            </div>
          ))}
        </div>
      </div>
      <form
        className="my-2 rounded-full shadow-xl p-2 w-2/3 h-12 flex justify-between bg-white"
        onSubmit={(e) => checkAnswer(e)}
      >
        <input
          type="text"
          className="bg-white text-gray-900 font-bold w-8/12"
          placeholder={questionData.placeholder}
          required
          value={answeredValue}
          disabled={isAnswered}
          onChange={(e) => setAnsweredValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={isAnswered}
          className="bg-black rounded-full font-bold w-4/12 hover:bg-gray-800"
        >
          Submit Answer
        </button>
      </form>
      {isAnswered && (
        <button
          className="p-2 m-2 bg-white font-bold text-xl text-gray-900 hover:bg-gray-300 focus:ring-gray-600 focus:ring-4 focus"
          onClick={() => nextQuestion()}
        >
          Next Question
        </button>
      )}
    </div>
  );
}
