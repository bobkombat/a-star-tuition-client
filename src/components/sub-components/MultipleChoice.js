import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increaseScore } from "../../store/actions/scoreActions";

export default function MultipleChoice({ questionData, nextQuestion, questionNo }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const dispatch = useDispatch();

  function checkAnswer(answerIdx) {
    setAnswer(false);
    for (let i in questionData.answer) {
      if (i === answerIdx) {
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
        {Object.keys(questionData.choices).map((data) => (
          <button
            key={data}
            className={`p-2 m-2 ${
              isAnswered
                ? "bg-gray-400 cursor-default"
                : "bg-white transition duration-200 ease-out transform hover:-translate-y-1"
            } font-bold text-lg text-gray-900 focus:ring-gray-600 focus:ring-4 focus`}
            disabled={isAnswered}
            onClick={() => checkAnswer(data)}
          >
            {questionData.choices[`${data}`]}
          </button>
        ))}
      </div>
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
