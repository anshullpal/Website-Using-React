import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';


const Disclaimer = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      title: 'Disclaimer for HVM Smart Solutions',
      description: (
        <div><br></br>
          
         <b><h2> 1. Website Disclaimer </h2></b>
          <p>
          The information provided on the HVM Smart Solutions website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p><br></br>
<b><h2>2. Professional Advice</h2></b>
<p>
The information on this website is not intended as professional advice. It is not a substitute for seeking professional advice or services from qualified individuals or entities. You should not rely solely on the information on this website for making decisions that could affect your business or personal affairs. Always consult with professionals when needed.</p><br></br>
<b><h2>3. External Links</h2></b>
<p>
Our website may contain links to external websites or resources that are not under our control. We do not endorse or accept responsibility for the content, products, or services offered by these external websites. Visiting external websites linked from our site is at your own risk.</p><br></br>
<b><h2>4. Limitation of Liability</h2></b>
<p>
In no event will HVM Smart Solutions be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
</p><br></br>
<b><h2>5. Changes to Disclaimer</h2></b>
<p>
We reserve the right to amend this Disclaimer at any time to reflect changes in our business practices, website content, or applicable laws and regulations. Any changes to this Disclaimer will be posted on our website.
</p><br></br>
<b><h2>6. Contact Information</h2></b>
<p>
If you have any questions or concerns regarding this Disclaimer, please contact us at [iotbyhvm@gmail.com].</p><br></br>

   
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
        <div style={headingStyle}>Disclaimer</div> {/* Heading */}
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

export default Disclaimer;
