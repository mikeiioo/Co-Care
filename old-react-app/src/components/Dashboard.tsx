import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import "../assets/css/Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <h2 className="welcome">Welcome, __name__</h2>
      <div className="dashboard-container">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
