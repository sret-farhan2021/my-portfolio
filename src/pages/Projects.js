// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: 'https://via.placeholder.com/150'
  },
  // Add more projects
];

const Projects = () => {
  return (
    <div className="projects">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
