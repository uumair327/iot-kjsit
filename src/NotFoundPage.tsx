import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '4rem', color: '#29b6f6', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
                to="/" 
                style={{
                    backgroundColor: '#29b6f6',
                    color: 'white',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e88e5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#29b6f6'}
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
