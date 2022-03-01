
import './App.css';
import LandingPage from './components/landing/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
      </BrowserRouter>
      
      
   
    </div>
  );
}

export default App;
