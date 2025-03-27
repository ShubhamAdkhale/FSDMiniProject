import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-icon">
        <Link to="/profile">
          <img
            src="https://via.placeholder.com/40" 
            alt="Profile"
            className="profile-image"
          />
        </Link>
      </div>
      <div className="logo">Internship Platform</div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;