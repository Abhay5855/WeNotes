import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Editor from "../editor/Editor";
import Notes from "../../notes/Notes";
import Tasks from "../tasks/Tasks";
import "../sidebar/sidebar.css";
import Tags from "../tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { query, onSnapshot , collection} from "firebase/firestore";

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
      
      const allNotes = query(collection(db, "note"));

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
          <Sidebar />
          <Switch>
            <Route path="/notes">
              <Notes notes={notes}  setText={setText}  setTitle={setTitle}  setIsUpdate={setIsUpdate} setId={setId}/>
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
          </Switch>
        </Router>
      </div>

      <Editor text={text} setText={setText}  title={title} setTitle={setTitle}  isUpdate={isUpdate} id={id}/>
    </div>
  );
};

export default Main;
