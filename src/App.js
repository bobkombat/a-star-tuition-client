import "./tailwind.generated.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/get-started" component={GetStarted} />
      </Switch>
    </Router>
  );
}

export default App;
