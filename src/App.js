import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
