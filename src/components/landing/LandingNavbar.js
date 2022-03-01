import React from "react";
import "./landingpage.css";

const LandingNavbar = () => {
  return (
    <nav className="landing__navbar">
      <ul>
        <li>
          <div className="landing__navbar__image"></div>
        </li>

        <li>
          <h3><span className="heading">WeNotes</span>, Write better, faster, smarter</h3>
        </li>

        <li>
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
