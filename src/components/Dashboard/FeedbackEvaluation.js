import React from 'react';
import '../../styles/components/Dashboard/FeedbackEvaluation.css';

const FeedbackEvaluation = () => {
  return (
    <div className="feedback-evaluation">
      <div className="feedback-list">
        <div className="feedback-item">
          <h3>Internship at TechCorp</h3>
          <p>Feedback: Great performance, showed excellent problem-solving skills.</p>
          <p>Evaluation Score: 9/10</p>
        </div>
        <div className="feedback-item">
          <h3>Internship at MarketPro</h3>
          <p>Feedback: Good communication skills, but needs to improve on project management.</p>
          <p>Evaluation Score: 7/10</p>
        </div>
        {/* Add more feedback items as needed */}
      </div>
    </div>
  );
};

export default FeedbackEvaluation;