import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Carrersimg from '../images/Carrers.jpg';

const Carrers = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      imageUrl: Carrersimg,
    },
  ];

  const containerStyle = {
    paddingTop: '120px',
    marginLeft: '300px',
    width: '60%',
  };

  const serviceStyle = {
    padding: '30px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s', // Add transition for zoom effect
    transformOrigin: 'center center',
  };

  const imageStyle = {
    width: '1000px',
    height: '400px',
    transition: 'transform 0.3s', // Add transition for zoom effect
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
    width: '100%',
    textDecoration: 'underline',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavBar />
      <div className="services-container" style={containerStyle}>
        <div style={headingStyle}>Careers at HVM</div>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              ...serviceStyle,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply zoom effect on hover
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={service.imageUrl}
              alt="HVM Smart Solutions Logo"
              style={{
                ...imageStyle,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply zoom effect on hover
              }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Carrers;
