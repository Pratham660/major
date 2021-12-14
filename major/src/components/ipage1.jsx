import React from "react";
import "./css/ipage1.css";
import banner from "./images/banner.svg";
import Navbar from "./routes/Navbar";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Link } from "react-router-dom";

export default function Ipage1() {

  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <Carousel
    plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 1200,
      }
    },
  ]}   
  animationSpeed={1000}
>
  <h1 style={{backgroundColor:"#f8c9ff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> ARRAYS </h1>
  <h1 style={{backgroundColor:"#c6ff63",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> MATRIX </h1>
  <h1 style={{backgroundColor:"#63fff7",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> STRINGS </h1>
  <h1 style={{backgroundColor:"pink",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> DYNAMIC PROGRAMMING </h1>
  <h1 style={{backgroundColor:"#9ef7d1",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> HEAPS </h1>
  <h1 style={{backgroundColor:"#badfff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> BINARY SEARCH TREES </h1>
  <h1 style={{backgroundColor:"#f9ff59",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> TREES </h1>
  <h1 style={{backgroundColor:"pink",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> GRAPHS </h1>
  <h1 style={{backgroundColor:"#9ef7d1",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> BIT MANIPULATION </h1>
  <h1 style={{backgroundColor:"pink",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> LINKED LISTS </h1>
  <h1 style={{backgroundColor:"#badfff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> STACK AND QUEUE </h1>
  <h1 style={{backgroundColor:"#f9ff59",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> TRIES </h1>
  <h1 style={{backgroundColor:"pink",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> SEARCHING AND SORTING </h1>
  <h1 style={{backgroundColor:"#badfff",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> GREEDY </h1>
  <h1 style={{backgroundColor:"#9ef7d1",width:"100vw",height:"30px",textAlign:"center",fontSize:"x-large",fontWeight:"600"}}> BACKTRACKING AND RECURSION </h1>
  {/* <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} />
  <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} />
  <img src={"https://media.istockphoto.com/vectors/big-data-visualization-banner-abstract-background-with-lines-array-vector-id1266851697"} /> */}
</Carousel>
      <div class="Jumbotron" class="text-center" style={{ marginTop: "50px", backgroundColor: "yellow" }}>
        <h1><a href="http://localhost:3000/ipage2" style={{textDecoration:"none",padding:"10px"}}>Choose a Topic</a></h1>
      </div>
      <div class="text-center" style={{ marginTop: "50px", marginBottom: "50px" }} >
        <h3 style={{color:"black"}}>Everything  you need to crack your</h3>
        <h1>NEXT TECH INTERVIEW</h1>
      </div>

      <div id="bannerimage"></div>

      <div class="text-center" style={{ marginTop: "50px" }} >
        <h3 style={{color:"black"}}>What makes us an awesome</h3>
        <h3 style={{color:"black"}}>resource for tech interview preparation</h3>
        <h1>450+ problems for practice</h1>

      </div>
      {/* <div class="text-center" style={{ marginTop: "100px", marginBottom: "100px" }} >
        <h1>Problems Solved Count : 96/450</h1>

      </div> */}









    </>
  );
}