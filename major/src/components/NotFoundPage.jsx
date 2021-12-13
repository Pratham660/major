import React from "react";
import "./css/404.css";
import img404 from "./images/img404.png";
import { Link } from "react-router-dom";
import Navbar from "./routes/Navbar";
export default function NotFoundPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="header-hero">
      <div className="container" style={{ marginTop: "0px" }}>
        <img
          src={img404}
          alt="img404"
          style={{
            maxHeight: "300px",
            float: "right",
            marginRight: "0px",
            marginTop: "7vh",
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
                style={{
                  color: "#2977C9",
                  fontSize: "50px",
                  fontWeight: "700",
                  lineHeight: "1.15",
                }}
              >
                Don't know where you are ?{" "}
              </p>
              <p
                className="text"
                style={{ color: "black", fontWeight: "400", fontSize: "24px" }}
              >
                We really have no idea either...
              </p>
              <br />
              <br />
              <Link to="/">
                <button
                className="btnn btn-primary round text-white pl-7 pr-7 pb-4 pt-4 mt-3"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@getbootstrap"
              >
                Go To HomePage
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
