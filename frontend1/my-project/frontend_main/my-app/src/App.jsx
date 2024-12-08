import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import FeaturesSection from "./components/FeaturesSection";
import Slideshow from "./components/Slideshow";
import SearchBar from "./components/SearchBar";
import SuccessStorySection from "./components/SuccessStorySection";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Slideshow />
        <SearchBar />
      </div>
      <Login />
      <FeaturesSection />
      <SuccessStorySection />
    </div>
  );
};

export default App;
