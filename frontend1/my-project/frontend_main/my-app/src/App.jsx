import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Tourist from './pages/TouristM'; 
import Search from "./pages/Search";
import Cityboxes from "./components/Cityboxes";
import Placedetails from "./components/Placedetails";
import Student from './pages/Student';
// import Place from './components/Place';
import Login from './components/Login.js';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tourist" element={<Tourist />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cityboxes" element={<Cityboxes />} />
          <Route path="/Placedetails" element={<Placedetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


