import React, { useEffect, useState } from "react";
// import Sidebar from "../sidebar/Sidebar";
import Editor from "../editor/Editor";
import Notes from "../../notes/Notes";

import Tags from "../tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from "../../firebase/firebase";

import { query, onSnapshot , collection, orderBy} from "firebase/firestore";


import "./main.css";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const [text , setText] = useState("");

  const [title , setTitle] = useState("");

  const [isUpdate , setIsUpdate] = useState(false);

  const [id , setId] = useState(null);




  // get all the notes added iside the effect
  useEffect(() => {
    const GetAllNotes = () => {
      
      const allNotes = query(collection(db, "note"), orderBy('timestamp'))

      onSnapshot(allNotes, (QuerySnapshot) => {
       
        setNotes(
          QuerySnapshot.docs.map((doc) => ({
            id : doc.id,
            data: doc.data(),
          }))
        );
      });
    };

    GetAllNotes();
  }, []);

  console.log(notes);
  return (
    <div className="main__container">
      <div className="main__items">
        <Router>
         
          <Switch>
            <Route path="/notes">
              <Notes notes={notes}  setText={setText}  setTitle={setTitle}  setIsUpdate={setIsUpdate} setId={setId}/>

              <Editor notes={notes} text={text} setText={setText}  title={title} setTitle={setTitle} setIsUpdate={setIsUpdate}  isUpdate={isUpdate} id={id}/>
            </Route>
           
           
            <Route path="/tags">
              <Tags />
            </Route>
          </Switch>
        </Router>
      </div>

     
    </div>
  );
};

export default Main;
