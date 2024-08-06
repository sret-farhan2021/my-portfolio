// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>Learn More</Link>
    </div>
  );
}

export default ProjectCard;
