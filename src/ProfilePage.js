import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ProfilePage.css';
import DropdownMenu from './DropdownMenu';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ProfilePage = () => {
 
  
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    const db = getFirestore();
    const fetchUserData = async () => {
      const userDocId = localStorage.getItem('userId');
      if (userDocId) {
        const userDocRef = doc(db, 'User', userDocId);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, []);

return (
  <div className="profile-page">
    <DropdownMenu />
    <div className="profile-container">
     
      <div className="profile-content">
        <div className="user-details">
          
          <h2>{userData.Username}</h2>
          <h3>{userData.phone_no}</h3>
        </div>
        <div className="buttons-container">
          <button className="edit-button" onClick={handleEditClick}>
            Edit Profile
          </button>
          <button className="history-button">History</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfilePage;

