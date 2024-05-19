import React, { useState, useEffect } from 'react';
import './WaterResourcesList.css';
import DropdownMenuAdmin from './DropdownMenuAdmin.js';
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase.js";

function RequestsList() {
  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Requests'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      console.log(data);
      setFirestoreData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="water-resources-list">
      <DropdownMenuAdmin />
      <h2>Unverified Water resources provided by people</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Location Address</th>
            <th>Description</th>
            <th>Additional Comments</th>
          </tr>
        </thead>
        <tbody>
          {firestoreData && firestoreData.map((request, index) => (
            <tr key={index} className="water-resource-list">
              <td>{request.name}</td>
              <td>{request.phonenumber}</td>
              <td>{request.email}</td>  
              <td>{request.Location_Address}</td>
              <td>{request.description}</td>
              <td>{request.additional_comments} 
              {firestoreData.length > 0 && firestoreData[index] ? firestoreData[index].blankValue : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestsList;
