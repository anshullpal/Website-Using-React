import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import BlogTemplate from '../pages/BlogTemplate'; // Import the BlogTemplate component
import Menu from '../components/Menu'; // Import the Menu component
import Services from '../components/Services';

const Blogs = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered')
  // ... (rest of your Contact component code)

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <Menu /> {/* Use the Menu component here */}
          {/* Rest of your Contact component code */}
        </div>
      </div>
      <BlogTemplate/>
      <Services/>
      <Footer />
    </>
  );
}



export default Blogs;
