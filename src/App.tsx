import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import WorkshopsPage from './components/WorkshopsPage';
import ContactUsPage from './components/ContactUsPage';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
  return (
    <Router basename="/iot-kjsit"> {/* Set basename here */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
