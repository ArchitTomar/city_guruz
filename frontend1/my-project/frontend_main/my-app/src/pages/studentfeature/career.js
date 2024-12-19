import React, { useState } from "react";
import "./career.css";

function Car() {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [activeSection, setActiveSection] = useState("career-guide");

  const steps = [
    { title: "Start", duration: "" },
    { title: "Your Personality Archetype", duration: "~ 3 mins" },
    { title: "Your Career Matches", duration: "~ 3 mins" },
    { title: "Your Degree Matches", duration: "~ 1 min" },
    { title: "Your Results", duration: "~ 20 mins" },
  ];

  const questions = [
    { question: "What type of tasks do you enjoy?", options: ["Creative", "Analytical", "Social", "Technical"] },
    { question: "Do you prefer working alone or in a team?", options: ["Alone", "Team", "Both"] },
    { question: "What motivates you most in a career?", options: ["Salary", "Helping others", "Passion", "Work-life balance"] },
  ];

  const careers = [
    { title: "Software Developer", importance: "High demand for technical skills in software and applications." },
    { title: "Psychologist", importance: "Helps individuals and societies improve mental health." },
    { title: "Data Scientist", importance: "Analyzes data to provide valuable insights for businesses." },
    { title: "Graphic Designer", importance: "Creative roles are essential for branding and visual communication." },
  ];

  const careerGuide = [
    "Explore various career paths based on your interests.",
    "Learn about job market trends and future opportunities.",
    "Get tips and insights into choosing the right career.",
  ];

  const degreesGuide = [
    "Understand which degrees are required for specific careers.",
    "Explore online and traditional degree options.",
    "Learn about certifications and other educational resources.",
  ];

  const progressInfo = [
    "Step 1: Completed - Personality Archetype.",
    "Step 2: Completed - Career Matches.",
    "Step 3: In Progress - Degree Matches.",
  ];

  const resources = [
    "Free online courses for career skills.",
    "Links to job portals and internships.",
    "Guides for CV building and interviews.",
  ];

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentStep(1);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answers.length + 1 === questions.length) {
      setShowResults(true);
      setCurrentStep(steps.length - 1);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setAnswers([]);
    setShowResults(false);
    setCurrentStep(0);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="careerapp-container">
      {/* Sidebar */}
      <aside className="careersidebar">
        <div className="careerprofile-section">
          <h3>Career Path Finder</h3>
        </div>
        <ul className="careersteps">
          {steps.map((step, index) => (
            <li key={index} className={`careerstep ${index <= currentStep ? "careeractive" : ""}`}>
              <span className="careerstep-title">{step.title}</span>
              {step.duration && <span className="careerstep-duration">{step.duration}</span>}
            </li>
          ))}
        </ul>
        <div className="careerextras">
          <ul>
            <li className="careerextra-item" onClick={() => handleSectionClick("career-guide")}>Career Guide</li>
            <li className="careerextra-item" onClick={() => handleSectionClick("degrees-guide")}>Degrees Guide</li>
            <li className="careerextra-item" onClick={() => handleSectionClick("progress")}>Progress</li>
            <li className="careerextra-item" onClick={() => handleSectionClick("resources")}>Resources</li>
          </ul>
        </div>
        <button className="careerrestart-sidebar-button" onClick={restartQuiz}>Restart Quiz</button>
      </aside>

      {/* Main Content */}
      <main className="careermain-content">
        {/* Displaying Dynamic Content */}
        {activeSection === "career-guide" && (
          <div className="careerguide-section">
            <h2>Career Guide</h2>
            <ul>
              {careerGuide.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "degrees-guide" && (
          <div className="careerguide-section">
            <h2>Degrees Guide</h2>
            <ul>
              {degreesGuide.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "progress" && (
          <div className="careerguide-section">
            <h2>Your Progress</h2>
            <ul>
              {progressInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "resources" && (
          <div className="careerguide-section">
            <h2>Resources</h2>
            <ul>
              {resources.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quiz Start and Content */}
        {!quizStarted && !showResults && (
          <div className="careerstart-container">
            <h1>Career Path Finder</h1>
            <p>Discover the career that suits you best by taking this quick quiz!</p>
            <button className="careerstart-button" onClick={startQuiz}>Start Quiz</button>
          </div>
        )}

        {quizStarted && !showResults && currentStep > 0 && (
          <div className="careerquiz-container">
            <h2>{questions[currentStep - 1].question}</h2>
            <div className="careeroptions-container">
              {questions[currentStep - 1].options.map((option, index) => (
                <button
                  key={index}
                  className="careeroption-button"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {showResults && (
          <div className="careerresults-container">
            <h1>Your Career Matches</h1>
            <p>Based on your answers, here are some career suggestions:</p>
            <ul>
              {careers.map((career, index) => (
                <li key={index}>
                  <h3>{career.title}</h3>
                  <p>{career.importance}</p>
                </li>
              ))}
            </ul>
            <button className="careerrestart-button" onClick={restartQuiz}>Restart Quiz</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Car;
