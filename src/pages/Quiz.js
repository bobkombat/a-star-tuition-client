import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BeforeQuizStart from "../components/BeforeQuizStart";
import QuizList from "../components/QuizList";

export default function Quiz() {
  const { user } = useParams();
  const [start, setStart] = useState(false);

  return (
    <main className="w-full overflow-auto h-screen bg-white font-header flex flex-col items-center py-8">
      {!start && <BeforeQuizStart user={user} setStart={setStart} />}
      {start && <QuizList />}
    </main>
  );
}
