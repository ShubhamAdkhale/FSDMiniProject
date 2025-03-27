import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AvailableInternships from '../components/Dashboard/AvailableInternships';
import ApplicationTracking from '../components/Dashboard/ApplicationTracking';
import MentorDetails from '../components/Dashboard/MentorDetails';
import ProgressTracker from '../components/Dashboard/ProgressTracker';
import FeedbackEvaluation from '../components/Dashboard/FeedbackEvaluation';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Header />
      <div className="dashboard-hero">
        <h1>Welcome to Your Dashboard</h1>
        <p>Track your progress, manage applications, and connect with mentors.</p>
      </div>
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <section id="available-internships" className="dashboard-section">
            <h2>Available Internships</h2>
            <AvailableInternships />
          </section>
          <section id="my-applications" className="dashboard-section">
            <h2>My Applications</h2>
            <ApplicationTracking />
          </section>
          <section id="progress-tracker" className="dashboard-section">
            <h2>Progress Tracker</h2>
            <ProgressTracker />
          </section>
          <section id="mentorship" className="dashboard-section">
            <h2>Mentorship</h2>
            <MentorDetails />
          </section>
          <section id="reports-analytics" className="dashboard-section">
            <h2>Reports & Analytics</h2>
            <FeedbackEvaluation />
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;