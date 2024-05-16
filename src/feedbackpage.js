import React, { useState } from 'react';
import './feedback.css'; 
import DropdownMenu from './DropdownMenu';
import axios from 'axios';

function FeedbackPage() {
  const [newFeedback, setNewFeedback] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleFeedbackChange = (event) => {
    setNewFeedback(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSubmit = async () => {
    if (newFeedback.trim() !== '' && newName.trim() !== '' && newEmail.trim() !== '') {
      const newEntry = {
        name: newName,
        email: newEmail,
        feedback: newFeedback
      };

      try {
        const response = await axios.post('http://localhost:4000/feedback', newEntry);

        if (response.data.status) {
          setNewFeedback('');
          setNewName('');
          setNewEmail('');
          alert(response.data.message); // Display success message
        } else {
          alert(response.data.message); // Display failure message
        }
      } catch (error) {
        alert('Error submitting feedback.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="feedback-page">
      <DropdownMenu />
      <div className="feedback-container">
        <h2 className="feedback-heading">Feedback</h2>
        <div className="feedback-form">
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            className="feedback-input"
            placeholder="Your Name"
          />
          <input
            type="email"
            value={newEmail}
            onChange={handleEmailChange}
            className="feedback-input"
            placeholder="Your Email"
          />
          <textarea
            value={newFeedback}
            onChange={handleFeedbackChange}
            className="feedback-textarea"
            placeholder="Type your feedback here"
          />
          <button onClick={handleSubmit} className="feedback-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
