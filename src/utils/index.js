export function getRandomizeQuestion(questionData, questionAmount) {
  return questionData.sort(() => Math.random() - 0.5).slice(0, questionAmount);
}

export async function loginUser(userData = {}) {
  console.log(userData);
  try {
    const data = await fetch("https://a-star-server.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await data.json();
  } catch (err) {
    console.log(err);
  }
}

export async function registerUser(userData = {}) {
  console.log(userData);
  try {
    const data = await fetch("https://a-star-server.herokuapp.com/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await data.json();
  } catch (err) {
    console.log(err);
  }
}

export async function setLeaderboard(score) {
  try {
    const data = await fetch("https://a-star-server.herokuapp.com/leaderboard/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify({ score: score, UserId: localStorage.id }),
    });
    return await data.json();
  } catch (err) {
    console.log(err);
  }
}

export async function fetchLeaderboard() {
  try {
    const data = await fetch("https://a-star-server.herokuapp.com/leaderboard/all", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resp = await data.json();
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchLeaderboardDetail() {
  try {
    const data = await fetch("https://a-star-server.herokuapp.com/leaderboard/detail", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        access_token: localStorage.access_token,
      },
    });
    return await data.json();
  } catch (err) {
    console.log(err);
  }
}
