import React from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";

const Editor = () => {
 
  return (
    <div className="editor__container">
      <div className="editor">
        <Editor_Format />
        <ReactQuill
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default Editor;
