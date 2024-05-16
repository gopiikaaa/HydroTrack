
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dropdown">
        <button className="dropbtn">&#9776;</button>
        <div className="dropdown-content">
          <Link to="/proofs">Proofs</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/verification">Verification</Link>
          <Link to="/admin-map">Inform Us of a New Source</Link>
          <Link to="/request-supply">Request for Supply</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
