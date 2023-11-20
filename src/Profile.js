// src/Profile.js
import React from 'react';
import './profile.css';
import natureImage from './cover-photo.jpg';
import personImage from './profile-photo.jpg';
import DiamondIcon from '@mui/icons-material/Diamond';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="profile-content">
        <div className="profile-image-container">
          <img
            src={personImage}
            alt="Person"
            className="profile-image"
          />
          <div className="profile-icons">
            
          </div>
        </div>
        <h1 className="profile-name"><b>Anuj Gosalia</b><DiamondIcon />
            <CheckCircleIcon /></h1>
            <div className="profile-stats">
          <div className="profile-stat-box">
            <p className="stat-number"><b>6482</b></p>
            <p className="stat-label">Followers</p>
          </div>
          <div className="profile-stat-box">
            <p className="stat-number"><b>245</b></p>
            <p className="stat-label">Following</p>
          </div>
        </div>
      </div>
      
      <div>
      <p className="profile-description">
       <b>Co-founder & CEO of Terribly Tiny Tales</b> 
       <p>https://www.instagram.com/anujgosalia/</p>
      </p>
      </div>
      
      {/* Placeholder content, replace with your actual profile details */}
      
    </div>
    
  );
};

export default Profile;
