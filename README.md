# Internship Platform

## Overview
The Internship Platform is a web application designed to help students find internships, track their applications, and connect with mentors. The platform aligns with Sustainable Development Goals (SDGs) and provides tools for students to manage their internship experiences effectively.

## Features
- **Landing Page**: A welcoming interface for users to learn about the platform and navigate to different sections.
- **Student Dashboard**: A comprehensive dashboard for students that includes:
  - Available Internships
  - Application Tracking
  - Mentor Details
  - Internship Progress Tracker
  - Feedback & Evaluation

## Project Structure
```
internship-platform
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   └── Dashboard
│   │       ├── AvailableInternships.js
│   │       ├── ApplicationTracking.js
│   │       ├── MentorDetails.js
│   │       ├── ProgressTracker.js
│   │       └── FeedbackEvaluation.js
│   ├── pages
│   │   ├── LandingPage.js
│   │   └── StudentDashboard.js
│   ├── App.js
│   ├── index.js
│   └── styles
│       ├── LandingPage.css
│       ├── StudentDashboard.css
│       └── components
│           ├── Header.css
│           ├── Sidebar.css
│           └── Dashboard
│               ├── AvailableInternships.css
│               ├── ApplicationTracking.css
│               ├── MentorDetails.css
│               ├── ProgressTracker.css
│               └── FeedbackEvaluation.css
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd internship-platform
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.