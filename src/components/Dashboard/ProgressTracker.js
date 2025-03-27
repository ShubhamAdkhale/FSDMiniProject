import React from 'react';
import '../../../src/styles/components/Dashboard/ProgressTracker.css';

const ProgressTracker = () => {
  return (
    <div className="progress-tracker">
      <div className="progress-section">
        <h3>Overall Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: '70%' }}>
            <span>70%</span>
          </div>
        </div>
      </div>
      <div className="sdg-alignment">
        <h3>Alignment with SDGs</h3>
        <div className="sdg-bar">
          <div className="sdg" style={{ width: '80%' }}>
            <span>Goal 1: No Poverty - 80%</span>
          </div>
          <div className="sdg" style={{ width: '60%' }}>
            <span>Goal 2: Zero Hunger - 60%</span>
          </div>
        </div>
      </div>
      <div className="feedback-section">
        <h3>Feedback Summary</h3>
        <p>Your mentor has provided positive feedback on your recent project work. Keep up the good effort!</p>
      </div>
    </div>
  );
};

export default ProgressTracker;