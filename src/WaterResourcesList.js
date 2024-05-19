import React, {useState, useEffect} from 'react';
import './WaterResourcesList.css';
import DropdownMenu from './DropdownMenu';
import { getDocs,collection } from "firebase/firestore";
import {db} from "./firebase.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WaterResourcesList({ waterResources }) {
  
  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'watersources'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      console.log(data);
      setFirestoreData(data);
    };

    fetchData();
  }, []);

  const handlePaymentClick = () => {
    toast.info('Payment processing...', { autoClose: false }); // Show loading toast
    setTimeout(() => {
      toast.dismiss(); // Dismiss the loading toast
      toast.success('Payment successful!'); // Show success toast
    }, 2000); // 2-second delay
  };

  
  
  return (
    <div className="water-resources-list">
      <DropdownMenu />
      <h2>Water Resources Provided by People</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Price</th>
            <th>Source</th>
            <th>Address</th>
            <th>Verification Document</th> {/* New column */}
            <th>Additional Information</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {firestoreData && firestoreData?.map((resource, index) => (
            <tr key={index} className="water-resource-item">
              <td>{resource.name}</td>
              <td>{resource.phoneNumber}</td>
              <td>{resource.email}</td>
              <td>{resource.price}</td>
              <td>{resource.source}</td>
              <td>{resource.address}</td>
              <td><strong>
                <a href={resource.certificate} target="_blank" rel="noopener noreferrer">
                  Document Link
                </a>
                </strong>
              </td>
              <td>{resource.additionalInfo}</td>
              <td><button className='Payment-button' onClick={handlePaymentClick}>Pay Now</button>
                {firestoreData.length > 0 && firestoreData[index] ? firestoreData[index].blankValue : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default WaterResourcesList;
