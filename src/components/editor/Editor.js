import React, { useCallback, useState } from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";
import { debounce } from "lodash";

const Editor = () => {
  //state to add text inside of editor
  const [text, setText] = useState("");
  

  //using the useCallback hook to pass the debounce val and time delay of 1sec.
  const deb = useCallback(
    debounce((val) => setText(val), 1000),

    []
  );
   
  // handle function when text changes
  const handleChange = (val) => {
    deb(val);
  };

  return (
    <div className="editor__container">
      <div className="editor">
        {/* Using dangerousHtml property to remove the html tags and display plain text */}
        <h2 dangerouslySetInnerHTML={{ __html: text }} />
        <Editor_Format />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Editor;
