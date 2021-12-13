import React,{Component} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Myform from "./post_doubt.jsx"
import Login from "./login.jsx"
import Register from "./register"
import Smart_practice from "./smart_practice"
import "./css/App.css";
import Videointro from "./videointro.jsx"
// import interview_pre from "./interview_pre";
import i1 from "./i1";
import i2 from "./i2";
import i3 from "./i3";
import i4 from "./i4";
import i5 from "./i5";
import i6 from "./i6";
import i7 from "./i7";
import i8 from "./i8";
import i9 from "./i9";
import i10 from "./i10";
import i11 from "./i11";
import i12 from "./i12";
import i13 from "./i13";
import i14 from "./i14";
import i15 from "./i15";
import Discuss from "./blog";
import Ipage1 from "./ipage1";
import Ipage2 from "./ipage2";
import HeroSection from "./herohome";
import Home from "./herohome2";
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
      {/* <Navbar></Navbar> */}
      <Router>
        <Switch>  
        {/* <Route path="/interview" exact component={interview_pre} /> */}
        <Route path="/i1" exact component={i1} />
        <Route path="/i2" exact component={i2} />
        <Route path="/i3" exact component={i3} />
        <Route path="/i4" exact component={i4} />
        <Route path="/i5" exact component={i5} />
        <Route path="/i6" exact component={i6} />
        <Route path="/i7" exact component={i7} />
        <Route path="/i8" exact component={i8} />
        <Route path="/i9" exact component={i9} />
        <Route path="/i10" exact component={i10} />
        <Route path="/i11" exact component={i11} />
        <Route path="/i12" exact component={i12} />
        <Route path="/i13" exact component={i13} />
        <Route path="/i14" exact component={i14} />
        <Route path="/i15" exact component={i15} />
        <Route path="/post" exact component={Myform} />
        <Route path="/discuss" exact component={Discuss} />
        <Route path="/ipage1" exact component={Ipage1} />
        <Route path="/ipage2" exact component={Ipage2} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/video" exact component={Videointro} />
        <Route path="/smartpractice" exact component={Smart_practice} />
        <Route path="/" exact component={HeroSection} />
        <Route path="/home" exact component={Home} />
        <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}
}

export default App;
