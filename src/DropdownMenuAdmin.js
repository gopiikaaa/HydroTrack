
import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownAdmin.css'; 
const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">&#9776;</button>
      <div className="dropdown-content">
        <Link to="/proofs">Proofs</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/request-supply">Request for Supply</Link>
        <Link to="/admin-map">Inform Us of a New Source</Link>
        <Link to="/WaterResourcesList" className="nav-link">WaterResourcesList</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;