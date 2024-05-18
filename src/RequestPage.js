import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './RequestPage.css'; // Import custom CSS file

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/request', formData);

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
          latitude: '',
          longitude: '',
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
          <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />
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