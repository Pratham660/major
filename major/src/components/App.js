import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import Register from "./register"
import "./css/App.css";
import HeroSection from "./herohome";

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
      <HeroSection></HeroSection>
      <h3>Footer here</h3>
    </div>
    </div>
  );
}

export default App;
