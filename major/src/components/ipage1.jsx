import React from "react";
import "./css/ipage1.css";
import banner from "./images/banner.svg";
import Navbar from "./routes/Navbar";

import { Link } from "react-router-dom";

export default function Ipage1() {

  return (
    <>
    <Navbar></Navbar>
      <div class="Jumbotron" class="text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1><a href="http://localhost:3000/ipage2">Choose a Topic</a></h1>
      </div>
      <div class="text-center" style={{ marginTop: "100px", marginBottom: "100px" }} >
        <p>Everything  you need to crack your</p>
        <h1>NEXT TECH INTERVIEW</h1>
      </div>

      <div id="bannerimage"></div>

      <div class="text-center" style={{ marginTop: "100px" }} >
        <p>What makes us an awesome</p>
        <p>resource for tech interview preparation</p>
        <p>450+ problems for practice</p>

      </div>
      {/* <div class="text-center" style={{ marginTop: "100px", marginBottom: "100px" }} >
        <h1>Problems Solved Count : 96/450</h1>

      </div> */}









    </>
  );
}