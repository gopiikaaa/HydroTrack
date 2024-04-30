// components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ua.css'; // Import your CSS file
import image1 from './logo2.png';
import image2 from './NWRCLOGO2.png';
function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="app-heading">HYDROTRACK</h1>
        <div className="content-wrapper">
          <div className="login-side">
            <h2 className="login-heading">Login</h2>
            <div className="user-login-box">
              <Link to="/login/user" className="login-link">User Login</Link>
            </div>
            <div className="admin-login-box">
              <Link to="/login/admin" className="login-link">Admin Login</Link>
              <img src={image1} alt="logo" className="image1" />
      <img src={image2} alt="nwrclogo" className="image2" />
            </div>

            <div className="signup-box">
              <Link to="/signup" className="signup-link">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
