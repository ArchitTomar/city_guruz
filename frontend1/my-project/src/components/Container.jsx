import React from "react";

const Container = () => {
  return (
    <div className="container">
      <h1>Welcome to CitiGuruz: Your Travel Guide</h1>
      <p>Are you a student looking for study or a tourist exploring the world?</p>
      <div className="btn-group">
        <button className="btn" onClick={() => window.location.href = 'ddstudent.html'}>I'm a Student</button>
        <button className="btn" onClick={() => window.location.href = 'ddtourist.html'}>I'm a Tourist</button>
      </div>
    </div>
  );
};

export default Container;
