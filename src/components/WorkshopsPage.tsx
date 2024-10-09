import React from 'react'; 
import './WorkshopsPage.css'; // Assuming you are using CSS for styles

// Define a type for workshop data to ensure consistency
type Workshop = {
    title: string;
    description: string;
    resources?: string; // Optional resources link
    date: string;
    time: string;
    contentCovered: string;
    speaker: string; // Added speaker field
    duration: string; // Added duration field
};

const workshops: Workshop[] = [
    {
        title: 'Intro to IoT',
        description: 'In this workshop, participants will learn the fundamentals of the Internet of Things, covering the basic concepts of IoT technology and its applications in various industries. The workshop includes practical exercises that demonstrate how to connect devices to the internet, enabling them to send and receive data. Participants will gain insights into cloud platforms, data analytics, and how to create simple IoT projects.',
        resources: '/resources/intro-to-iot.pdf',
        date: 'October 5, 2024',
        time: '10:00 AM - 12:00 PM',
        contentCovered: 'Basic IoT concepts, connecting devices, cloud platforms, and hands-on projects.',
        speaker: 'dshjbgkn', // Added speaker name
        duration: '2 hours', // Added duration
    },
    {
        title: 'Advanced Arduino',
        description: 'This workshop dives deeper into the world of Arduino programming, focusing on advanced coding techniques and sensor integration. Participants will learn how to create complex projects, utilize various sensors, and optimize their Arduino programs for efficiency. The hands-on approach will empower attendees to build innovative applications using Arduino, bridging the gap between hardware and software development.',
        resources: '/resources/advanced-arduino.pdf',
        date: 'October 12, 2024',
        time: '2:00 PM - 4:00 PM',
        contentCovered: 'Advanced coding techniques, sensor integration, and project optimization.',
        speaker: 'Omkar Jarhad, Himey Sankhe', // Added speaker name
        duration: '2 hours', // Added duration
    },
    {
        title: 'IoT Security',
        description: 'Understand the critical security challenges that arise in the IoT ecosystem in this comprehensive workshop. Participants will learn about various security protocols, encryption techniques, and best practices for mitigating risks associated with IoT deployments. The session will also cover vulnerability assessments and how to implement secure IoT solutions, ensuring that participants are well-prepared to address security concerns in their projects.',
        resources: '/resources/iot-security.pdf',
        date: 'October 19, 2024',
        time: '11:00 AM - 1:00 PM',
        contentCovered: 'Security protocols, encryption, vulnerability assessment, and secure IoT deployments.',
        speaker: 'sjenjhnvfe', // Added speaker name
        duration: '2 hours', // Added duration
    },
];

const WorkshopsPage: React.FC = () => {
    return (
        <div className="workshops-container">
            <h1>Workshops</h1>
            <div className="workshop-list">
                {workshops.map((workshop, index) => (
                    <div className="workshop-item" key={index}>
                        <h2>{workshop.title}</h2>
                        <p>{workshop.description}</p>
                        
                        <div className="details">
                            <p><strong>Date:</strong> {workshop.date}</p>
                            <p><strong>Time:</strong> {workshop.time}</p>
                            <p><strong>Duration:</strong> {workshop.duration}</p>
                            <p><strong>Speaker:</strong> {workshop.speaker}</p>
                            <p><strong>Content Covered:</strong> {workshop.contentCovered}</p>
                        </div>

                        {/* Conditionally render the resources link if resources are available */}
                        {workshop.resources && (
                            <a className="download-link" href={workshop.resources} target="_blank" rel="noopener noreferrer">
                                Download Resources
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopsPage;
