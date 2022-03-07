import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__elements">
        <Link to="/notes" style={{ textDecoration: "none" }}>
          <div className="sidebar__items">
            <i class="far fa-sticky-note"></i>

            <div>Notes</div>
          </div>
        </Link>

        <Link to="/tasks" style={{ textDecoration: "none" }}>
          <div className="sidebar__items">
            <i class="fas fa-th-list"></i>
            <div>Tasks</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
