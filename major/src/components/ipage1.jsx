import React from "react";
import "./css/ipage1.css";
import banner from "./images/banner.svg";


import { Link } from "react-router-dom";

export default function Ipage1() {
 
  return (
    <>
   <div class="Jumbotron" class="text-center" style={{ marginTop:"50px",backgroundColor:"grey"}}>
     <h1><a href="#">Choose a Topic</a></h1>

   </div>
<div  class="text-center"style={{ marginTop:"100px", marginBottom:"100px"}} >
  <p>Everything  you need to crack your</p>
  <h1>NEXT TECH INTERVIEW</h1>
</div>

<div id="bannerimage"></div>

<div  class="text-center"style={{ marginTop:"100px"}} >
  <p>What makes us an awesome</p>
  <p>Resource for tech interview preparation</p>
  <p>500+ problems for practice</p>
  
</div>
<div  class="text-center"style={{ marginTop:"100px", marginBottom:"100px"}} >
  <h1>Problems Solved Count : 96/450</h1>
  
</div>









    </>
  );
}