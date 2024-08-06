// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <Link to="/" className="p-2 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/projects" className="p-2 hover:bg-gray-700 rounded">Projects</Link>
          <Link to="/contact" className="p-2 hover:bg-gray-700 rounded">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
