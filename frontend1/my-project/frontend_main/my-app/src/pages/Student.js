import React, { useState } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaHeadset,
  FaGraduationCap,
  FaLightbulb,
  FaTools,
  FaUserShield,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./css files/Student.css";

const Student = () => {
  // State for city search functionality
  const [cityQuery, setCityQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  // List of cities for the search dropdown
  const cities = [
    "Karnatak",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Kerala",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Boston",
    "Seattle",
    "Denver",
    "Miami",
    "Austin",
  ];

  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for city search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setCityQuery(query);
    setFilteredCities(
      cities.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Handle city click
  const handleCityClick = (city) => {
    // Map cities to specific routes
    const cityRoutes = {
      Mumbai: "/mumbai",
      Delhi: "/delhi",
      Chennai: "/chennai",
    };

    // Navigate to the corresponding route
    if (cityRoutes[city]) {
      navigate(cityRoutes[city]);
    } else {
      alert(`No page available for the selected city: ${city}`);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="studentHeader">
        <div className="studentHeaderContent">
          <h1 className="studentLogo">CityGuruz</h1>
          <nav className="studentNav">
            <a href="#features" className="studentNavLink">
              Features
            </a>
            <a href="#author" className="studentNavLink">
              Author
            </a>
            <a href="#about" className="studentNavLink">
              About
            </a>
          </nav>
          {/* Login Button */}
          <button className="loginButton">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="studentHero">
        <div className="studentHeroContent">
          <div className="studentHeroTextContainer">
            <h2 className="studentHeroTitle">Looking to Explore Your Knowledge</h2>
            <p className="studentHeroText">
              Search for universities in your desired city and find the best fit
              for your future!
            </p>

            {/* Search Bar */}
            <div className="searchBarContainer">
              <input
                type="text"
                placeholder="Search for a city..."
                value={cityQuery}
                onChange={handleSearch}
                className="searchBar"
              />
              {cityQuery && (
                <ul className="dropdownList">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                      <li
                        key={index}
                        className="dropdownItem"
                        onClick={() => handleCityClick(city)} // Attach onClick event
                      >
                        {city}
                      </li>
                    ))
                  ) : (
                    <li className="dropdownItem">No results found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
          <div className="studentHeroImageBox">
            <img
              src="https://media.istockphoto.com/id/486325400/photo/teacher-asking-her-students-a-question.jpg?s=612x612&w=0&k=20&c=gA6YxA-uGplqjyZfTKBuOcAXEZz7S_KqgGgEGl8YztQ="
              alt="Education illustration"
              className="studentHeroImage"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="studentFeatures">
        <h2 className="studentSectionTitle">Our Special Features</h2>
        <div className="studentFeatureItems">
          {features.map(({ id, icon, title, description, link }) => (
            <Link key={id} to={link} className="studentFeatureItem">
              <div className="studentIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Student Author Section */}
      <section id="author" className="studentThoughtItems">
        <h2 className="studentCourseTitle">Thoughts About Education</h2>
        <div className="studentThoughtItems">
          <div className="studentThoughtItem">
            <p className="studentThoughtText">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="studentThoughtAuthor">- Nelson Mandela</p>
          </div>
          <div className="studentThoughtItem">
            <p className="studentThoughtText">
              "The beautiful thing about learning is that no one can take it away from you."
            </p>
            <p className="studentThoughtAuthor">- B.B. King</p>
          </div>
          <div className="studentThoughtItem">
            <p className="studentThoughtText">
              "An investment in knowledge pays the best interest."
            </p>
            <p className="studentThoughtAuthor">- Benjamin Franklin</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="studentFooter">
        <p>&copy; 2024 EDUCTO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Features data with icons and links
const features = [
  {
    id: 1,
    icon: <FaChalkboardTeacher />,
    title: "Cafe",
    description: "Find the best study-friendly cafes around you.",
    link: "/cafe",
  },
  {
    id: 2,
    icon: <FaTools />,
    title: "To-Do List",
    description: "Organize and manage your daily tasks efficiently.",
    link: "/todo",
  },
  {
    id: 3,
    icon: <FaHeadset />,
    title: "Chatbot",
    description: "Get instant assistance with our AI-powered chatbot.",
    link: "https://example.com/chatbot",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Career Path Finder",
    description: "Discover the best career options tailored to you.",
    link: "/career",
  },
  {
    id: 5,
    icon: <FaLightbulb />,
    title: "Tips for Students",
    description: "Learn effective strategies to excel in your studies.",
    link: "/tips",
  },
  {
    id: 6,
    icon: <FaUserShield />,
    title: "Success Stories",
    description: "Get inspired by stories of successful individuals.",
    link: "/success",
  },
];

export default Student;
