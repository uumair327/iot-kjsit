import React, { useState } from 'react';
import './ContactUsPage.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUsPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Here you can handle the form submission, e.g., send data to your server
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setFile(null);
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <address>
                        <p><FaMapMarkerAlt /> Somaiya Ayurvihar Complex, Eastern Express Highway, Near Everard Nagar, Sion (East), Mumbai – 400 022</p>
                        <p><FaPhone /> (123) 456-7890</p>
                        <p><FaEnvelope /> contact@yourcompany.com</p>
                    </address>
                    <div className="social-media">
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/company/iot-cell-kjsieit/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="map">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4018164951535!2d72.86850597345854!3d19.04606305291512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x473006136ad440dc!2sK.%20J.%20Somaiya%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1727587785830!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        ></iframe>
                    </div>
                </div>
                <div className="contact-form">
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-label="Name"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Email"
                            />
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                aria-label="Subject"
                            >
                                <option value="" disabled>Select Subject</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Support">Support</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                aria-label="Message"
                            />
                            <div className="file-upload">
                                <label htmlFor="file">Attach a file (optional):</label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setFile(e.target.files[0]);
                                        }
                                    }}
                                    aria-label="File Upload"
                                />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    ) : (
                        <div className="thank-you-message">
                            <p>Thank you for your message, {name}! We'll get back to you soon.</p>
                            <button onClick={() => setSubmitted(false)}>Send Another Message</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
