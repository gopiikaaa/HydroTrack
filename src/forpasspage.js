import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './forgotpass.css'; // Import custom CSS file

function ForgotPasswordPage() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/forgot', {
        username,
        newPassword
      });

      console.log('Response data:', response.data); // Debug log to check response

      if (response.data.status) {
        toast.success(response.data.message); // Display success toast
        setTimeout(() => navigate('/login/user'), 3000); // Navigate after a delay to allow toast to display
      } else {
        toast.error(response.data.message); // Display error toast
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('An error occurred. Please try again later.'); // Display error toast
    }
  };


  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2 className="forgot-password-heading">Forgot Password?</h2>
        <form className="forgot-password-form" onSubmit={handleResetPassword}>
          <input
            type="text"
            placeholder="Username"
            className="forgot-password-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="forgot-password-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="submit" className="forgot-password-button">Reset Password</button>
        </form>
        <p className="login-link">Remembered your password? <Link to="/login" className="login-text">Login</Link></p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> {/* Add ToastContainer with customization */}
    </div>
  );
}

export default ForgotPasswordPage;
