import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';


const About = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      title: 'Privacy Policy for HVM Smart Solutions',
      description: (
        <div><br></br>
          
         <b><h2> 1. Introduction </h2></b>
          <p>
HVM Smart Solutions is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and engage with our services. By using our website or services, you consent to the practices described in this Privacy Policy.
</p><br></br>
<b><h2>2. Information We Collect</h2></b>
<p>
We may collect the following types of personal information:

Contact Information: Name, email address, phone number.
Usage Information: Information about your interactions with our website, including IP address, browser type, and pages visited.
Information You Provide: Information you voluntarily provide when you contact us, such as inquiries or feedback.</p><br></br>
<b><h2>3. How We Use Your Information</h2></b>
<p>
We may use your personal information for the following purposes:

To provide our services to you.
To respond to your inquiries and requests.
To improve our website and services.
To send periodic emails about our services and updates (if you have subscribed).</p><br></br>
<b><h2>4. Sharing Your Information</h2></b>
<p>
We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share your information with trusted third parties who assist us in operating our website and providing our services.
</p><br></br>
<b><h2>5. Security</h2></b>
<p>
We use industry-standard security measures to protect your personal information from unauthorized access or disclosure.
</p><br></br>
<b><h2>6. Your Choices</h2></b>
<p>
You may choose to restrict the collection or use of your personal information. However, this may limit your ability to use some features of our website or services.
</p><br></br>
<b><h2>7. Changes to This Privacy Policy</h2></b>
<p>
We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised Privacy Policy will be effective immediately.
</p><br></br>
<b><h2>8. Contact Us</h2></b>
<p>
If you have any questions or concerns about this Privacy Policy, please contact us at [iotbyhvm@gmail.com].
</p>
   
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
        <div style={headingStyle}>Privacy Policy</div> {/* Heading */}
        {services.map((service, index) => (
          <div key={index} style={serviceStyle}>
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
