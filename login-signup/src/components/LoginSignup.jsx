import React from "react";
import person_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import "./LoginSignup.css"
import { useState } from "react";

function LoginSignup() {

  const [action ,setAction] = useState("Login");

  return(
  <div className="container">
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
        {action==="Login"?<div> </div>: <div className="input">
        <img src={person_icon} alt="" />
        <input type="text" placeholder="Name" />
      </div>}
      
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email Id" />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
    {
        action==="Sign Up"?<div></div>:<div className="forgot-password">
      Lost password?<span>Click Here!</span>
    </div>
    }
    
    <div className="submit-container">
      <div className={action==="Sign Up"?"submit":"gray"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
      <div className={action==="Login"?"submit":"gray"} onClick={()=>setAction("Login")}>Login</div>
    </div>
  </div>
  )
}

export default LoginSignup;
