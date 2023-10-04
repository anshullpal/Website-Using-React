import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';


const Termofuse = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      title: 'Terms of Use for HVM Smart Solutions',
      description: (
        <div><br></br>
          
         <b><h2> 1. Use of Website and Services </h2></b>
          <p><ul> <li>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years old.</li>

<li>You agree to use our Website and Services only for lawful purposes and in accordance with these Terms.</li>

<li>You shall not use our Website or Services in any way that may impair, damage, or interfere with our systems or networks.</li></ul>
</p><br></br>
<b><h2>2. Intellectual Property</h2></b>
<p>
The content, logos, trademarks, and other intellectual property on our Website are owned by HVM Smart Solutions and protected by applicable intellectual property laws. You may not use or reproduce any of our intellectual property without our prior written consent.</p><br></br>
<b><h2>3. Privacy Policy</h2></b>
<p>
Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our Website and Services, you consent to the practices described in our Privacy Policy.</p><br></br>
<b><h2>4. Disclaimer</h2></b>
<p>
Our Website and Services are provided "as is" and "as available" without any warranties, either expressed or implied. We disclaim all warranties of any kind, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
</p><br></br>
<b><h2>5. Limitation of Liability</h2></b>
<p>
To the fullest extent permitted by law, HVM Smart Solutions shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our Website or Services.
</p><br></br>
<b><h2>6. Termination</h2></b>
<p>
We reserve the right to terminate or suspend your access to our Website and Services at our discretion, without notice, for any reason, including if we believe you have violated these Terms.</p><br></br>
<b><h2>7. Changes to Terms</h2></b>
<p>
We may update these Terms from time to time. Any changes will be posted on this page, and the revised Terms will be effective immediately.</p><br></br>
<b><h2>8. Contact Us</h2></b>
<p>
If you have any questions or concerns regarding these Terms of Use, please contact us at [iotbyhvm@gmail.com].</p><br></br>

   
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
        <div style={headingStyle}>Terms of Use</div> {/* Heading */}
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

export default Termofuse;
