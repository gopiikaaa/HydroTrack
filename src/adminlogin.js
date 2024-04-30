// components/AdminLoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'; // Import custom CSS file

function AdminLoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Admin Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Admin ID" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />

          {/* Change the action of the form to handle login */}
          <Link to="/adminhome" className="login-button">Login</Link>
        </form>
        <p className="signup-link">Forgot password? <Link to="/forgot" className="signup-text">Forgot</Link></p>
      </div>
    </div>
  );
}

export default AdminLoginPage;
