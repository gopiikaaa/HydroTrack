import React, { useState } from 'react';
import WaterSalesForm from './WaterSalesForm';
import WaterResourcesList from './WaterResourcesList';
import './ParentComponent.css';

function ParentComponent() {
  const [waterResources, setWaterResources] = useState([]);
   


  const addWaterResource = (resource) => {
    setWaterResources([...waterResources, resource]);
  };

  return (
    <div className="parent-container">
      <div className="form-container">
        {/* Pass the addWaterResource function as a prop to WaterSalesForm */}
        <WaterSalesForm addWaterResource={addWaterResource} />
      </div>
      <div className="list-container">
        {/* Pass the waterResources array as a prop to WaterResourcesList */}
        <WaterResourcesList waterResources={waterResources} />
      </div>
    </div>
  );
}

export default ParentComponent;

