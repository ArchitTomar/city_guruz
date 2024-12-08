import React from "react";
import { FaBook, FaChalkboardTeacher, FaHeadset, FaLaptop, FaGraduationCap, FaGlobe, FaLightbulb, FaTools, FaUserShield } from "react-icons/fa";
import "./Student.css"; // Importing the CSS file

const Student = () => {
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
          {features.map(({ id, icon, title, description }) => (
            <div key={id} className="featureItem">
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="thoughtItems">
        <h2 className="sectionTitle">Thoughts About Education</h2>
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

// Features data with icons
const features = [
  { id: 1, icon: <FaBook />, title: "Education Services", description: "Comprehensive learning resources to boost your skills." },
  { id: 2, icon: <FaChalkboardTeacher />, title: "Expert Mentors", description: "Guidance from experienced professionals." },
  { id: 3, icon: <FaHeadset />, title: "24/7 Support", description: "Support throughout your learning journey." },
  { id: 4, icon: <FaLaptop />, title: "Online/Offline Classes", description: "Flexibility to learn anywhere, anytime." },
  { id: 5, icon: <FaGraduationCap />, title: "Certification Courses", description: "Get certified in various fields." },
  { id: 6, icon: <FaGlobe />, title: "Global Access", description: "Access from anywhere in the world." },
  { id: 7, icon: <FaLightbulb />, title: "Innovative Learning", description: "Creative ways to learn new concepts." },
  { id: 8, icon: <FaTools />, title: "Practical Tools", description: "Hands-on tools for real-world learning." },
  { id: 9, icon: <FaUserShield />, title: "Safe Environment", description: "Learn in a safe and secure platform." },
];

export default Student;
