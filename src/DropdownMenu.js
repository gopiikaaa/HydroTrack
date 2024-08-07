import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Dropdown.css'; 

const DropdownMenu = () => {

  const handleSignOut = () => {
    toast.info('Signing out...', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setTimeout(() => {
      toast.success('Signed out successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }, 2000);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">&#9776;</button>
      <div className="dropdown-content">
        <Link to="/ProfilePage">Profile</Link>
        <Link to="/HTSearchPage">Locate a Water Source</Link>
        <Link to="/request-supply">Water Sales Form</Link>
        <Link to="/inform-new-source">Inform Us of a New Source</Link>
        <Link to="/WaterResourcesList" className="nav-link">Water Resources List</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/" onClick={handleSignOut} className="signout-link">Sign Out</Link>
      </div>
      <ToastContainer 
      position= "top-center"
      autoClose= {5000}
      hideProgressBar= {true}
      closeOnClick= {true}
      pauseOnHover= {true}
      draggable= {true}
      progress= {undefined}
      theme= "colored"
      transition= {Zoom}
      />
    </div>
  );
};

export default DropdownMenu;
