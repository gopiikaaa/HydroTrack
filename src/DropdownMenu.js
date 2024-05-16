// DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; 
const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">&#9776;</button>
      <div className="dropdown-content">
        <Link to="/proofs">Proofs</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/Verification">Verification</Link>
        <Link to="/HTSearchPage">Locate a Water Source</Link>
        <Link to="/request-supply">Request for Supply</Link>
        <Link to="/inform-new-source">Inform Us of a New Source</Link>
        <Link to="/WaterResourcesList" className="nav-link">WaterResourcesList</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
