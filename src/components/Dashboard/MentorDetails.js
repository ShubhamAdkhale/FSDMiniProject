import React from 'react';
import '../../styles/components/Dashboard/MentorDetails.css';

const MentorDetails = () => {
  const mentor = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    department: "Computer Science",
    bio: "John is a seasoned software engineer with over 10 years of experience in the tech industry. He is passionate about mentoring students and helping them achieve their career goals."
  };

  return (
    <div className="mentor-details">
      <div className="mentor-info">
        <h3>{mentor.name}</h3>
        <p><strong>Email:</strong> {mentor.email}</p>
        <p><strong>Phone:</strong> {mentor.phone}</p>
        <p><strong>Department:</strong> {mentor.department}</p>
        <p><strong>Bio:</strong> {mentor.bio}</p>
      </div>
    </div>
  );
};

export default MentorDetails;