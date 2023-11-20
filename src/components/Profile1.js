// src/Hero.js
import React from 'react';

import './profile1.css'; // Import the CSS file for Hero component
import cover from "./natureImage.jpeg";
import headshot from "./profile-photo.jpg";
import user from '../data/info.json';
import { FaEye, FaHeart, FaStar, FaThumbsUp } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { TbDiamondFilled } from "react-icons/tb";

const Profile1 = () => {
  return (
    <>
      <div className="bg-gradient h-3 bg-yellow"></div>
      <div className="max-width-container">
        <img
          className="hero-image"
          src={cover}
          alt="Cover Image"
        />
        <div className="flex-container">
          <img
            className="profile-image"
            src={headshot}
            alt="Profile Picture"
          />
          <div className="info-container">
            <div className="header">
              <div className="name">{user.name}Anuj Gosalia</div>
              <TbDiamondFilled />
              <FcApproval />
            </div>
           
            <div className="stats">
              <div className="stat-box">
                <div className="stat-number">{user.followers}6482</div>
                <div className="stat-label">Followers</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{user.following}532</div>
                <div className="stat-label">Following</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-section">
          <div className="bio">{user.bio}<h2>Co-founder & CEO of Terribly Tiny Tales</h2></div>
          <h3>https://www.instagram.com/anujgosalia</h3>
          {/* <a
            href="https://github.com/aryanjha256"
            className="github-link"
          >
            GitHub
          </a> */}
        </div>
        <div className="social-stats">
          <div className="stat">
            <FaStar fill="teal" /> <span className="stat-number">256</span>
          </div>
          <div className="stat">
            <FaThumbsUp className="text-yellow-400" />{" "}
            <span className="stat-number">34</span>
          </div>
          <div className="stat">
            <FaEye fill="gray" /> <span className="stat-number">12.13K</span>
          </div>
          <div className="stat">
            <FaHeart fill="red" /> <span className="stat-number">3.7K</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile1;
