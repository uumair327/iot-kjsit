// ProjectsPage.tsx
import React from 'react';
import './ProjectsPage.css';

const projects = [
    {
        title: 'Smart Home Automation',
        description: 'A project on automating home appliances using IoT technology.',
        link: '#',
        image: 'https://via.placeholder.com/300x200?text=Smart+Home',
    },
    {
        title: 'IoT Weather Monitoring System',
        description: 'A system to monitor and report weather using IoT sensors.',
        link: '#',
        image: 'https://via.placeholder.com/300x200?text=Weather+Monitor',
    },
    {
        title: 'Smart Agriculture System',
        description: 'Monitor soil moisture, temperature, and humidity for optimal crop growth.',
        link: '#',
        image: 'https://via.placeholder.com/300x200?text=Smart+Agriculture',
    },
    {
        title: 'IoT Security Camera',
        description: 'Real-time monitoring and alert system using IoT-enabled cameras.',
        link: '#',
        image: 'https://via.placeholder.com/300x200?text=Security+Camera',
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