import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Editor from "../editor/Editor";
import Notes from "../../notes/Notes";
import Tasks from "../tasks/Tasks";
import "../sidebar/sidebar.css";
import Tags from "../tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingNavbar from "../landing/LandingNavbar";
import LandingPage from "../landing/LandingPage";

const Main = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/notes">
            <Notes />
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
  );
};

export default Main;
