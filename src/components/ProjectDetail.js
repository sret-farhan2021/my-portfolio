// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
