import React from "react";
import Profile from "../assets/images/profile.png";
import "../assets/css/Header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="title">co-care</div>
        <img src={Profile} alt="profile" className="profile" />
      </div>
    </>
  );
};

export default Header;
