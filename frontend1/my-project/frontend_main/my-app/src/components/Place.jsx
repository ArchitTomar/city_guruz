import React from "react";
import agrataj from "../videos/agrataj.png";
import "./Place.css";
import Placedetails from "./Placedetails";

const Place = () => {
  return (
    <div className="main_place">
      <div className="grid">
        <div className="main_box">
          <img src={agrataj} alt="Main Box" />
        </div>
        <div className="column">
          <div className="small_box">
            <img src={agrataj} alt="Small Box" />
          </div>
          <div className="large_box">
            <img src={agrataj} alt="Large Box" />
          </div>
        </div>
        <div className="column">
          <div className="small_box">
            <img src={agrataj} alt="Small Box" />
          </div>
          <div className="large_box">
            <img src={agrataj} alt="Large Box" />
          </div>
        </div>
        <div className="long_box">
          <img src={agrataj} alt="Long Box" />
        </div>
      </div>
      <h1>PLACE_NAME</h1>
      <h2>⟟CITY_NAME</h2>
      <div className="tourist-container">
      <h3>#Hashtags</h3>
      <div className="hashtags">
        <span className="hashtag">#Adventure</span>
        <span className="hashtag">#Culture</span>
        <span className="hashtag">#Foodie</span>
        <span className="hashtag">#Nature</span>
        <span className="hashtag">#Historical</span>
        <span className="hashtag">#Relaxation</span>
      </div>
    </div>
  <Placedetails/>
  </div>
    
  );
};

export default Place;
