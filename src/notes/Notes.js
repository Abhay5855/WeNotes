import React, { useState } from "react";
import "./notes.css";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Notes = ({ notes }) => {
  //state for search Query
  const [search, setSearch] = useState("");

  
  console.log(notes);

  const handleDelete = () => {

     
  }

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
    .map((note) => {
      return (
        <div className="notes">
          <div key={note.id} className="notes__container">
            <p className="note__title">{note.data.title}

           
            
            </p>
             
            <DeleteIcon className="delete__icon" onClick={() => handleDelete()}/>
            <EditIcon className="edit__icon" />
            

            <span className="note__date">
              {/* {new Date(note.data.timestamp.toDate()).toDateString()} */}

            </span>
              {/* Using dangerousHtml property to remove the html tags and display plain text */}
                {/* <span dangerouslySetInnerHTML={{ __html: note.data.text }} /> */}
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
    </>
  );
};

export default Notes;
