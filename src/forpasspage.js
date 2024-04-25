// components/ForgotPasswordPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './forgotpass.css'; // Import custom CSS file

function ForgotPage() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2 className="forgot-password-heading">Forgot Password?</h2>
        <form className="forgot-password-form">
          <input type="username" placeholder="username" className="forgot-password-input" />
          <input type="create password" placeholder="create password" className="forgot-password-input" />
          <input type="re-enter password" placeholder="re-enter password" className="forgot-password-input" />
          <button type="submit" className="forgot-password-button">Reset Password</button>
        </form>
        <p className="login-link">Remembered your password? <Link to="/login" className="login-text">Login</Link></p>
      </div>
    </div>
  );
}

export default ForgotPage;
