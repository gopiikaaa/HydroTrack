// components/SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css'; // Import custom CSS file

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-heading">Signup!</h2>
        <form className="signup-form">
          <input type="text" placeholder="Username" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <input type="phone no" placeholder="phone no" className="signup-input" />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/login" className="login-text">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
