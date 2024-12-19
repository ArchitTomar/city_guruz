import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Tourist from './pages/TouristM'; 
import Student from './pages/Student';
import Todo from './pages/studentfeature/todo';
import Cafe from './pages/studentfeature/cafe';
import Tips from './pages/studentfeature/tips';
import Suc from './pages/studentfeature/success';
import Car from './pages/studentfeature/career';
import Mumbai from "./pages/studentfeature/mumbai";
// import Place from './components/Place';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tourist" element={<Tourist />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/success" element={<Suc />} />
          <Route path="/career" element={<Car />} />
          <Route path="/mumbai" element={<Mumbai />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


