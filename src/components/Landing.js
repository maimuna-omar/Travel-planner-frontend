import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h2 className="landing-heading">WELCOME TO MAYAS TRAVEL PLANNER</h2>
      <h2 className="landing-text"> PLAN YOUR TRIPS AND FLY AWAY!!<br /> ✈️ ✈️ ✈️ ✈️ ✈️ ✈️</h2>
      
      <Link to="/login" className="get-started-button">
        Get Started
      </Link>
    </div>
  );
};

export default Landing;

