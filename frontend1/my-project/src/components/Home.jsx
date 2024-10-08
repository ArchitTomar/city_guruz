import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CitiGuruz: Your Travel Guide</h1>
      <p>Are you a student looking for study or a tourist exploring the world?</p>
      <div className="btn-group">
        <Link to="/student">
          <button className="btn">I'm a Student</button>
        </Link>
        <Link to="/tourist">
          <button className="btn">I'm a Tourist</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
