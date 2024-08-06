// src/pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData'; // Adjust path as needed

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <img src={project.image} alt={project.title} className="w-full h-60 object-cover mb-4" />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
