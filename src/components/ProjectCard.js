// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">Learn More</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
