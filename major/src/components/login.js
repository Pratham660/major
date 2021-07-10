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
    <p style={{fontSize:"large" , fontWeight:"700"}}>Get Started</p>
    <input type="email" placeholder="Email" /><br />
    <input type="password" placeholder="Password" /><br /> 
    <input type="button" value="Sign in" /><br />
    <a href="#" style={{fontSize:"16px" , fontWeight:"700"}}>Forgot Password?</a>
  </form>

  <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
</div>
      {/* <div className="container-fluid bg-new3" style={{backgroundImage:`url(${bg})` }}>
        <div classNameName="row">
          <div className="col-sm-9 col-md-8 col-lg-6 mx-auto">
            <div className="card border1 shadow-lg card-signin my-5">
              <div className="card-body">
                <h1 className="card-title text-center">Sign In</h1>
                <form className="form-signin" >
                  <div className="form-label-group">
                    <label htmlFor="inputEmail" className="">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="border1 shadow-sm form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-label-group">
                    <label htmlFor="inputPassword" className="">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="border1 shadow-sm form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                  </div>
                  <button className=" border1 btn btn-lg btn-primary btn-block text-uppercase shadow" type="submit">
                    Sign in
                  </button>
                </form>
                <div className="w-100 text-center mt-3">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <p className="text-center my-4">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}