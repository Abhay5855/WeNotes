import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Editor from "../editor/Editor";
import Notes from "../../notes/Notes";

const Main = () => {
  return (
    <div>
      <Sidebar />
      <Notes />
      <Editor />
    </div>
  );
};

export default Main;
