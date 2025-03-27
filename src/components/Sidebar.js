import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/internships">Available Internships</Link></li>
        <li><Link to="/applications">My Applications</Link></li>
        <li><Link to="/progress-tracker">Progress Tracker</Link></li>
        <li><Link to="/mentorship">Mentorship</Link></li>
        <li><Link to="/reports">Reports & Analytics</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;