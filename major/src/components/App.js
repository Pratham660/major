import React,{Component} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login"
import Register from "./register"
import "./css/App.css";
import Ipage1 from "./ipage1";
import Ipage2 from "./ipage2";
import HeroSection from "./herohome";
import Navbar from "./routes/Navbar";
import Footer from "./routes/Footer";
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