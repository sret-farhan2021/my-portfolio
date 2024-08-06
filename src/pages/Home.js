// src/pages/Home.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaGraduationCap, FaCalendar, FaLaptop, FaBuilding, FaBriefcase } from 'react-icons/fa';

// Data for the sections
const sections = [
  { id: 'soft-skills', label: 'Soft Skills', color: 'bg-blue-500', details: [
    { text: 'Leadership', icon: FaUsers },
    { text: 'Communication', icon: FaUsers },
    { text: 'Teamwork', icon: FaUsers },
    { text: 'Event Management', icon: FaCalendar },
  ]},
  { id: 'technical-skills', label: 'Technical Skills', color: 'bg-green-500', details: [
    { text: 'Angular', icon: FaCode },
    { text: 'MongoDB', icon: FaCode },
    { text: 'Python', icon: FaCode },
    { text: 'JavaScript', icon: FaCode },
    { text: 'React', icon: FaCode },
    { text: 'Node.js', icon: FaCode },
  ]},
  { id: 'education', label: 'Education', color: 'bg-red-500', details: [
    { text: 'B.Tech Computer Science', icon: FaGraduationCap },
    { text: 'Specialization in CyberSecurity & IoT', icon: FaLaptop },
    { text: 'Year of Graduation: 2025', icon: FaCalendar },
    { text: 'College: Sri Ramachandra Engineering and Technology', icon: FaBuilding }
  ]},
  { id: 'internship-experience', label: 'Internship Experience', color: 'bg-purple-500', details: [
    { company: 'WealthSarthi', icon: FaBriefcase, job: 'Fullstack Developer (Angular)', duration: '6 months', techStack: 'Angular, TypeScript, HTML, CSS' },
    { company: 'Medicorism UK', icon: FaBriefcase, job: 'Fullstack Developer (WordPress)', duration: '3 months', techStack: 'WordPress, PHP, JavaScript, CSS' },
  ]}
];

// Card Component
const Card = ({ section, onClick }) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-72 h-48 bg-grey rounded-lg shadow-lg ${section.color} p-6 cursor-pointer flex items-center justify-center`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(section)}
    >
      <h3 className="text-xl font-semibold text-white">{section.label}</h3>
    </motion.div>
  );
};

// Modal Component
const Modal = ({ section, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="overflow-y-auto h-full pr-4 pb-16">
          <h2 className="text-2xl font-bold mb-4">{section.label}</h2>
          <div className="space-y-4">
            {section.details.map((item, index) => (
              <div key={index} className={`flex items-center space-x-4 ${section.id === 'internship-experience' ? 'flex-col' : ''}`}>
                <item.icon className="text-3xl text-gray-700" />
                <div className="text-lg">
                  {section.id === 'internship-experience' ? (
                    <>
                      <p className="font-semibold text-lg">{item.company}</p>
                      <p><strong>Job:</strong> {item.job}</p>
                      <p><strong>Duration:</strong> {item.duration}</p>
                      <p><strong>Tech Stack:</strong> {item.techStack}</p>
                    </>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

// Home Page Component
const Home = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  // Handle card click to show modal
  const handleCardClick = (section) => {
    setSelectedSection(section);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedSection(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to My Portfolio</h1>
      <p className="text-lg mb-12 text-center">Here’s a glimpse into who I am and what I do.</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <Card key={section.id} section={section} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      {selectedSection && <Modal section={selectedSection} onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
