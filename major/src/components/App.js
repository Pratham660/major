import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import Register from "./register"
import "./css/App.css";
import HeroSection from "./herohome";
 import Navbar from "./routes/Navbar";
import Footer from "./routes/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>  
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={HeroSection} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
