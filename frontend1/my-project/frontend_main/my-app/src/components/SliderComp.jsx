import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComp.css";

import agrataj from "../images/agrataj.png";
import Nasik from "../images/Nasik.jpg";
import kashmir from "../images/kashmir.png";
import goa from "../images/goa.png";
import mumbai from "../images/mumbai.png";

const destinations = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQTyfqkR-svqrMYgMzLG8yyzuSZg3oLD1qVL_BvSptenc4Sqk8pA5zLhWj0bYeiGLy_AiaVofn5yhTx0RIMPu2GxGC1JUJYjyVF0g8rZQ",
    title: "Jaipur, India",
  },
  { image: kashmir, title: "Kashmir, India" },
  { image: mumbai, title: "Mumbai, India" },
  { image: Nasik, title: "Nasik, India" },
  { image: goa, title: "Goa, India" },
  { image: agrataj, title: "Agra, India" },
];

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <h2>Famous Palces to visit</h2>
      <p>Top destinations for your next holiday</p>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div key={index} className="slide-item">
            <img
              src={destination.image}
              alt={destination.title}
              className="destination-image"
            />
            <div className="destination-title">{destination.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
