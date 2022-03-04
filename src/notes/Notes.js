import React from "react";
import "./notes.css";

const Notes = () => {
  return (
  
      <div className="notes__header">
        <ul>
          <li>
            <h3  className="notes__heading">
              Notes
            </h3>
          </li>

          <li>
            <div className="search">
              <input type='text' placeholder="Search notes"/>
              <i class="fas fa-search"></i>
            </div>
          </li>

          {/* <li>
            <span className="add">
              <i class="fas fa-plus-circle"></i>
            </span>
          </li> */}
        </ul>
      </div>
    // </div>
  );
};

export default Notes;
