import React from 'react';
import '../../styles/components/Dashboard/AvailableInternships.css';

const AvailableInternships = () => {
  const internships = [
    {
      title: 'Software Development Intern',
      company: 'TechCorp',
      location: 'Bandra, Mumbai',
      description: 'Join our team to develop innovative software solutions.',
    },
    {
      title: 'Marketing Intern',
      company: 'MarketPro',
      location: 'Delhi, India',
      description: 'Assist in marketing campaigns and social media management.',
    },
    {
      title: 'Data Analyst Intern',
      company: 'DataInsights',
      location: 'Malad , Mumbai',
      description: 'Analyze data trends and provide insights for decision-making.',
    },
    {
      title: 'Graphic Design Intern',
      company: 'DesignStudio',
      location: 'Mahim, Mumbai',
      description: 'Create visual concepts and branding materials for clients.',
    },
    {
      title: 'Business Development Intern',
      company: 'BizGrowth',
      location: 'Hyderabad, India',
      description: 'Support business growth initiatives and market research.',
    },
  ];

  return (
    <div className="available-internships">
      <div className="internships-container">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3>{internship.title}</h3>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Location:</strong> {internship.location}</p>
            <p>{internship.description}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableInternships;