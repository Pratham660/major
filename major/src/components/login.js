import React from "react";
import { Link } from "react-router-dom";
import  './css/login.css';
import bg from "./images/bgbgbg.jpg";

export default function Login() {
 
  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" /> 

<div class="container" style={{height:"70vh"}}>
  <form >
    <p style={{fontSize:"40px" , fontWeight:"700"}}>Login</p>
    <hr></hr>
    <br></br>
    <input type="email" placeholder="Email" /><br />
    <input type="password" placeholder="Password" /><br /> 
    <input type="button" value="Sign in" /><br />
    <a href="#" style={{fontSize:"14px" , fontWeight:"600"}}>Forgot Password?</a>
  </form>

  <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
</div>
    </>
  );
}