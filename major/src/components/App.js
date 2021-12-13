import React,{Component} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Myform from "./post_doubt.jsx"
import Login from "./login.jsx"
import Register from "./register"
import Smart_practice from "./smart_practice"
import "./css/App.css";
import interview_pre from "./interview_pre";
import Discuss from "./blog";
import Ipage1 from "./ipage1";
import Ipage2 from "./ipage2";
import HeroSection from "./herohome";
import Navbar from "./routes/Navbar";
import Footer from "./routes/Footer";
import NotFoundPage from './NotFoundPage.jsx';

class App extends Component  {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  render(){
  return (
    <div>
      <Navbar></Navbar>
      <p>{this.state.data}</p>
      <Router>
        <Switch>  
        <Route path="/interview" exact component={interview_pre} />
        <Route path="/post" exact component={Myform} />
        <Route path="/discuss" exact component={Discuss} />
        <Route path="/ipage1" exact component={Ipage1} />
        <Route path="/ipage2" exact component={Ipage2} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/smartpractice" exact component={Smart_practice} />
        <Route path="/" exact component={HeroSection} />
        <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // fetching the GET route from the Express server which matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

// export default App;