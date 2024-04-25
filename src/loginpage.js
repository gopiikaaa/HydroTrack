// components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import custom CSS file

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Login Here!</h2>
        <form className="login-form">
          <input type="username" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">forgot password? <Link to="/forgot" className="signup-text">forgot</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;

