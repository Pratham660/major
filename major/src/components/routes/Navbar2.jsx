import React from "react";
import "../css/navstyle.css";
import logo from "../images/logo.png";

export default function NavBar2(){
    return(
        <header className='navbar'>
             <a class="navbar__title " href="http://localhost:3000/"><img src={logo} width="65%"></img></a> 
            <div className='navbar__item'>
             <a href="http://localhost:3000/login">Login</a>
            </div>
            <div className='navbar__item'>
            <a href="http://localhost:3000/register">Signup</a>
            </div>
        </header>
   
    );
} 
