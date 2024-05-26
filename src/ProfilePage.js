import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext for managing authentication
import { updateUserProfile } from './firebase'; // Assuming you have a function to update user profile

function ProfilePage() {
  const { currentUser } = useAuth(); // Get the current user from the AuthContext
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch user profile data when the component mounts
    if (currentUser) {
      setName(currentUser.displayName || '');
      setPhoneNumber(currentUser.phoneNumber || '');
    }
  }, [currentUser]);

  const handleSaveProfile = async () => {
    // Update user profile when the Save button is clicked
    try {
      await updateUserProfile(name, phoneNumber);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again later.');
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-info">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="profile-info">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="profile-info">
        <button onClick={handleSaveProfile}>Save</button>
      </div>
    </div>
  );
}

export default ProfilePage;

