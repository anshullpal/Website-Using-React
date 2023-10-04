import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Cta from '../components/Cta';
import image1 from '../images/web-design.jpg';
import image2 from '../images/content-writing.jpg';
import image3 from '../images/wordpress.jpg';

const Mainservices = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      title: 'Web Development & Web designing Services',
      description: 'We excel in crafting tailored web solutions, creating responsive and feature-rich websites aligned with your business goals. Our team of experts harnesses the latest technologies to ensure your online presence is both functional and visually appealing. Experience innovation and reliability with our web development services.',
      imageUrl: image1, 
    },
    {
      title: 'Content Writing & Promotions',
      description: 'Our content experts are skilled in crafting engaging and SEO-friendly content to boost your brand. We create compelling narratives, delivering your message effectively to the target audience. With our expertise in content promotion, we ensure your content gets the visibility it deserves in the digital landscape.           ',
      imageUrl: image2,
    },
    {
      title: 'Wordpress Website Development',
      description: 'We are experts in crafting custom WordPress websites that suit your unique needs. Leveraging the power of WordPress, we create versatile, scalable, and easy-to-manage sites. From blogs to e-commerce platforms, we provide tailored solutions, empowering you to effectively communicate & transact in the digital world.',
      imageUrl: image3,
    },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: '120px', // Add top padding to create space for the navbar
  };

  const serviceStyle = {
    flex: '0 0 calc(30% - 10px)', // Two columns with some spacing
    marginLeft: '120px',
    marginRight: '120px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ddd',
    borderRadius: '8px',
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
    color: 'black',
    fontWeight: 'bold',
  };

  const pStyle = {
    fontSize: '20px',
    color: 'darkblue',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'darkblue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <>
      <NavBar />
      <div className="services-container" style={containerStyle}>
        <div style={headingStyle}>Our Services</div> {/* Heading */}
        {services.map((service, index) => (
          <div key={index} style={serviceStyle}>
            <img src={service.imageUrl} alt={service.title} style={{ width: '330px', height: '200px' }} /> {/* Increase the image size */}
            <h2 style={h2Style}>{service.title}</h2>
            <p style={pStyle}>{service.description}</p>
            <a href="/try-our-services"> <button  style={buttonStyle}>Send Message</button></a>
          </div>
        ))}
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default Mainservices;
