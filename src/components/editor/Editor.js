import React, {useCallback, useState} from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";
import {debounce} from 'lodash';


const Editor = () => {



  //state to add text inside of editor
  const [text , setText] = useState('');

   const deb = useCallback(

    debounce((val) => setText(val) ,1000),

    []

   )
  
  const handleChange = (val) => {

     
     const txt =   deb(val);
     console.log(txt);

           

          
  }

    
  return (
    <div className="editor__container">
      <div className="editor">

      <div dangerouslySetInnerHTML={{__html: text}} />
        <Editor_Format />
        <ReactQuill modules={modules} formats={formats} value={text} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Editor;
