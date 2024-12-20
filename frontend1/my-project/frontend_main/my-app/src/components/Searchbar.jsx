import React from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ onSearch }) => {
  return (
    <div className="searchWrapper">
      <div className="searchBar">
        <span className="searchIcon">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="search by City or Keywords"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
