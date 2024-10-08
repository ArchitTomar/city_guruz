import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './main.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-content">
          <img className="logo" src={logo} alt="City Guruz Logo" />
          <button className="loginbtn">Register/Login</button>
        </div>
      </nav>
    );
  };
  
  const MainSect = () => {
    return (
      <div className="main">
        <h1>Welcome to CityGuruz: Your Travel Guide</h1>
        <p>Are you a student or a tourist exploring the world?</p>
        <div className="btn-group">
        <Link to="/Student">
                <button className="btn">
                   I'm a Student
                </button>
            </Link>
            <Link to="/Tourist">
                <button className="btn">
                    I'm a Tourist
                </button>
            </Link>
        </div>
      </div>
    );
  };
  
  const Main = () => {
    return (
    <div className='app' style={{ backgroundImage: 'url(https://i.pinimg.com/originals/d8/d4/4b/d8d44bb3444f13d55057c39401221a65.gif)'}}>
  
        <Navbar />
        <MainSect />
    </div>
      
    );
  };

  export default Main;
  