// src/Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="circle"><b>ttt</b></div>
        <span> | <b>S T O R I E S</b> </span>
      </div>
      <div className="right-side">
        <button className="courses-btn"><b>Courses</b></button>
      </div>
    </nav>
  );
}

export default Navbar;
