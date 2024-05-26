import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import './PaymentPage.css';

function PaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [payDisabled, setPayDisabled] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      const docRef = doc(db, 'watersources', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setResource(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchResource();
  }, [id]);

  useEffect(() => {
    if (quantity && amount) {
      setPayDisabled(false);
    } else {
      setPayDisabled(true);
    }
  }, [quantity, amount]);

  const handlePay = () => {
    // Implement the payment logic here
    alert("Payment successful!");
    navigate('/');
  };

  if (!resource) return <div>Loading...</div>;

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <div className="seller-info">
        <p><strong>Name:</strong> {resource.name}</p>
        <p><strong>Phone Number:</strong> {resource.phoneNumber}</p>
        <p><strong>IFSC Code:</strong> {resource.ifscCode}</p>
        <p><strong>Account Number:</strong> {resource.accountNumber}</p>
      </div>
      <div className="payment-form">
        <label>Quantity (litres):</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="pay-button"
          onClick={handlePay}
          disabled={payDisabled}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;






