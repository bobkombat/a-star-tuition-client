import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLeaderboard } from "../utils";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await fetchLeaderboard();
      setLeaderboardData(resp);
    };

    fetch();
  }, []);

  return (
    <>
      <main className="w-full py-5 overflow-auto h-screen bg-white font-header flex flex-col items-center font-bold text-gray-900">
        <Link
          to="/"
          className="sm:text-xl sm:w-11/12 my-10 sm:border-b-2 w-9/12 mx-auto border-b-4 cursor-pointer transition ease-out duration-200 transform hover:-translate-y-1 border-gray-900 text-3xl"
        >
          &lt; Back
        </Link>
        <h1 className="text-5xl my-5">Leaderboard data.</h1>
        {leaderboardData.length > 0 ? (
          <table className="text-3xl py-2 border-collapse">
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((data, idx) => (
                <tr>
                  <td key={idx}>{data.User.username}</td>
                  <td key={idx + 10}>{data.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-3xl">There is currently no one in leaderboard</h1>
        )}
      </main>
    </>
  );
}
