import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../utils";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const history = useHistory();

  async function submitRegister(e) {
    e.preventDefault();
    const data = await registerUser({ username, email, password });
    console.log(data);
    setUsername("");
    setEmail("");
    setPassword("");

    if (data === undefined) {
      setErr(false);
    } else {
      history.push("/get-started");
    }
  }

  function resetForm() {
    setUsername("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    setErr(true);
  }, []);

  if (localStorage.id && localStorage.username && localStorage.access_token) {
    history.push("/");
  }

  return (
    <main className="w-full h-screen bg-home font-header font-bold overflow-hidden">
      <Link
        to="/get-started"
        className="font-bold cursor-pointer bg-text text-4xl sm:m-4 m-10 inline-block hover:text-yellow-500"
      >
        &lt; Back
      </Link>
      {!err && (
        <h1 className="p-2 bg-red-500 text-gray-100">User is already exist please login.</h1>
      )}
      <section className="w-8/12 sm:w-11/12 sm:h-full h-2/3 mx-auto flex justify-center items-center">
        <form
          className="shadow-2xl z-10 p-10 sm:mt-0 mt-10 bg-black w-96 sm:w-full text-gray-100"
          onSubmit={submitRegister}
        >
          <label name="username" className="text-2xl">
            Username
            <input
              type="text"
              placeholder="Enter your username..."
              className="w-full text-gray-900 p-2 my-2"
              name="username"
              autoComplete="off"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label name="email" className="text-2xl">
            Email
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full text-gray-900 p-2 my-2"
              name="email"
              autoComplete="off"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label name="password" className="text-2xl">
            Password
            <input
              type="password"
              placeholder="Enter your password..."
              className="w-full text-gray-900 p-2 my-2"
              name="password"
              autoComplete="off"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="mt-20">
            <button
              type="submit"
              className="bg-white p-2 m-1 font-bold hover:bg-gray-200 text-lg text-gray-900"
            >
              Register
            </button>
            <button
              type="reset"
              className="bg-red-600 m-1 p-2 font-bold hover:bg-red-500 text-lg text-gray-100"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
        <div className="top-24 sm:top-20 sm:text-7xl absolute text-9xl bg-text select-none z-0">
          Register here.
        </div>
      </section>
    </main>
  );
}
