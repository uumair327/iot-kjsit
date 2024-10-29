// ProjectsPage.tsx
import React from 'react';
import './ProjectsPage.css';

const projects = [
    {
        title: 'Smart Home Automation',
        description: 'A project on automating home appliances using IoT technology.',
        link: '#',
        image: '/smart-home.jpg',
    },
    {
        title: 'IoT Weather Monitoring System',
        description: 'A system to monitor and report weather using IoT sensors.',
        link: '#',
        image: '/weather-monitor.jpg',
    },
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} className="btn">Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;