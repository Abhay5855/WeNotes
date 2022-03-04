import React, {useState} from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";


const Editor = () => {



  //state to add text inside of editor
  const [text , setText] = useState('');



  const handleChange = (val) => {

       
          setText(val);

          console.log(text);
  }

    
  return (
    <div className="editor__container">
      <div className="editor">
        <Editor_Format />
        <ReactQuill modules={modules} formats={formats} value={text} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Editor;
