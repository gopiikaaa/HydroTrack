import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import DropdownMenu from './DropdownMenu';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  return (
    
    <div className="profile-container">
      <DropdownMenu />
      <div className="profile-content">
        <div className="user-details">
          <h2>User Name</h2>
        </div>
        <div className="buttons-container">
          <button className="edit-button" onClick={handleEditClick}>
            Edit Profile
          </button>
          <button className="history-button">History</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

