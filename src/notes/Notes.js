import React, { useState } from "react";
import "./notes.css";

const Notes = ({ notes, filter, setFilter }) => {
  const [search, setSearch] = useState("");

 
  // const displayNotes = filter.map((note, idx) => {
  //   return (
  //     <div className="notes">
  //       <div key={idx} className="notes__container">
  //         <p className="note__title">{note.data.title}</p>

  //         <span className="note__date">
  //           {/* {new Date(note.data.timestamp.toDate()).toDateString()} */}
  //         </span>
  //       </div>
  //     </div>
  //   );
  // });

  const displayNotes = notes.filter((item) => {

    let searchStr = search.toLowerCase();
      let nameMatches = item.data.title.toLowerCase().includes(searchStr);

      return nameMatches;

         
  }).map((note, idx) => {
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
    // let value = e.target.value.toLowerCase();

    // setSearch(value);

    // let res = [];

    // res = notes.filter((data) => {
    //   let searchStr = search.toLowerCase();
    //   let nameMatches = data.data.title.toLowerCase().includes(searchStr);

    //   return nameMatches;
    // });

    // setFilter(res);

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

        {/* <div></div> */}
        {notes.length > 0 ? displayNotes : ""}
      </div>

      {/* Notes */}
    </>
  );
};

export default Notes;
