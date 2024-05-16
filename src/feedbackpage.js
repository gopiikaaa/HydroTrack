import React, { useState } from 'react';
import './feedback.css'; 
import DropdownMenu from './DropdownMenu';

// Import your CSS file

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [replies, setReplies] = useState({});

  const handleFeedbackChange = (event) => {
    setNewFeedback(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (newFeedback.trim() !== '' && newName.trim() !== '' && newEmail.trim() !== '') {
      const newEntry = {
        name: newName,
        email: newEmail,
        feedback: newFeedback
      };
      setFeedbacks([...feedbacks, newEntry]);
      setNewFeedback('');
      setNewName('');
      setNewEmail('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleReply = (index) => {
    const reply = prompt('Enter your reply:');
    if (reply !== null) {
      setReplies({ ...replies, [index]: reply });
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
        <div className="feedback-list">
          {feedbacks.map((entry, index) => (
            <div key={index} className="feedback-item">
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Email:</strong> {entry.email}</p>
              <p><strong>Feedback:</strong> {entry.feedback}</p>
              <button onClick={() => handleReply(index)} className="reply-button">Reply</button>
              {replies[index] && <p className="reply">Admin Reply: {replies[index]}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
