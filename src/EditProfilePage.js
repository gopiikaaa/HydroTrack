import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import './EditProfilePage.css';

function EditProfilePage() {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    phone_no: '',
    IFSC_Code: '',
    AccNo: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore();
      const userDocId = localStorage.getItem('userId'); // Assuming you store the user ID in localStorage
      if (userDocId) {
        const userDocRef = doc(db, 'User', userDocId);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setFormData(userDocSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, []);

  const [editMode, setEditMode] = useState({
    Username: false,
    Password: false,
    phone_no: false,
    IFSC_Code: false,
    AccNo: false,
  });

  const handleEdit = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSave = async (field) => {
    const db = getFirestore();
    const userDocId = localStorage.getItem('userId');
    if (userDocId) {
      const userDocRef = doc(db, 'User', userDocId);
      try {
        await updateDoc(userDocRef, {
          [field]: formData[field],
        });
        console.log(`${field} updated successfully`);
        setEditMode((prev) => ({ ...prev, [field]: false }));
      } catch (error) {
        console.error('Error updating document:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    })); 
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label>Username:</label>
        {!editMode.Username ? (
          <>
            <div>{formData.Username}</div>
            <button className="edit-button-white" onClick={() => handleEdit('Username')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('Username')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Password:</label>
        {!editMode.Password ? (
          <>
            <div>{formData.Password}</div>
            <button className="edit-button-white" onClick={() => handleEdit('Password')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('Password')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        {!editMode.phone_no ? (
          <>
            <div>{formData.phone_no}</div>
            <button className="edit-button-white" onClick={() => handleEdit('phone_no')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('phone_no')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>IFSC Code:</label>
        {!editMode.IFSC_Code ? (
          <>
            <div>{formData.IFSC_Code}</div>
            <button className="edit-button-white" onClick={() => handleEdit('IFSC_Code')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="IFSC_Code"
              value={formData.IFSC_Code}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('IFSC_Code')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Account Number:</label>
        {!editMode.AccNo ? (
          <>
            <div>{formData.AccNo}</div>
            <button className="edit-button-white" onClick={() => handleEdit('AccNo')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="AccNo"
              value={formData.AccNo}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('AccNo')}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProfilePage;