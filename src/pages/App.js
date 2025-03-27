import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import StudentDashboard from './StudentDashboard';
import AvailableInternships from '../components/Dashboard/AvailableInternships';
import ApplicationTracking from '../components/Dashboard/ApplicationTracking';
import ProgressTracker from '../components/Dashboard/ProgressTracker';
import MentorDetails from '../components/Dashboard/MentorDetails';
import FeedbackEvaluation from '../components/Dashboard/FeedbackEvaluation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ProfilePage from '../components/ProfilePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={StudentDashboard} />
        <Route path="/internships" component={AvailableInternships} />
        <Route path="/applications" component={ApplicationTracking} />
        <Route path="/progress-tracker" component={ProgressTracker} />
        <Route path="/mentorship" component={MentorDetails} />
        <Route path="/reports" component={FeedbackEvaluation} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;