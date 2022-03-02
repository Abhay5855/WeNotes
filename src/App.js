import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./components/main_components/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path='/notes'>
            <Main />
          </Route>
        
        </Switch>
      </Router>

      {/* 
      <Router>

      
             
        
         <Switch>
             
         <Main />

         </Switch>
       
         </Router>
      */}
    </div>
  );
}

export default App;
