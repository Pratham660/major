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
      <h1>Navbar</h1>
      <Router>
        <Switch>  
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={HeroSection} />
        </Switch>
      </Router>
      <h1>Footer</h1>
    </div>

    
    </div>
  );
}

export default App;
