import React, { useState } from 'react';
import './VerificationPage.css';
function VerificationPage() {
  const [file, setFile] = useState(null);
  const [locationName, setLocationName] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file || !locationName) {
      alert('Please provide a location name and select a file to upload.');
      return;
    }
    
    // Here you would handle the file upload process, typically involving setting up FormData and sending it to a back-end server.
    console.log('Location Name:', locationName);
    console.log('File to upload:', file.name);
    
    // Example of what you might do:
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('locationName', locationName);
    // // Send formData to your API endpoint...
  };

  return (
<div className="verification-wrapper">   
    <div className="verificationPage-container">
      <h1>Verified Documents</h1>
      <form onSubmit={handleSubmit} className="verification-form">
      <div className="form-group">
          <label htmlFor="locationName">Location Coordinates:</label>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={handleLocationNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="documentUpload">Upload Documents:</label>
          <input
            type="file"
            id="documentUpload"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
</div>

  );
}

export default VerificationPage;