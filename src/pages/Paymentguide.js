import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';


const Paymentguide = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const services = [
    {
      title: 'Payment Guide for HVM Smart Solutions',
      description: (
        <div><br></br>
        <p>Thank you for choosing HVM Smart Solutions for your digital needs. This Payment Guide is designed to assist you in making payments for our services. Please review the following information carefully.</p>
          <br></br>
         <b><h2> 1. Accepted Payment Methods </h2></b>
          <p><ul> <li>HVM Smart Solutions accepts the following payment methods:</li>

<li><b>Bank Transfers:</b> You can make payments via direct bank transfers. Our bank details will be provided upon request or as part of our invoice.</li>
<li><b>UPI (Unified Payments Interface):</b> You can also make payments using UPI. Our UPI ID will be provided upon request or as part of our invoice.</li></ul>
</p><br></br>
<b><h2>2. Invoice</h2></b>
<p>
After discussing your project requirements and receiving a formal agreement, we will provide you with an invoice that outlines the scope of work, project cost, and payment details.</p><br></br>
<b><h2>3. Payment Process</h2></b>
<p>Please follow these steps to make a payment:</p>
<p><ul><li><b>Step 1:</b> Review the invoice: Carefully review the invoice to ensure all details are accurate, including the project description, payment amount, and due date.</li>
<li><b>Step 2:</b> Choose your payment method: Select your preferred payment method from the accepted options mentioned above.</li>
<li><b>Step 3:</b> Make the payment: Proceed to make the payment using the chosen method. You will receive a confirmation email once the payment is processed.</li></ul></p>
<br></br>
<b><h2>4. Payment Terms</h2></b>
<p><ul>
<li><b>Advance Payment:</b> In most cases, we require an upfront advance payment before commencing work. The advance amount will be specified in your invoice.</li>

<li><b>Payment Schedule: </b>For larger projects, payment schedules may be established to ensure payments are made at specific project milestones.</li>

<li><b>Late Payments: </b>Payments are due as specified in the invoice. Late payments may incur additional charges or affect project timelines. Please inform us in advance if there will be any delays in payment.</li></ul>
</p><br></br>
<b><h2>5. Receipt and Confirmation</h2></b>
<p>
Upon successful payment, you will receive a payment receipt and confirmation via email. Please retain this receipt for your records.
</p><br></br>
<b><h2>6. Refunds</h2></b>
<p>
Refund policies may vary depending on the nature of the project and services provided. Details regarding refunds, if applicable, will be included in your project agreement.</p><br></br>
<b><h2>7. Contact Information</h2></b>
<p>
If you have any questions or require assistance with the payment process, please feel free to contact our accounts department at [iotbyhvm@gmail.com].</p><br></br>

<p>
Thank you for choosing HVM Smart Solutions. We look forward to providing you with exceptional digital services.</p><br></br>

   
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
        <div style={headingStyle}>Payment Guide</div> {/* Heading */}
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

export default Paymentguide;
