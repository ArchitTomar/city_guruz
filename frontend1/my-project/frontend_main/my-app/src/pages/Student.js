import React from "react";
import { FaBook, FaChalkboardTeacher, FaHeadset, FaLaptop, FaGraduationCap, FaGlobe, FaLightbulb, FaTools, FaUserShield } from "react-icons/fa";
import "./css files/Student.css"; // Importing the CSS file
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="studentHeader">
        <div className="studentHeaderContent">
          <h1 className="studentLogo">EDUCTO</h1>
          <nav className="studentNav">
            <a href="#features" className="studentNavLink">Features</a>
            <a href="#courses" className="studentNavLink">Courses</a>
            <a href="#about" className="studentNavLink">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="studentHero">
        <div className="studentHeroContent">
          <div className="studentHeroTextContainer">
            <h2 className="studentHeroTitle">Looking to Explore Your Knowledge</h2>
            <p className="studentHeroText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, magna et vehicula luctus, nulla justo vehicula lorem.
            </p>
            <div className="studentHeroButtons">
              <a href="#pb" className="studentPrimaryButton">Join Courses</a>
              <a href="#sb" className="studentSecondaryButton">Watch Free</a>
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

      {/* Courses Section */}
      <section id="courses" className="studentThoughtItems">
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

export default Student;
