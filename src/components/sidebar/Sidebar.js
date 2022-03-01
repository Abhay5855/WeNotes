import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__elements">
        <div className="sidebar__items">
          <i class="far fa-sticky-note"></i>

          <div>Notes</div>
        </div>

        {/* <div className="sidebar__items">
          <i class="far fa-star"></i>
          <div>Favorites</div>
        </div> */}

        <div className="sidebar__items">
          <i class="fas fa-hashtag"></i>
          <div>Tags</div>
        </div>

        <div className="sidebar__items">
          <i class="fas fa-th-list"></i>
          <div>Todos</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
