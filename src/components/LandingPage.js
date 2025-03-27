import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSDG, setSelectedSDG] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);

  const opportunities = [
    {
      title: 'Software Development Intern',
      company: 'TechCorp',
      department: 'Engineering',
      sdg: '9', 
    },
    {
      title: 'Marketing Intern',
      company: 'MarketPro',
      department: 'Business',
      sdg: '8', 
    },
    {
      title: 'Graphic Design Intern',
      company: 'DesignStudio',
      department: 'Design',
      sdg: '12', 
    },
  ];

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value.toLowerCase());
  };

  const handleSDGChange = (e) => {
    setSelectedSDG(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const filtered = opportunities.filter((opportunity) => {
      const matchesKeyword =
        opportunity.title.toLowerCase().includes(searchKeyword) ||
        opportunity.company.toLowerCase().includes(searchKeyword) ||
        opportunity.department.toLowerCase().includes(searchKeyword);

      const matchesSDG = selectedSDG ? opportunity.sdg === selectedSDG : true;
      const matchesDepartment = selectedDepartment
        ? opportunity.department.toLowerCase() === selectedDepartment
        : true;

      return matchesKeyword && matchesSDG && matchesDepartment;
    });

    setFilteredOpportunities(filtered);
  };

  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>WELCOME TO THE INTERNSHIP PLATFORM</h1>
        <p>Find internships, track progress, and align with Sustainable Development Goals (SDGs).</p>
        <div className="hero-buttons">
          <button className="btn-primary">Find Internships</button>
          <Link to="/dashboard">
            <button className="btn-secondary">Go to Dashboard</button>
          </Link>
        </div>
      </header>

      <section className="search-section">
        <h2>Search Internships</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by keyword..."
            value={searchKeyword}
            onChange={handleSearchChange}
          />
          <select value={selectedSDG} onChange={handleSDGChange}>
            <option value="">Filter by SDG</option>
            <option value="1">No Poverty</option>
            <option value="2">Zero Hunger</option>
            <option value="3">Good Health and Well-being</option>
            <option value="4">Quality Education</option>
            <option value="5">Gender Equality</option>
            <option value="6">Clean Water and Sanitation</option>
            <option value="7">Affordable and Clean Energy</option>
            <option value="8">Decent Work and Economic Growth</option>
            <option value="9">Industry, Innovation, and Infrastructure</option>
            <option value="10">Reduced Inequalities</option>
            <option value="11">Sustainable Cities and Communities</option>
            <option value="12">Responsible Consumption and Production</option>
            <option value="13">Climate Action</option>
            <option value="14">Life Below Water</option>
            <option value="15">Life on Land</option>
            <option value="16">Peace, Justice, and Strong Institutions</option>
            <option value="17">Partnerships for the Goals</option>
          </select>
          <select value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Filter by Department</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="finance">Finance</option>
            <option value="human-resources">Human Resources</option>
            <option value="it">Information Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
          </select>
          <button className="btn-search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links">
        <Link to="/internships">
            <button className="btn-link">Available Internships</button>
          </Link>          
          <Link to="/dashboard">
            <button className="btn-link">Student Dashboard</button>
          </Link>
        </div>
      </section>

      <section className="recent-opportunities">
        <h2>Recent Internship Opportunities</h2>
        <div className="opportunities">
          {(searchKeyword || selectedSDG || selectedDepartment
            ? filteredOpportunities
            : opportunities
          ).map((opportunity, index) => (
            <div key={index} className="opportunity-card">
              <h3>{opportunity.title}</h3>
              <p>Company: {opportunity.company}</p>
              <p>Department: {opportunity.department}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Internships</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
        <div className="footer-contact">
          <p>Email: support@internshipplatform.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;