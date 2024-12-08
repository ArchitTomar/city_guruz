import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">City Guruz</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#success">Success Stories</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#success">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
