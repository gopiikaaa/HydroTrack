import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './admin.css'; // Import custom CSS file

function AdminLoginPage() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login/admin', {
        adminId,
        password,
      });

      const result = response.data;
      console.log(result)

      if (result.status) {
        alert(result.message);
        navigate('/adminhome'); // Redirect to admin home on successful login
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Admin Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Admin ID"
            className="login-input"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">Forgot password? <Link to="/forgot" className="signup-text">Forgot</Link></p>
      </div>
    </div>
  );
}

export default AdminLoginPage;

