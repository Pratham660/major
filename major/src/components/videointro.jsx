import React from "react";
import "./css/ipage1.css";
import Navbar from "./routes/Navbar";

export default function Videointro() {

  return (
    <>
    <Navbar></Navbar>
    <div class="text-center" style={{ marginTop: "100px", marginBottom: "100px" }} >
        <p>Start a video call now !</p>
        <p>or join an ongoing video call !!</p>
      </div>
      <div id="bannerimage2"></div>
      <div class="Jumbotron" class="text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1><a href="https://codescript-videochat.netlify.app/" target={"__blank"}>Go to Codescript Video Chat</a></h1>
      </div>
     
    </>
  );
}