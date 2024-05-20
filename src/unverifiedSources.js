import React, { useState, useEffect } from 'react';
import './WaterResourcesList.css';
import DropdownMenuAdmin from './DropdownMenuAdmin.js';
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";

function RequestsList() {
  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Requests'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id }); // Include the document ID in the data
      });
      console.log(data);
      setFirestoreData(data);
    };

    fetchData();
  }, []);

  const handleApprove = async (id, index) => {
    const docRef = doc(db, 'Requests', id);
    await updateDoc(docRef, { approval: true });
    const updatedData = [...firestoreData];
    updatedData[index].approval = true;
    setFirestoreData(updatedData);
  };

  const handleReject = async (id, index) => {
    const docRef = doc(db, 'Requests', id);
    await updateDoc(docRef, { approval: false });
    const updatedData = [...firestoreData];
    updatedData[index].approval = false;
    setFirestoreData(updatedData);
  };

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
            <th>Approval Status</th>
            <th>Additional Comments</th>
            <th>Approval</th>
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
              <td>{request.approval === true ? "Approved" : request.approval === false ? "Rejected" : ""}</td>
              <td>{request.additional_comments}</td>
              <td>
                <button className="approve-button" onClick={() => handleApprove(request.id, index)}>Approve</button>    
                 <button className="reject-button" onClick={() => handleReject(request.id, index)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestsList;
