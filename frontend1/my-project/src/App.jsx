import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Tourist from './components/Tourist';
import Student from './components/Student';
import Todo from "./components/todo"; 
import Car from "./components/career";
import Top from "./components/tips";
import Suc from "./components/success";
import Caf from "./components/cafe";

import './App.css';  // Your global CSS styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourist" element={<Tourist />} />
          <Route path="/student" element={<Student />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/career" element={<Car/>}/>
        <Route path="/tips" element={<Top/>}/>
        <Route path="/success" element={<Suc/>}/>
        <Route path="/cafe" element={<Caf/>}/>
        </Routes>
      </div>
    </Router>)
    
  ;
}
export default App;
