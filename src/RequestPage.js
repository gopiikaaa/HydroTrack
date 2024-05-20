import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import DropdownMenu from './DropdownMenu';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './RequestPage.css'; // Import custom CSS file

function WaterResourceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    locationAddress: '',
    description: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, locationAddress, description } = formData;

    if (!name || !email || !phoneNumber || !locationAddress || !description) {
      toast.error('All fields except Additional Comments are required.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid email address.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error('Invalid phone number. It must be exactly 10 digits.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/request', {
        name: formData.name,
        email: formData.email,
        phonenumber: formData.phoneNumber,
        address: formData.locationAddress,
        description: formData.description,
        additional_comments: formData.additionalComments || '', // Provide default value if not present
        approval: true // Include approval with default value true
      });

      const result = response.data;
      console.log(result);

      if (result.status) {
        toast.success(result.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        }); // Display success toast
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          locationAddress: '',
          description: '',
          additionalComments: ''
        });
      } else {
        toast.error(result.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }); // Display error toast
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      toast.error('An error occurred. Please try again later.'); // Display error toast
    }
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
          <label>Location Address:</label>
          <input type="text" name="locationAddress" value={formData.locationAddress} onChange={handleChange} required />
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> {/* Add ToastContainer with customization */}
    </div>
  );
}

export default WaterResourceForm;
