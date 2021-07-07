import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import Register from "./register"

function App() {
  return (
    <div>
    <div>
      <Router>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
    <div>
      <h3>Hi Navbar there</h3>
      <h1>CODESCRIPT MAJOR PROJECT / body</h1>
      <h3>Footer here</h3>
    </div>
    </div>
  );
}

export default App;
