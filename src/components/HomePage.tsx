// HomePage.tsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <section className="intro">
                <h1>IoT Club</h1>
                <p>Welcome to the IoT Club of KJSIT. We innovate and create exciting projects in the field of the Internet of Things.</p>
            </section>

            <section className="highlights">
                <h2>Club Highlights</h2>
                <div className="highlight-cards">
                    <div className="highlight-card">Workshops and Seminars</div>
                    <div className="highlight-card">Project Showcases</div>
                    <div className="highlight-card">Hackathons</div>
                </div>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/image1.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h3>Project Showcase</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/image2.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Workshop</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default HomePage;
