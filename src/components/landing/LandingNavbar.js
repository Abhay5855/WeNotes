import React from "react";
import "./landingpage.css";

const LandingNavbar = () => {
  return (
    <nav className="landing__navbar">
      <ul>
        <li>
          <div className="landing__navbar__image"></div>
        </li>
       
       <li className="logo">
           <h2 className="heading">WeNotes</h2>
       </li>
        

        <li className="auth">
          <p className="login">Login</p>
        </li>

        <li>
          <button className="landing__navbar__btn">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
