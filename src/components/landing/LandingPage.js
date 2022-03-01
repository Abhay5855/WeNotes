import React from "react";
import "./landingpage.css";
import LandingNavbar from "./LandingNavbar";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />

      <main className="landingpage__container">
        {/* <h3>
          <span className="heading">WeNotes</span>, Write better, faster,
          smarter
        </h3> */}
      </main>
    </div>
  );
};

export default LandingPage;
