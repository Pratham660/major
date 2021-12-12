import "./css/discuss.css";
import React from "react";

const Discuss = () => {
    // const DisplayData = Data.map(
    //     (problem) => {
    //         return (
    //             <tr>
    //                 <td>0</td>
    //                 <td>{problem.topic}</td>
    //                 <td>{problem.name}</td>
    //                 <td>
    //                     <a href={problem.link} target="_blank">  <button className="btn info" onClick='window.location.href="https://www.google.com"'>solve</button> </a>
    //                 </td>
    //             </tr>
    //         )
    //     }
    // )
    return (
        <div>
            <h2 className="sample">Post your doubt HERE!!</h2>
            <form>
                <div className="input-container">
                    <input className="input-field" type="text" placeholder="H a v e   a   D o u b t  ?" name="usrnm"/>
                    <button type="submit" className="btns">Post</button>
                </div>
            </form>
        </div>
    )
};

export default Discuss;
