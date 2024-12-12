import React from "react";
import { FaBook, FaChalkboardTeacher, FaHeadset, FaLaptop, FaGraduationCap, FaGlobe, FaLightbulb, FaTools, FaUserShield } from "react-icons/fa";
import "./studenthome.css"; // Importing the CSS file
import { Link } from "react-router-dom";


const Stud = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="headerContent">
          <h1 className="logo">EDUCTO</h1>
          <nav className="nav">
            <a href="#features" className="navLink">Features</a>
            <a href="#courses" className="navLink">Courses</a>
            <a href="#about" className="navLink">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <div className="heroTextContainer">
            <h2 className="heroTitle">Looking to Explore Your Knowledge</h2>
            <p className="heroText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, magna et vehicula luctus, nulla justo vehicula lorem.
            </p>
            <div className="heroButtons">
              <a href="#pb" className="primaryButton">Join Courses</a>
              <a href="#sb" className="secondaryButton">Watch Free</a>
            </div>
          </div>
          <div className="heroImageBox">
            <img
              src="https://media.istockphoto.com/id/486325400/photo/teacher-asking-her-students-a-question.jpg?s=612x612&w=0&k=20&c=gA6YxA-uGplqjyZfTKBuOcAXEZz7S_KqgGgEGl8YztQ="
              alt="Education illustration"
              className="heroImage"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="sectionTitle">Our Special Features</h2>
        <div className="featureItems">
        {features.map(({ id, icon, title, description, link }) => (
        <Link key={id} to={link} className="featureItem">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        </Link>
))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="thoughtItems">
        <h2 className="courseTitle">Thoughts About Education</h2>
        <div className="thoughtItems">
          <div className="thoughtItem">
            <p className="thoughtText">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="thoughtAuthor">- Nelson Mandela</p>
          </div>
          <div className="thoughtItem">
            <p className="thoughtText">
              "The beautiful thing about learning is that no one can take it away from you."
            </p>
            <p className="thoughtAuthor">- B.B. King</p>
          </div>
          <div className="thoughtItem">
            <p className="thoughtText">
              "An investment in knowledge pays the best interest."
            </p>
            <p className="thoughtAuthor">- Benjamin Franklin</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 EDUCTO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Features data with icons and links
const features = [
  { 
    id: 1, 
    icon: <FaBook />, 
    title: "Library", 
    description: "Explore an extensive collection of books and resources.", 
    link: "https://example.com/library" 
  },
  { 
    id: 2, 
    icon: <FaChalkboardTeacher />, 
    title: "Cafe", 
    description: "Find the best study-friendly cafes around you.", 
    link: "/cafe" 
  },
  { 
    id: 3, 
    icon: <FaLightbulb />, 
    title: "Exhibition Schedule", 
    description: "Stay updated with upcoming educational exhibitions.", 
    link: "https://example.com/exhibition-schedule" 
  },
  { 
    id: 4, 
    icon: <FaTools />, 
    title: "To-Do List", 
    description: "Organize and manage your daily tasks efficiently.", 
    link:"/todo"
  },
  { 
    id: 5, 
    icon: <FaHeadset />, 
    title: "Chatbot", 
    description: "Get instant assistance with our AI-powered chatbot.", 
    link: "https://example.com/chatbot" 
  },
  { 
    id: 6, 
    icon: <FaGraduationCap />, 
    title: "Career Path Finder", 
    description: "Discover the best career options tailored to you.", 
    link: "/career" 
  },
  { 
    id: 7, 
    icon: <FaLightbulb />, 
    title: "Tips for Students", 
    description: "Learn effective strategies to excel in your studies.", 
    link: "/tips" 
  },
  { 
    id: 8, 
    icon: <FaUserShield />, 
    title: "Success Stories", 
    description: "Get inspired by stories of successful individuals.", 
    link: "/success" 
  },
  { 
    id: 9, 
    icon: <FaGlobe />, 
    title: "Competitive Exam Info", 
    description: "Access essential details about competitive exams.", 
    link: "https://example.com/competitive-exams" 
  },
];


export default Stud;
