import React from "react";
import "./Placedetails.css";
import maps from "../images/maps.png";
import { useState } from "react";

const Placedetails = () => {
  const days= ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
              
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="place-details">
      <div className="left-column">
        <div className="description">
          <h2>Description</h2>
          <p
            style={
              isExpanded
                ? {}
                : {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 3,
                    textOverflow: "ellipsis",
                    color: "black",
                  }
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            illo at? Veritatis maxime nobis vel minima eligendi explicabo enim
            dolorum! Modi perspiciatis ratione obcaecati incidunt ea neque
            perferendis illo animi.
          </p>
          <button
            onClick={toggleText}
            style={{ marginTop: "10px", cursor: "pointer" }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          {/* <p style={{ color: "black" }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut? Nam iure esse pariatur possimus dolore recusandae in animi consequuntur voluptates laborum soluta non, cupiditate harum ullam illo veniam vitae!
          </p> */}
        </div>

        <div className="popular-times">
          <h2>Popular Times</h2>
          <div className="times-chart">
            <ul>
                {days.map((day,index) => (
                  <li key={index}>
                    <span>{day}</span>
                    <div
                      className="bar"
                      style={{ height: `${Math.random() * 100}px` }}
                    ></div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Map</h2>
        <a href="https://www.google.com/maps">
          <img src={maps} alt="maps_image" className="map-image"/>
        </a>
      </div>
    </div>
  );
};

export default Placedetails;
