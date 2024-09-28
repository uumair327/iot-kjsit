import React, { useState } from 'react';
import './Navbar.css';
import IoTLogo from './IoT.png';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src={IoTLogo} alt="IoT Logo" className="logo" />
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </button>
            </div>
            <div className="nav-center">
                <h1>IOT</h1>
            </div>
            <div className={`nav-right ${isOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#social">Social</a>
            </div>
        </nav>
    );
};

export default Navbar;
