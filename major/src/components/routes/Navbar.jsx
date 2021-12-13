import React from "react";
import "../css/navstyle.css";
import logo from "../images/logo.png";

export default function NavBar(){
    const handleClick = () =>{
        localStorage.clear();
        window.location.href = 'http://localhost:3000/';
    };
    return(
       
        <header className='navbar'>
             <a className="navbar__title " href="http://localhost:3000/"><img src={logo} width="65%"></img></a> 
            <div className='navbar__item'>
             <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/ipage1">Interview Prep</a>
            </div>
            <div className='navbar__item'>
            <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/smartpractice">Smart Practice</a>
            </div>
            {/* <div className='navbar__item'>About Us</div> */}
            <div className='navbar__item'>
            <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/discuss">Discuss</a>
            </div>
            <div className='navbar__item'>
             <a style={{color: 'black',textDecoration: 'none'}} href="http://localhost:3000/video" target={"__blank"}>Video Chat</a>
            </div>
            <div className='navbar__item'><input type="button" value={'logout'} onClick={handleClick}></input></div>
        </header>
   
    );
} 
