import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Tourist from './components/Tourist';
import Student from './components/Student';
import './App.css';  // Your global CSS styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourist" element={<Tourist />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
