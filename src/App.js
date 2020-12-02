import "./tailwind.generated.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import GetStarted from "./pages/GetStarted";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import { Provider } from "react-redux";
import store from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/quiz/:user" component={Quiz} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
