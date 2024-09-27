import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUsPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message Sent by ${name}`);
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUsPage;
