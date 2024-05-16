import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'; // Import custom CSS file

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/signup', {
        username,
        password,
        phoneNumber,
      });
      setMessage(response.data);
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-heading">Signup!</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="signup-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        {message && <p>{message}</p>}
        <p className="login-link">Already have an account? <Link to="/login/user" className="login-text">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
