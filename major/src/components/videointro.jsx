import React from "react";
import "./css/ipage1.css";
import Navbar from "./routes/Navbar";

export default function Videointro() {
  const mystyle = {
    width: "400px",
    backgroundColor: "#a1fcff",
    padding: "0px",
    fontFamily: "Arial",
    fontSize: "25px",
    marginLeft: "25px",
    marginBottom: "25px",
    height: "50px",
    fontWeight: "600",
    borderRadius:"25px"
  }
  return (
    <>
      <Navbar></Navbar>
      <div id="bannerimage2"></div>
      <div class="text-center" style={{ marginTop: "40px", marginBottom: "60px"}} >
        <p style={{fontSize:"xx-large",color:"blue"}}>Start a video call now !</p>
        <p style={{fontSize:"xx-large",color:"blue"}}>or join an ongoing video call !!</p>
      </div>
  
      <div class="Jumbotron" class="text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1 style={{color:"black"}}>Click the button below to explore video chat feature</h1>
      </div>
      <br></br>
      <div style={{marginLeft:"30vw"}}>
      <a href="https://codescript-videochat.netlify.app/" target={"__blank"}>
      <input type="button" value="Go to Codescript Video Chat" style={mystyle}></input>
      </a>
      </div>
      
      {/* <input type="button" value="Go to Codescript Video Chat" style={mystyle} target={"__blank"}></input> */}

    </>
  );
}