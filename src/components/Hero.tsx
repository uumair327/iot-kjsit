import React, { useEffect, useState } from 'react';
import './Hero.css';
import IoTLogo from './IoT.png'; // Ensure this path is correct
import Typewriter from 'react-typewriter-effect';

const Hero: React.FC = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);

    // Carousel items
    const slides = [
        'Slide 1',
        'Slide 2',
        'Slide 3',
        'Slide 4',
    ];

    // Function to handle mouse movement and calculate rotation
    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerY = window.innerWidth / 2;
        const centerX = window.innerHeight / 2;

        const rotationX = -(clientY - centerY) / 10;
        const rotationY = (clientX - centerX) / 10;

        setRotation({ x: rotationX, y: rotationY });
    };

    // Function to change slide
    const changeSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(changeSlide, 3000); // Change slide every 3 seconds
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearInterval(intervalId); // Clear interval on unmount
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);



    return (
        <section className="hero">
            <div
                className="hero-image"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
            >
                <img src={IoTLogo} alt="IoT Logo" />
            </div>
            <div className="hero-text-carousel">
                <div className="hero-text">
                    <h1>Hello, It's we <span className="typewriter">
                        <Typewriter
                            text="THE IOT CELL"
                            cursor="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delay={2000}
                            onComplete={() => console.log('Animation complete!')}
                        />
                    </span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="carousel-container">
                    <div className="carousel">
                        <div className="carousel-slide">
                            {slides[currentIndex]}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
