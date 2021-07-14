import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

export default function Login() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <div class="container" style={{ height: "70vh" }}>
        <form>
          <p style={{ fontSize: "large", fontWeight: "700" }}>Get Started</p>
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="button" value="Sign in" />
          <br />
          <a href="#" style={{ fontSize: "16px", fontWeight: "700" }}>
            Forgot Password?
          </a>
        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>
    </>
  );
}
