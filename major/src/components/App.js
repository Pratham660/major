import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import Register from "./register"
import "./css/App.css";
import Ipage1 from "./ipage1";
import Ipage2 from "./ipage2";
import HeroSection from "./herohome";
 import Navbar from "./routes/Navbar";
import Footer from "./routes/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>  
        <Route path="/ipage1" component={Ipage1} />
        <Route path="/ipage2" component={Ipage2} />
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
