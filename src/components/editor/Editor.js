import React, { useCallback, useState } from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";
import { debounce } from "lodash";
import { db } from "../../firebase/firebase";
import { query, onSnapshot } from "firebase/firestore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Editor = () => {
  //state to add text inside of editor
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [addingNote, setAddingNote] = useState(false);

  //using the useCallback hook to pass the debounce val and time delay of 1sec.
  const deb = useCallback(
    debounce((val) => setText(val), 1000),

    []
  );

  // handle function when text changes
  const handleChange = (val) => {
    deb(val);
  };

  // handle submit button
  const handleAdd = async () => {
    setAddingNote(true);
    console.log("added");

    await addDoc(collection(db, "note"), {
      title: title,
      text: text,
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // Disable condition if text is empty
  const disabled = !title;

  return (
    <div className="editor__container">
      <div className="editor">
        {/* Using dangerousHtml property to remove the html tags and display plain text */}
        {/* <h2 dangerouslySetInnerHTML={{ __html: text }} /> */}

        <button
          disabled={disabled}
          className="submit__note"
          onClick={handleAdd}
        >
          Submit Note
        </button>
        <input
          type="text"
          placeholder="Enter your note title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

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
