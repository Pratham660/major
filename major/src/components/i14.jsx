import "./css/interview_pre.css";
import React from "react";
import Data from "../data/dp.json";
import Navbar from "./routes/Navbar";

const interview_pre = () => {
  const DisplayData = Data.map((problem) => {
    return (
      <tr>
        <td>{problem.number}</td>
        {/* <td>{problem.topic}</td> */}
        <td>{problem.name}</td>
        <td>
          <a href={problem.link} target="_blank">
            {" "}
            <button
              className="btn info"
              onClick='window.location.href="https://www.google.com"'
            >
              solve
            </button>{" "}
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            {/* <th>Topic</th> */}
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default interview_pre;
