import "./css/herohome.css";
import React from "react";
import Typewriter from "typewriter-effect";

import Logo from "./images/peer.png";
import wandf from "./images/wandfeature.png";
import ipf from "./images/interviewprepfeature.png";
import pracf from "./images/practicefeature.png";
import pratham from "./images/pratham.jpg";
import nakul from "./images/nakul.jpg";
import keshav from "./images/keshav.jpeg";

const HeroSection = () => {
  return (
    <div className="bgimg">
      <div className="header-hero">
        <div className="container" style={{marginTop:"0px"}}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              maxHeight: "300px",
              float: "right",
              marginRight: "0px",
              marginTop: "15vh",
            }}
          />
          
          <div className="row justify-content-left">
            <div className="col-xl-11 col-lg-11">
              <div
                className="header-content text-left"
                style={{ paddingTop: "30px" }}
              >
                <p
                  className="text"
                  style={{ color: "#2977C9", fontSize: "20px" }}
                >
                  Your one stop to{" "}
                </p>
                <h3 className="header-title">
                  {/* CODE . COLLABORATE . CREATE */}
                  <Typewriter
                    className="header-title"
                    options={{
                      strings: ["CODE", "COLLABORATE", "CREATE"],
                      delay: 30,
                      deleteSpeed: 20,
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                    }}
                  />
                </h3>
                <p className="text" style={{ color: "#0400CB" }}>
                  Create a room, invite your friends, and race to finish the
                  problems.
                </p>
                <br />
                <br />
                <button
                  className="btnn btn-primary round text-white pl-5 pr-5 pb-4 pt-4 mt-3"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@getbootstrap"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features start */}

      <div className="header-hero">
        <div className="container">
          <div className="col" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "70px" }}>
              <h2 class="HowItWorks_header__394j-">Features</h2>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-12 col-lg-12">
              <div className="row align-items-center">
                <div className="col" style={{ textAlign: "center" }}>
                  <img src={wandf} alt="" style={{ maxHeight: "225px" }} />
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img src={pracf} alt="" style={{ maxHeight: "225px" }} />
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img src={ipf} alt="" style={{ maxHeight: "225px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <section class="HowItWorks_landing-how-it-works__eeM1y">
        <h2 class="HowItWorks_header__394j-">How It Works</h2>
        <div class="HowItWorks_steps-container__1He2m">
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">1</span>
              <h3>Join a room</h3>
            </div>
            <p>
              Join or create a room, invite your friends, and get ready to start
              solving problems together.
            </p>
          </div>
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">2</span>
              <h3>Wait for the host to start</h3>
            </div>
            <p>
              Once the host starts the room, you'll all get the same coding
              question to solve. Only you can see your editor.
            </p>
          </div>
          <div class="HowItWorks_step__WR9Lu">
            <div class="HowItWorks_title__2mQLn">
              <span class="HowItWorks_number__2XBD7">3</span>
              <h3 style={{ color: "#0A66C2" }}>
                Solve the problem with others
              </h3>
            </div>
            <p>Feel free to compete or chat to solve questions together :)</p>
          </div>
        </div>
      </section>
      {/* our team section */}
      <div className="header-hero">
        <div className="container">
          <div className="col" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "70px" }}>
              <h2 class="HowItWorks_header__394j-">Our Team</h2>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-12 col-lg-12">
              <div className="row align-items-center">
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={pratham}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Pratham Agarwal
                  </h3>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={nakul}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Nakul Gupta
                  </h3>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                  <img
                    src={keshav}
                    alt=""
                    style={{ maxHeight: "175px", borderRadius: "50%" }}
                  />
                  <h3 className="text" style={{ marginTop: "20px" }}>
                    Keshav Sharma
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section end */}
      <br style={{ lineHeight: "100px" }} />
    </div>
  );
};

export default HeroSection;
