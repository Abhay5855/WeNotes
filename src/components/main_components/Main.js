import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Editor from "../editor/Editor";
import Notes from "../../notes/Notes";
import '../sidebar/sidebar.css'

const Main = () => {
  return (
    <div>
      <div className="sidebar__container">

      <Sidebar />

      </div>
      
      <Notes />
      <Editor />
    </div>
  );
};

export default Main;
