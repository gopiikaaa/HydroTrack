import React, { useState } from 'react';
import './EditProfilePage.css';

function EditProfilePage() {
  const [formData, setFormData] = useState({
    username: 'Current Username',
    password: 'Current Password',
    phoneNumber: 'Current Phone Number',
    ifscCode: 'Current IFSC Code',
    accountNumber: 'Current Account Number',
  });

  const [editMode, setEditMode] = useState({
    username: false,
    password: false,
    phoneNumber: false,
    ifscCode: false,
    accountNumber: false,
  });

  const handleEdit = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSave = (field) => {
    setEditMode({ ...editMode, [field]: false });
    // You can add logic here to save the updated data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label>Username:</label>
        {!editMode.username ? (
          <>
            <div>{formData.username}</div>
            <button className="edit-button-white" onClick={() => handleEdit('username')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('username')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Password:</label>
        {!editMode.password ? (
          <>
            <div>{formData.password}</div>
            <button className="edit-button-white" onClick={() => handleEdit('password')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('password')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        {!editMode.phoneNumber ? (
          <>
            <div>{formData.phoneNumber}</div>
            <button className="edit-button-white" onClick={() => handleEdit('phoneNumber')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('phoneNumber')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>IFSC Code:</label>
        {!editMode.ifscCode ? (
          <>
            <div>{formData.ifscCode}</div>
            <button className="edit-button-white" onClick={() => handleEdit('ifscCode')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('ifscCode')}>
              Save
            </button>
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Account Number:</label>
        {!editMode.accountNumber ? (
          <>
            <div>{formData.accountNumber}</div>
            <button className="edit-button-white" onClick={() => handleEdit('accountNumber')}>
              Edit
            </button>
          </>
        ) : (
          <div className="edit-options">
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="edit-input"
            />
            <button className="save-button" onClick={() => handleSave('accountNumber')}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProfilePage;