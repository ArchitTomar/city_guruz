import React, { useState, useEffect } from "react";
import img from "../images/agra_exq.jpeg";
import "./Cityboxes.css";

const Cityboxes = ({ searchValue }) => {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Places")
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched data:", result); 
        setData(result);
        setFilteredData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.City.toLowerCase().includes(searchValue.toLowerCase()) || 
      item.Place.toLowerCase().includes(searchValue.toLowerCase()) ||
      (item.keyword && item.keyword.toLowerCase().includes(searchValue.toLowerCase())) 
    );
    setFilteredData(filtered);
  }, [searchValue, data]);

  return (
    <div className="cityboxes">
      {filteredData.map((item, index) => (
        <div key={index} className="citybox">
          <div className="cityboxContent">
            <h3>{item.Place}</h3>
            <p>{item.Place_desc}</p>
            <p><strong>City:</strong> {item.City}</p>
          </div>
          <img src={img} alt="city" className="imageForCitybox" />
        </div>
      ))}
    </div>
  );
};

export default Cityboxes;
