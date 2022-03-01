
import './App.css';
import LandingPage from './components/landing/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main_components/Main';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
      <Routes>
        <Route path='/notes' element={<Main />}></Route>
      </Routes>
      </BrowserRouter>
      
      
   
    </div>
  );
}

export default App;
