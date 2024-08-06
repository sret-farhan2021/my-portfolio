// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact>
            <Projects projects={projects} />
          </Route>
          <Route path="/project/:id">
            <ProjectDetail projects={projects} />
          </Route>
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
