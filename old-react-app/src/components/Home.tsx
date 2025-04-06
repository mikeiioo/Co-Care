import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
const Home = () => {
  return (
    <div className="intro-page">
      <div className="intro-content">
        <div className="intro-title">co-care</div>
        <div className="intro-text">
          Find the perfect insurance plan that suits all your healthcare needs.
          With co-care, you can search for plans specific to your life.
        </div>
        <div className="home-button-group">
          <Link to="/dashboard">
            <button className="home-buttons">search</button>
          </Link>
          <Link to="/login">
            <button className="home-buttons">log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
