import React from "react";
import "./SuccessStorySection.css";

const stories = [
  { name: "John Doe", story: "This platform changed my career path  ." },
  { name: "Jane Smith", story: "The resources here are amazing!" },
  { name: "Alice Johnson", story: "I got into my dream university." }
];

const SuccessStorySection = () => {
  return (
    <section id="success" className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <p>"{story.story}"</p>
            <span>- {story.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStorySection;
