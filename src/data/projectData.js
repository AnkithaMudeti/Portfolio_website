export const projectsSection = {
  title: 'Featured Projects',
  subtitle:
    'A collection of projects showcasing full stack development, problem solving and software engineering skills.',
};

import campusImg from '../assets/images/projects/campus-lost-found.png';
import criminalImg from '../assets/images/projects/criminal-behavior.png';
import fraudImg from '../assets/images/projects/fraud-detection.png';
import rpsImg from '../assets/images/projects/rock-paper-scissors.png';

export const projectData = [
  {
    id: 'campus-lost-found',
    title: 'Campus Lost and Found Portal',
    category: 'Full Stack Application',
    description:
      'Built a responsive web application to manage lost and found items with secure authentication and efficient item tracking.',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    features: ['Authentication', 'CRUD Operations', 'Responsive UI', 'Search and Filter'],
    githubUrl: 'https://github.com/AnkithaMudeti/Campus-Lost-and-Found-portal',
    liveUrl: null,
    image: campusImg,
    alt: 'Campus Lost and Found preview',
  },
  {
    id: 'criminal-behavior',
    title: 'Criminal Behavior Assessment Mapping',
    category: 'Machine Learning Project',
    description:
      'Developed a prediction system using KNN and ANN algorithms to analyze criminal behavior patterns and improve decision making.',
    techStack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'KNN', 'RNN', 'Machine Learning'],
    features: ['Prediction System', 'Pattern Analysis', 'Data Processing'],
    githubUrl: null,
    liveUrl: null,
    privateRepo: true,
    image: criminalImg,
    alt: 'Criminal Behavior mapping preview',
  },
  {
    id: 'fraud-detection',
    title: 'Fraudulent Credit Card Detection',
    category: 'Detection System',
    description:
      'Created a fraud detection application to identify suspicious transactions and improve financial security.',
    techStack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Aggregate Voting', 'Adaptive Boosting'],
    features: ['Fraud Detection', 'Data Analysis', 'Security Monitoring'],
    githubUrl: null,
    liveUrl: null,
    privateRepo: true,
    image: fraudImg,
    alt: 'Fraud detection dashboard preview',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Game',
    category: 'Frontend Project',
    description:
      'Interactive browser-based game with dynamic score tracking and responsive user interface.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive Design', 'Game Logic', 'Score Tracking'],
    githubUrl: 'https://github.com/AnkithaMudeti/Rock-Paper-Scissors-Game',
    liveUrl: null,
    image: rpsImg,
    alt: 'Rock Paper Scissors game preview',
  },
];

export const comingSoonProject = {
  id: 'coming-soon',
  title: 'More Projects Coming Soon',
  message: 'Currently building new full stack applications and open-source contributions.',
  isComingSoon: true,
};
