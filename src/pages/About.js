import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import hvmlogo from '../images/HVM-logo.png';


const About = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      imageUrl: hvmlogo,
      title: 'Digital Excellence Delivered !',
      description: (
        <div><br></br>
          <p>
          HVM Smart Solutions, a dynamic tech startup based in India, stands as a beacon of innovation and excellence in the digital 
          landscape. With a primary focus on delivering top-notch services, HVM Smart Solutions has garnered a reputation for its 
          exceptional offerings</p><br></br>
          <p>Specializing in Web Development Services, Content Writing & Promotions, Web Designing, WordPress Website Development, the company crafts tailored solutions to meet the unique needs of its clients. Our dedicated team of hardworking professionals brings over three years of invaluable experience to the table, ensuring that every project is executed with precision & finesse.</p><br></br>
        <p>HVM Smart Solutions prides itself on its commitment to staying at the forefront of technological advancements, allowing clients to harness the power of cutting-edge digital solutions. With a client-centric approach and a passion for excellence, HVM Smart Solutions continues to thrive in the ever-evolving tech industry, making them the go-to choice for businesses seeking to elevate their online presence and capabilities</p><br></br>
        </div>
      ),
     
    },
  ];
  
  const containerStyle = {
    paddingTop: '120px',
    marginLeft: '300px',
    width: '60%', // Add top padding to create space for the navbar
  };

  const serviceStyle = {
    backgroundColor: '#f8f8f8',
    padding: '30px',
    margin: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally in the container
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
    width: '100%', 
    textDecoration: 'underline', // Ensure the heading spans the full width
  };

  const h2Style = {
    fontSize: '30px',
    color: 'darkblue',
    fontWeight: 'bold',
  };

  const pStyle = {
    fontSize: '20px',
    color: 'black',
  };


  return (
    <>
      <NavBar />
      <div className="services-container" style={containerStyle}>
        <div style={headingStyle}>About Us</div> {/* Heading */}
        {services.map((service, index) => (
          <div key={index} style={serviceStyle}>
            <img src={service.imageUrl} alt="HVM Smart Solutions Logo" style={{ width: '500px', height: '150px' }} />
           <h2 style={h2Style}>{service.title}</h2>
            <p style={pStyle}>{service.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default About;
