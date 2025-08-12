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
        title: 'Introduction to IoT',
        description: 'In this workshop, participants will learn the fundamentals of the Internet of Things, covering the basic concepts of IoT technology and its applications in various industries. The workshop includes practical exercises that demonstrate how to connect devices to the internet, enabling them to send and receive data. Participants will gain insights into cloud platforms, data analytics, and how to create simple IoT projects.',
        date: 'March 15, 2025',
        time: '10:00 AM - 12:00 PM',
        contentCovered: 'Basic IoT concepts, connecting devices, cloud platforms, and hands-on projects.',
        speaker: 'Dr. Rajesh Kumar',
        duration: '2 hours',
    },
    {
        title: 'Advanced Arduino Programming',
        description: 'This workshop dives deeper into the world of Arduino programming, focusing on advanced coding techniques and sensor integration. Participants will learn how to create complex projects, utilize various sensors, and optimize their Arduino programs for efficiency. The hands-on approach will empower attendees to build innovative applications using Arduino, bridging the gap between hardware and software development.',
        date: 'March 22, 2025',
        time: '2:00 PM - 4:00 PM',
        contentCovered: 'Advanced coding techniques, sensor integration, and project optimization.',
        speaker: 'Omkar Jarhad, Himey Sankhe',
        duration: '2 hours',
    },
    {
        title: 'IoT Security Fundamentals',
        description: 'Understand the critical security challenges that arise in the IoT ecosystem in this comprehensive workshop. Participants will learn about various security protocols, encryption techniques, and best practices for mitigating risks associated with IoT deployments. The session will also cover vulnerability assessments and how to implement secure IoT solutions, ensuring that participants are well-prepared to address security concerns in their projects.',
        date: 'March 29, 2025',
        time: '11:00 AM - 1:00 PM',
        contentCovered: 'Security protocols, encryption, vulnerability assessment, and secure IoT deployments.',
        speaker: 'Prof. Anita Sharma',
        duration: '2 hours',
    },
    {
        title: 'Web Development for IoT',
        description: 'Learn the basics of web development with HTML, CSS, and JavaScript specifically for IoT applications. This workshop covers creating dashboards, data visualization, and real-time monitoring interfaces for IoT devices.',
        date: 'April 5, 2025',
        time: '9:00 AM - 11:00 AM',
        contentCovered: 'HTML, CSS, JavaScript, IoT dashboards, data visualization.',
        speaker: 'Mr. Vikram Patel',
        duration: '2 hours',
    },
    {
        title: 'Git and GitHub for IoT Projects',
        description: 'Learn the basics of version control with Git and how to use GitHub for collaboration and project management in IoT development. This workshop covers branching strategies, code reviews, and project documentation.',
        date: 'April 12, 2025',
        time: '3:00 PM - 5:00 PM',
        contentCovered: 'Git basics, GitHub collaboration, branching, code reviews.',
        speaker: 'Ms. Priya Singh',
        duration: '2 hours',
    },
    {
        title: 'AI and Machine Learning for IoT',
        description: 'Explore the world of AI and ML with popular frameworks like TensorFlow and PyTorch, specifically applied to IoT data analysis and edge computing scenarios.',
        date: 'April 19, 2025',
        time: '1:00 PM - 3:00 PM',
        contentCovered: 'TensorFlow, PyTorch, edge computing, IoT data analysis.',
        speaker: 'Dr. Amit Verma',
        duration: '2 hours',
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

                        {/* Registration button for upcoming workshops */}
                        <button className="register-button" onClick={() => alert(`Registration for ${workshop.title} will open soon!`)}>
                            Register for Workshop
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopsPage;
