import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, Zoom, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/signup', {
        username,
        password,
        phoneNumber,
        ifscCode,
        accountNumber,
      });
      const result = response.data;

      if (result.status) {
        toast.success(result.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Zoom,
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error(result.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('An error occurred during signup. Please try again.');
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
          <input
            type="text"
            placeholder="IFSC Code"
            className="signup-input"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Account Number"
            className="signup-input"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <p className="login-link">Already have an account? <Link to="/login/user" className="login-text">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;

