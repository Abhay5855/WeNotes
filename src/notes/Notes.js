import React from "react";
import './notes.css'

const Notes = () => {
  return (
    <div className="notes__container">
      <header className="notes__header">
        <ul>
          <li>
            <h3 style={{color : '#fff'}} className="notes__heading">Notes</h3>
          </li>

          <li>
            <div>
              <i class="fas fa-search"></i>
            </div>
          </li>

          <li>
            <div>
            <i class="fas fa-plus-circle"></i>
            </div>
          </li>
        </ul>
      </header>
    </div>
  
  );
};

export default Notes;
