import React, { useCallback, useState } from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import EditorFormat, { modules, formats } from "../../utils/EditorFormat";
import { debounce } from "lodash";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

const Editor = ({ text, setText, isUpdate, id, title, setTitle , setIsUpdate}) => {
 
  const [addingNote, setAddingNote] = useState(false);

  //using the useCallback hook to pass the debounce val and time delay of 1sec.
  const deb = useCallback(

    () => debounce((val) => setText(val), 1000),

    [setText]
  );

  // handle function when text changes
  const handleChange = (val) => {
    deb(val);
  };

  // handle submit button
  const handleAdd = async () => {
    setAddingNote(!addingNote);

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

    // Empty the results
    setText("");
    setTitle("");
  };

  // Disable condition if text is empty
  const disabled = !text || !title;

  const handleSubmit = async () => {
    const updateRef = doc(db, "note", id);
    try {
      await updateDoc(updateRef, {
        title: title,
        text: text,
      });
    } catch (err) {
      alert(err);
    }

    setText("");
    setTitle("");
    setIsUpdate(false);

  };

  return (
    <div className="editor__container">
      <div className="editor">
        {/* Using dangerousHtml property to remove the html tags and display plain text */}
        {/* <h2 dangerouslySetInnerHTML={{ __html: text }} /> */}

        {isUpdate ? (
          <button
            // disabled={disabled}
            className="submit__note"
            onClick={() => handleSubmit()}
          >
            Update Note
          </button>
        ) : (
          <button
            disabled={disabled}
            className="submit__note"
            onClick={() => handleAdd()}
          >
            Submit Note
          </button>
        )}

        <input
          type="text"
          placeholder="Enter your note title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <EditorFormat />
        <ReactQuill
          placeholder="Start Typing.."
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
