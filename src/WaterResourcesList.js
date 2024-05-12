import React from 'react';
import './WaterResourcesList.css';
import DropdownMenu from './DropdownMenu';

function WaterResourcesList({ waterResources }) {
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
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
          {waterResources?.map((resource, index) => (
            <tr key={index} className="water-resource-item">
              <td><strong>Name:</strong> {resource.name}</td>
              <td><strong>Phone Number:</strong> {resource.phoneNumber}</td>
              <td><strong>Email:</strong> {resource.email}</td>
              <td><strong>Price:</strong> {resource.price}</td>
              <td><strong>Source:</strong> {resource.source}</td>
              <td><strong>Address:</strong> {resource.address}</td>
              <td><strong>Additional Information:</strong> {resource.additionalInfo}</td>
            </tr>
          ))}
            {/* Subsequent rows with each attribute in its own row */}
          
             {waterResources?.map((resource, index) => ( 
  Object.keys(resource).slice(2).map((attribute, attrIndex) => (
    <tr key={`${index}-${attrIndex}`} className="water-resource-item">
      <td></td> {/* Empty cell for name */}
      <td></td> {/* Empty cell for phone number */}
      <td>{resource[attribute]}</td> {/* Render each attribute in its own row */}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  ))
))}
        </tbody>
      </table>
    </div>
  );
}

export default WaterResourcesList;
