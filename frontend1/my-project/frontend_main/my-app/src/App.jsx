import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Tourist from './components/Tourist'; 
import Student from './components/Student';
import Place from './components/Place';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tourist" element={<Tourist />} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


