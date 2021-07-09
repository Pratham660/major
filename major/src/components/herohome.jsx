import "./css/herohome.css";
import React from "react";
const HeroSection = () => {
  return (
      <div id="home" className="header-hero bg_cover" style={{ backgroundImage : "url(/images/bghome.jpg)"}}>
            <div className="container">
              <div className="ellipse1"></div>
              <div className="ellipse4"></div>
              <div className="ellipse5"></div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="header-content text-center">
                            <p className="text">Your one stop to </p>
                            <h3 className="header-title">CODE . COLLABORATE . CREATE</h3>
                            <p className="text" style={{color:"#0400CB"}}>Create a room, invite your friends, and race to finish the problems.</p>
                            <br />
                            <br />
                            <div className="d-grid gap-2 col-6 mx-auto">
                              <button className="btn btn-primary btn-xl" type="button" style={{color:"#0249FF"}}><h3 style={{color:"#fff"}}>Get Started</h3></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
      </div>
  );
};

export default HeroSection;
