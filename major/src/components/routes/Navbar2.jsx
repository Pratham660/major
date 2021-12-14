import React from "react";
import "../css/navstyle.css";
import logo from "../images/logo.png";

export default function NavBar2(){
    return(
        <>

        <header className='navbar' style={{boxShadow: "3px 3px 10px #abfcff"}}>
             <a class="navbar__title " href="http://localhost:3000/"><img src={logo} width="65%"></img></a> 
            <div className='navbar__item'>
             <a href="http://localhost:3000/login" style={{textDecoration:"none"}}>Login</a>
            </div>
            <div className='navbar__item'>
            <a href="http://localhost:3000/register" style={{textDecoration:"none"}}>Signup</a>
            </div>
        </header>
        <div style={{backgroundColor:'#edfeff'}}>
            <div style={{textAlign:'center',fontSize:"medium"}}><b>Login</b> or <b>Register</b> to enter the whole new world of coding</div>
        </div>
   </>
    );
} 
