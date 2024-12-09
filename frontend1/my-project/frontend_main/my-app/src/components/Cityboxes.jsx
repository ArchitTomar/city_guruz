import React from "react";
import "./Cityboxes.css";

const Cityboxes = ({ imageSrc, title, description }) => {
  return (
    <div className="Citybox">
      <img src={imageSrc} alt={title} className="place-image" />
      <div className="place-info">
        <h2 className="place-title">{title}</h2>
        <p className="place-description">{description}</p>
      </div>
    </div>
  );
};

export default Cityboxes;
