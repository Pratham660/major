import React from "react";
import "../css/navstyle.css";
import logo from "../images/logo.png";

export default function NavBar(){
    return(
        <header className='navbar'>
             <a class="navbar__title " href="#"><img src={logo} width="65%"></img></a> 
            <div className='navbar__item'>Interview Prep</div>
            <div className='navbar__item'>Smart Practice</div>
            <div className='navbar__item'>About Us</div>
        </header>
   
    );
} 
