// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>About Me</h1>
      <p>Hello, I'm Farhan, a final year B.Tech Computer Science student at Sri Ramachandra Engineering and Technology with a CGPA of above 7.5. I have experience as a Fullstack Developer (Angular) at WealthSarthi, Fullstack Developer (WordPress) at Medicorism, and as a Freelance React.js Frontend Developer.</p>
      <p>My strong points include event management, reading, crafts, and gaming.</p>
    </motion.div>
  );
}

export default Home;
