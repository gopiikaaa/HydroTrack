import React, { useState } from 'react';
import './RequestPage.css';
import DropdownMenu from './DropdownMenu';
function WaterResourceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    latitude: '',
    longitude: '',
    description: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      latitude: '',
      longitude: '',
      description: '',
      additionalComments: ''
    });
  };

  return (
  <div>
    <DropdownMenu />
      <h2>Report Unverified Water Resource</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Latitude:</label>
          <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />
        </div>
        <div>
          <label>Longitude:</label>
          <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Additional Comments:</label>
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default WaterResourceForm;
