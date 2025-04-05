import React from "react";
import "../assets/css/Account.css";
import { Link } from "react-router-dom";
import Header from "./Header";
const Account = () => {
  return (
    <>
      <Header />
      <div className="account">
        <h1>Log In or Sign up</h1>
        <div className="account-field">
          <div className="acct-label">username</div>
          <input type="text" className="account-input" placeholder="username" />
        </div>
        <div className="account-field">
          <div className="acct-label">password</div>
          <input type="text" className="account-input" placeholder="password" />
        </div>
        <Link to="/dashboard">
          <button className="login-button">Log In or Sign Up</button>
        </Link>
        <div className="signup">don't have an account? sign up</div>
      </div>
    </>
  );
};

export default Account;
