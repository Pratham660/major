import "./css/interview_pre.css";
import React from "react";
import Data from "../data/graph.json";
import Navbar from "./routes/Navbar";

const interview_pre = () => {
  const DisplayData = Data.map((problem) => {
    return (
      <tr style={{backgroundColor:"#fbe6fc"}}>
        <td style={{borderRight:"1px solid black"}}>{problem.number})</td>
        {/* <td>{problem.topic}</td> */}
        <td style={{borderRight:"1px solid black"}}>{problem.name}</td>
        <td>
          <a href={problem.link} target="_blank" style={{fontSize:"10px",borderRadius:"25px",backgroundColor:"#98ff8c", textDecoration:"none",height:"30px", width:"60px",fontSize:"large",border:"2px solid black",textAlign:"center"}}>
            Solve
            {/* <button style={{fontSize:"10px",backgroundColor:"#98ff8c"}}>
            solve
            </button> */}
          </a>
        </td>
      </tr>
    );
  });
  const mystyle={
    width:"80vw",
    border:"2px solid black",
    margin:"auto",
    fontSize:"large",
    backgroundColor:"#f9b5ff",
    marginTop:"20px",
    marginBottom:"30px"
  }
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <h2 style={{fontSize:"xx-large",textAlign:"center"}}>Graphs</h2>
      <table class="table table-striped" style={mystyle}>
        <thead>
          <tr>
            <th style={{borderRight:"1px solid black"}}>Sr.NO</th>
            {/* <th>Topic</th> */}
            <th style={{borderRight:"1px solid black"}}>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default interview_pre;
