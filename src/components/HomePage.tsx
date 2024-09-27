import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>IoT Club</h1>
            <p>Welcome to the IoT Club of KJSIT. We innovate and create exciting projects in the field of the Internet of Things.</p>

            <h2>Club Highlights</h2>
            <ul>
                <li>Workshops and Seminars</li>
                <li>Project Showcases</li>
                <li>Hackathons</li>
            </ul>

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
        </div>
    );
};

export default HomePage;
