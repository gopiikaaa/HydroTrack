import React, { useState } from "react";
import "./WaterSalesForm.css";
import DropdownMenu from "./DropdownMenu";
import { storage, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function WaterSalesForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    price: "",
    source: "",
    address: "",
    certificate: null,
    additionalInfo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, certificate: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Mobile Number Validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.phoneNumber)) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    const refs = storageRef(
      storage,
      `/images/${new Date().getUTCMilliseconds}`
    );

    const snapshot = await uploadBytes(refs, formData.certificate);

    const url = await getDownloadURL(snapshot.ref);
    console.log(url);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("email", formData.email);
    data.append("price", formData.price);
    data.append("source", formData.source);
    data.append("address", formData.address);
    data.append("additionalInfo", formData.additionalInfo);

    const fireRef = collection(db, "watersources");
    const docRef = await addDoc(fireRef, {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      price: formData.price,
      source: formData.source,
      address: formData.address,
      additionalInfo: formData.additionalInfo,
      certificate: url,
    });
    console.log(docRef.id);
    toast.success('Form Submitted Successfully!')
  };

  const handleHelpClick = () => {
    navigate('/help');
  };

  return (
    <div>
      <DropdownMenu />
      <div className="form-container">
        <div className="header-container">
          <h2>Water Sales Form</h2>
          <button onClick={handleHelpClick} className="help-button">Help</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Price/Litre:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Source:</label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Upload Certificate:</label>
            <input type="file" name="certificate" onChange={handleFileChange} />
          </div>
          <div>
            <label>Additional Information:</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default WaterSalesForm;
