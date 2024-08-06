// src/data/projectsData.js
import medicalManagementImage from '../asset/medical-management.png';
import healthChallengeTrackerImage from '../asset/health-challenge-tracker.png';
import schoolWebsiteTemplateImage from '../asset/school website.png';
import freelanceReactjsImage from '../asset/react project.png';
import socialMediaHandlerImage from '../asset/social media.png';
import ticTacToeGameImage from '../asset/tic-tac-toe.png';

const projects = [
  {
    id: 1,
    title: 'Medical Management System',
    image: medicalManagementImage,
    description: 'A full stack Angular project for managing medical records and appointments.'
  },
  {
    id: 2,
    title: 'Health Challenge Tracker',
    image: healthChallengeTrackerImage,
    description: 'A frontend Angular project to track health challenges and workouts.'
  },
  {
    id: 3,
    title: 'School Website Template',
    image: schoolWebsiteTemplateImage,
    description: 'A React.js project creating a modern website template for schools.'
  },
  {
    id: 4,
    title: 'Freelance React.js Frontend Project',
    image: freelanceReactjsImage,
    description: 'A React.js project showcasing a freelance frontend development project.'
  },
  {
    id: 5,
    title: 'Social Media Handler',
    image: socialMediaHandlerImage,
    description: 'A multi-page HTML with JS frontend for handling social media interactions.'
  },
  {
    id: 6,
    title: 'Tic Tac Toe Game',
    image: ticTacToeGameImage,
    description: 'A Python-based Tic Tac Toe game that can be played in the console.'
  }
];

export default projects;