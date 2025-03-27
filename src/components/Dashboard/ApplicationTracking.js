import React from 'react';
import '../../styles/components/Dashboard/ApplicationTracking.css';

const ApplicationTracking = () => {
  const applications = [
    { id: 1, internship: 'Software Development Intern', status: 'Applied', date: '2023-09-01' },
    { id: 2, internship: 'Marketing Intern', status: 'Interview Scheduled', date: '2023-09-05' },
    { id: 3, internship: 'Data Analyst Intern', status: 'Rejected', date: '2023-09-10' },
    { id: 4, internship: 'Graphic Design Intern', status: 'Offer Accepted', date: '2023-09-15' },  
    { id: 5, internship: 'Business Development Intern', status: 'Offer Received', date: '2023-09-20' },
  ];

  return (
    <div className="application-tracking">
      <table>
        <thead>
          <tr>
            <th>Internship</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.internship}</td>
              <td>{app.status}</td>
              <td>{app.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTracking;