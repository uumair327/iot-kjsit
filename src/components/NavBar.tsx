// NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">IoT Club</div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/workshops">Workshops</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="burger" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default NavBar;
