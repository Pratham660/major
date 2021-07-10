import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css";
import logo1 from "../images/logo1.png";
import logo from "../images/logo.png";
import hacker from "../images/hacker.png";

export default function Footer() {
  return (
      <>
    <div className="card text-center" style={{position:"relative"}}>
      <div className="card-body footer1">
        <div className="container-fluid">
            <div className="col-lg-3">
            <a class="navbar__title " href="#"><img src={logo1} width="65%"></img></a> 
            <a class="navbar__title " href="#"><img src={logo} width="75%"></img></a> 
            <p></p>
            <p className="text">Your one stop to</p>
            <h3 className="header-title">CODE . COLLABORATE . CREATE</h3>
            </div>
            <div className="col-lg-3 st">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-lg-3 st">
            <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-lg-3">
            <img src={hacker} width="80%"></img><br></br><br></br>
            <div className="container ico">
                <div className="row">
                    <div className="col-lg-3">
                    <FaFacebook size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                    <FaInstagram size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                    <FaLinkedinIn size="23px" color="black" />
                    </div>
                    <div className="col-lg-3">
                    <FaGithub size="23px" color="black" />
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
      <div className=" text-muted footer2">
        <p className="changecolor">
          Copyright 2021 © CodeScript All rights reserved | Privacy Policy |
          Terms & Conditions
        </p>
      </div>
    </div>
    </>
  );
}