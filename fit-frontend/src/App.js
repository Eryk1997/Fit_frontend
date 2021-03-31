import "./App.css";
import { Switch, Route } from "react-router-dom";

import Front from "./Views/Front/Front";

function App() {
  return (
    <div className="App bg-secondary">
      <Switch>
        <Route exact path="/" component={Front} />
      </Switch>
    </div>
  );
}

export default App;
