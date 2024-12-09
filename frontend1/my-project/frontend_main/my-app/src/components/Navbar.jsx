import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <>
      <div className="navbar-tour">
        <div className="navbar-tour-logo">CityGuruz</div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Famous Places</a>
          </li>
          <li>
            <a href="/">Recommendations</a>
          </li>
          <li>
            <a href="/">Hidden Places</a>
          </li>
          <li>
            <a href="/">toadd</a>
          </li>
          <li>
            <a href="/">Search</a>
          </li>
        </ul>
        <button className="close-sidebar" onClick={closeSidebar}>
          ✖
        </button>
      </div>

      {isSidebarActive && (
        <div className="sidebar-backdrop" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
