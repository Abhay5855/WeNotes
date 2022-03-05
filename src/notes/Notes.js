import React, { useState } from "react";
import "./notes.css";

const Notes = ({ notes , isLoading}) => {
  const [search, setSearch] = useState("");

  const displayNotes = notes
    .filter((item) => {
      // search through the notes and use the filter method
      let searchStr = search.toLowerCase();
      let nameMatches = item.data.title.toLowerCase().includes(searchStr);
      // return the matched Query
      return nameMatches;

      // then mapping the resullt with the search value
    })
    .map((note, idx) => {
      return (
        <div className="notes">
          <div key={idx} className="notes__container">
            <p className="note__title">{note.data.title}</p>

            <span className="note__date">
              {/* {new Date(note.data.timestamp.toDate()).toDateString()} */}
            </span>
          </div>
        </div>
      );
    });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>

      {isLoading && <p>{isLoading}</p>}
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

        {/* <div></div> */}
        {notes.length > 0 ? displayNotes : ""}
      </div>

      {/* Notes */}
    </>
  );
};

export default Notes;
