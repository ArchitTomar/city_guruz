import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css files/TouristM.css";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import SliderComp from "../components/SliderComp";

import Navbar from "../components/Navbar";
import water from "../videos_tourist/water.mp4";
import nature from "../videos_tourist/nature.mp4";
import sacred from "../videos_tourist/sacred.mp4";
import road from "../videos_tourist/road.mp4";
import adventure from "../videos_tourist/adventure.mp4";

const TouristM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      video: water,
      title: "Serene Beauty",
      description:
        "Immerse yourself in the calming allure of pristine waters. From tranquil lakes to cascading waterfalls, each drop tells a story of beauty. Dive in and let the refreshing essence of water rejuvenate your spirit.",
    },
    {
      video: adventure,
      title: "Adventure Awaits",
      description:
        "Step into a world where thrill meets wonder, offering heart-racing experiences. Climb rugged mountains, dive into the unknown, or chase the winds on daring escapades. Adventure awaits you at every turn.",
    },
    {
      video: nature,
      title: "Nature Bliss",
      description:
        "Reconnect with the untouched beauty of lush forests and vibrant ecosystems. Let the symphony of chirping birds, rustling leaves, and gentle breezes soothe your senses. Nature welcomes you with open arms to its tranquil embrace.",
    },
    {
      video: sacred,
      title: "Spiritual Charm",
      description:
        "Discover serene places that echo stories of faith and devotion. Marvel at ancient temples, sacred landscapes, and timeless rituals that inspire inner peace. Let your soul connect with the divine in a journey of tranquility.",
    },
    {
      video: road,
      title: "Dreamy Escapes",
      description:
        "The open road beckons, leading to untold adventures and scenic vistas. Cruise through winding paths, endless highways, or rugged trails that ignite your wanderlust. Every mile brings a new story waiting to unfold.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="touristmain">
      <Navbar />
      <div className="slider">
        <div className="blurred-background">
          <video
            key={slides[currentSlide].video}
            autoPlay
            muted
            loop
            className="background-blur-video"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <video
            key={slides[currentSlide].video}
            autoPlay
            muted
            loop
            className="foreground-video"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
          <div className="text-overlay">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <h1
        style={{ textAlign: "center", marginTop: "50px", fontWeight: "bolder" }}
      >
        Where are you off to?
      </h1>
      <Searchbar />
      <section>
        <SliderComp />
      </section>
      <div className="button-container">
        <Link to="/components/Navbar">
          <button className="button">Explore more</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default TouristM;
