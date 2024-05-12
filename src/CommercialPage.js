import React, { useState } from 'react';
import './WaterSalesForm.css'; 
import DropdownMenu from './DropdownMenu';

function WaterSalesForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    price: '',
    source: '',
    address: '',
    certificate: null,
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, certificate: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      price: '',
      source: '',
      address: '',
      certificate: null,
      additionalInfo: ''
    });
  };

  return (
    <div>
      <DropdownMenu />
      <h2>Water Sales Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Source:</label>
          <input type="text" name="source" value={formData.source} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Upload Certificate:</label>
          <input type="file" name="certificate" onChange={handleFileChange} />
        </div>
        <div>
          <label>Additional Information:</label>
          <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}




export default WaterSalesForm;