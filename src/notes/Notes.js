import React from "react";
import "./notes.css";

const Notes = ({ notes }) => {

      const [search , setSearch] = useState("");



     const displayNotes = notes.map((note , idx) => {


               return (

                <div className="notes">

                
                
                <div key={idx} className="notes__container">

                  <p className="note__title">{note.data.title}</p>

                  <span className="note__date">{(new Date(note.data.timestamp.toDate())).toDateString()}</span>

                </div>

                </div>
               )
     })

     
  return (
    <>
      <div className="notes__header">
        <ul>
          <li>
            <h3 className="notes__heading">Notes</h3>
          </li>

          <li>
            <div className="search">
              <input type="text" placeholder="Search notes" value={search} onChange={(e) => setSearch(e.target.value)}/>
              <i class="fas fa-search"></i>
            </div>
          </li>
        </ul>

        {/* <div></div> */}

        {displayNotes}

      </div>

      {/* Notes */}
    </>
  );
};

export default Notes;
