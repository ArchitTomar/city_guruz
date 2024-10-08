import React from "react";
import logo from './logo.png'; // Assuming the logo is moved to the src folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <li className="logo">
          <img style={{ width: "170px", position: "absolute", marginTop: "-30px", right: "200%" }} src={logo} alt="logo" />
        </li> 
        <ul>
          <li><button>Register/login</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
