import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <main className="w-full overflow-auto h-screen bg-white font-header flex flex-col items-center">
      <Link
        to="/"
        className="sm:text-xl sm:w-11/12 my-10 sm:border-b-2 w-9/12 mx-auto border-b-4 cursor-pointer transition ease-out duration-200 transform hover:-translate-y-1 border-gray-900 text-3xl"
      >
        &lt; Back
      </Link>
      <section className="sm:w-11/12 w-9/12 flex-wrap h-3/5 mx-auto flex items-center justify-around text-gray-100 font-bold">
        <div className="sm:p-8 sm:w-full p-14 shadow-lg bg-black w m-5 transition ease-out duration-100 transform hover:scale-105 scale-100">
          <h1 className="text-4xl mb-5 border-gray-100 border-b-2 inline-block">
            Start the quiz as a guest.
          </h1>
          <h6 className="text-xl mb-5">
            You can't save your current score and save them to leaderboard.
          </h6>
          <Link to="/quiz/guest">
            <button className="text-gray-900 bg-white w-40 h-10 font-bold transition ease-out duration-100 transform hover:scale-105 scale-100">
              Start the quiz now
            </button>
          </Link>
        </div>
        <div className="sm:p-8 sm:w-full p-14 shadow-lg bg-black w m-5 transition ease-out duration-100 transform hover:scale-105 scale-100">
          <h1 className="text-4xl mb-5 border-gray-100 border-b-2 inline-block">
            Start the quiz as a registered user.
          </h1>
          <h6 className="text-xl mb-5">
            Save your own quiz score and see them in your personalized leaderboard.
          </h6>
          <Link to={localStorage.username ? `/quiz/${localStorage.username}` : `/quiz/guest`}>
            <button className="text-gray-900 bg-white w-40 h-10 font-bold transition ease-out duration-100 transform hover:scale-105 scale-100">
              Start the quiz now
            </button>
          </Link>
          <br />
          <Link to="/register" className="text-sm underline">
            Click here if you're not yet register.
          </Link>
        </div>
      </section>
    </main>
  );
}
