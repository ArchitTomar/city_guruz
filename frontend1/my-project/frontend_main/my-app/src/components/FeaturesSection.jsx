import React from "react";
import "./FeaturesSection.css";

const features = [
  "Library",
  "Café",
  "Exhibition Schedule",
  "To-Do List",
  "Chatbot",
  "Feedback",
  "Career Path Finder",
  "Tips",
  "Quiz",
  "Success Stories",
  "Universities",
  "Competitive Exams Info"
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
