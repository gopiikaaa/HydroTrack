import React, { useState, useEffect } from 'react';
import './WaterResourcesList.css';
import DropdownMenuAdmin from './DropdownMenuAdmin.js';
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase.js";

function WaterResourcesListAdmin({ waterResources }) {

  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'watersources'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setFirestoreData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="water-resources-list">
      <DropdownMenuAdmin />
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
              <td>
                <strong>
                  <a href={resource.certificate} target="_blank" rel="noopener noreferrer">
                    Document Link
                  </a>
                </strong>
              </td>
              <td>{resource.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaterResourcesListAdmin;

