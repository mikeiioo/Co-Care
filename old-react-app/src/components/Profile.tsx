import React from "react";
import "../assets/css/Profile.css";
import Edit from "../assets/images/edit.png";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="personal-info">
        <div className="information first">
          <h2>Profile</h2>
          <div className="edit">
            <p>edit</p>
            <img src={Edit} alt="" className="edit-icon" />
          </div>
        </div>
        <div className="information">
          <h3>Name</h3>
          <p>Fill in name here</p>
        </div>
        <div className="information">
          <h3>Age</h3>
          <p>21</p>
        </div>
        <div className="information">
          <h3>Zip Code</h3>
          <p>30309</p>
        </div>
        <div className="information">
          <h3>Primary Concerns</h3>
        </div>
        <div className="primary-concern">physical therapy</div>
        <div className="primary-concern">physical therapy</div>
        <div className="primary-concern">physical therapy</div>
        <div className="primary-concern">physical therapy</div>
        <div className="dropup">
          <div className="primary-concern">more</div>
          <div className="dropup-content">
            <div className="primary-concern menu">primary-concern menu 1</div>
            <div className="primary-concern menu">primary-concern menu 2</div>
            <div className="primary-concern menu">primary-concern 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
