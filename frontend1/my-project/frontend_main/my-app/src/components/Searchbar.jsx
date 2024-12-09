import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.name.toLowerCase().includes(value));
    setData(res);
    if (value === "") {
      setData([]);
    }
  };
  return (
    <div className="wrapper">
      <div className="searchBar">
        <span className="search-icon">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="search by City or Keywords"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <div className="searchResult">
        {data.map((d, i) => (
          <div key={i}>{d.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
