import React from "react";
import "./notes.css";

const Notes = () => {
  return (
    // <div className="notes__container">
      <div className="notes__header">
        <ul>
          <li>
            <h3  className="notes__heading">
              Notes
            </h3>
          </li>

          <li>
            <span className="search">
              <i class="fas fa-search"></i>
            </span>
          </li>

          <li>
            <span className="add">
              <i class="fas fa-plus-circle"></i>
            </span>
          </li>
        </ul>
      </div>
    // </div>
  );
};

export default Notes;
