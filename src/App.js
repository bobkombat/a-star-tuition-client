import "./tailwind.generated.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
