import React, { useState } from 'react';
import './feedback.css'; 
import DropdownMenu from './DropdownMenu';

// Import your CSS file

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [replies, setReplies] = useState({});

  const handleFeedbackChange = (event) => {
    setNewFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (newFeedback.trim() !== '') {
      setFeedbacks([...feedbacks, newFeedback]);
      setNewFeedback('');
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
          <textarea
            value={newFeedback}
            onChange={handleFeedbackChange}
            className="feedback-textarea"
            placeholder="Type your feedback here"
          />
          <button onClick={handleSubmit} className="feedback-button">Submit</button>
        </div>
        <div className="feedback-list">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item">
              <p>{feedback}</p>
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
