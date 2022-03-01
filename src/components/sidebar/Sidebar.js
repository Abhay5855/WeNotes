import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__elements">
        <div>
          <i class="far fa-sticky-note"></i>

          <h3>Notes</h3>
        </div>

        <div>
          <i class="far fa-star"></i>
          <h3>Favorites</h3>
        </div>

        <div>
          <i class="fas fa-hashtag"></i>
          <h3>Tags</h3>
        </div>

        <div>
        <i class="fas fa-th-list"></i>
         <h3>Todos</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
