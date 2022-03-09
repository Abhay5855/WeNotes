import React from "react";
import "./landingpage.css";
import {Link} from 'react-router-dom'

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
        
         <Link to='/notes'>
         <li className="auth">
          <p className="login">Login</p>
        </li>
         </Link>
      

        <li>
          <button className="landing__navbar__btn">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
