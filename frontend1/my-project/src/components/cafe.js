import React, { useState, useEffect } from "react";
import "./cafe.css";
import { FaHome, FaCoffee, FaBlog, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";

function Caf() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="cafe-app">
      <div className="cafe-sidebar">
        <div className="cafe-logo">Cafe App</div>
        <div className="cafe-nav">
          <ul>
            <li><FaHome /> Home</li>
            <li><FaCoffee /> Menu</li>
            <li><FaBlog /> Blog</li>
            <li><FaShoppingCart /> Cart</li>
            <li><FaPhoneAlt /> Contact</li>
          </ul>
        </div>
        <div className="cafe-social">
          <span><i className="fa fa-facebook"></i></span>
          <span><i className="fa fa-twitter"></i></span>
          <span><i className="fa fa-instagram"></i></span>
        </div>
      </div>
      <div className="cafe-content">
        <div className="cafe-header">
          <h1>Welcome to Our Cafe</h1>
          <p>Your go-to place for amazing coffee</p>
          <button>Explore Menu</button>
        </div>
        <div className="cafe-main">
          <h2>Our Products</h2>
          <div className="cafe-products">
            {/* Product Cards */}
            <div className="cafe-product">
              <img src="https://img.freepik.com/premium-photo/vintage-style-coffeeshop-photo_891428-384.jpg" alt="Coffee 1" />
              <h3>Espresso</h3>
              <p>A bold coffee experience</p>
            </div>
            <div className="cafe-product">
              <img src="https://img.freepik.com/fotos-premium/cafe-boemio_891428-837.jpg" alt="Coffee 2" />
              <h3>Latte</h3>
              <p>Smooth and creamy coffee</p>
            </div>
            <div className="cafe-product">
              <img src="https://i.pinimg.com/originals/25/fc/a6/25fca6b2912d82133144eb426b08fdfd.jpg" alt="Coffee 3" />
              <h3>Mocha</h3>
              <p>Chocolatey delight with coffee</p>
            </div>
          </div>
        </div>
        <div className="cafe-footer">
          <p>&copy; 2024 Cafe App</p>
          <p>
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
      <button
        className={`scroll-to-top ${scrollTopVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}

export default Caf;
