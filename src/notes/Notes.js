import React, { useState } from "react";
import "./notes.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Notes = ({ notes, setText, setIsUpdate, setId, setTitle }) => {
  //state for search Query
  const [search, setSearch] = useState("");

  // Delete note function
  const handleDelete = async (id) => {
    const movieDocRef = doc(db, "note", id);
    try {
      await deleteDoc(movieDocRef);
    } catch (err) {
      alert(err);
    }

    console.log(id);
  };

  const handleUpdate = async (id, title, text) => {
    setText(text);
    setIsUpdate(true);
    setTitle(title);
    setId(id);

    // console.table(id , text , title);
  };

  // A display function to shwo the notes
  const displayNotes = notes
    .filter((item) => {
      // search through the notes and use the filter method
      let searchStr = search.toLowerCase();
      let nameMatches = item.data.title.toLowerCase().includes(searchStr);
      // return the matched Query
      return nameMatches;
    })

    // then mapping the resullt with the search value
    .map((note, idx) => {
      return (
        <div className="notes">
          <div key={idx} className="notes__container">
            <div className="display__title">
              <div className="note__title">{note.data.title}</div>

              <DeleteIcon
                className="delete__icon"
                onClick={() => handleDelete(note.id)}
              />
              <EditIcon
                className="edit__icon"
                onClick={() =>
                  handleUpdate(note.id, note.data.title, note.data.text)
                }
              />
            </div>
            <div className="notes__content">
            <p dangerouslySetInnerHTML={{ __html: note.data.text }} />
              </div>
            {/* Using dangerousHtml property to remove the html tags and display plain text */}
          
          </div>
        </div>
      );
    });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="notes__header">
        <div className="xyx">
          <ul>
            <li>
              <h3 className="notes__heading">Notes</h3>
            </li>

            <li>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search notes"
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
                <i class="fas fa-search"></i>
              </div>
            </li>
          </ul>

          {notes.length > 0 ? displayNotes : ""}
        </div>
      </div>
    </>
  );
};

export default Notes;
