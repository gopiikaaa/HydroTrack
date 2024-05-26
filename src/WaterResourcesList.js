import DropdownMenu from './DropdownMenu';
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase.js";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WaterResourcesList.css';

function WaterResourcesList() {
  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'watersources'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setFirestoreData(data);
    };

    fetchData();
  }, []);

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
            <th>Price
              <div>(rate per Litre)</div>
            </th>
            <th>Source</th>
            <th>Address</th>
            <th>Verification Document</th>
            <th>Additional Information</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {firestoreData && firestoreData.map((resource, index) => (
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
              <td>
                <Link to={`/payment/${resource.id}`} className='select-button'>
                  <button>select</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaterResourcesList;







