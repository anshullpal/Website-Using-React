import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import programmingArticles from './Posts/programmingArticles';

const Programming = () => {
  useDocTitle('HVM Smart Solutions | Digital Excellence Delivered');

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < programmingArticles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: '100px', // Add this to create space below the fixed Navbar
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Align items to the left and right
    alignItems: 'center',
    width: '60%',
    margin: '0 auto',
  };

  const homebutton = {
    fontSize: '15px',
    color: 'white',
    backgroundColor: 'darkblue',
    borderRadius: '10px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.3s',
    hover: {
      backgroundColor: 'blue',
      transform: 'scale(1.1)',
    },
  };

  const buttonStyle1 = {
    padding: '10px 20px',
    margin: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'green',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.3s',
    hover: {
      backgroundColor: 'coral',
      transform: 'scale(1.05)',
    },
  };

  const buttonStyle2 = {
    padding: '10px 20px',
    margin: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'green',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.3s',
    hover: {
      backgroundColor: 'coral',
      transform: 'scale(1.05)',
    },
  };

  const articleContainerStyle = {
    width: '60%', // Set the width to 100% for full-width content
    border: '1px solid #ccc',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    marginBottom: '20px',
    marginLeft: '290px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const articleTitleStyle = {
    fontSize: '40px',
    marginBottom: '10px',
  };

  const articleContentStyle = {
    fontSize: '16px',
    width: '80%',
    margin: '0 auto',
  };

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <div style={headerStyle}>
          <Link to="/blogs" className="back-home-button" style={homebutton}>
            Back to Menu
          </Link>
          <button onClick={handlePreviousClick} style={buttonStyle1}>
            Previous Reads
          </button>
        </div>
        <main className="programming-main">
          <div key={programmingArticles[currentIndex].id} style={articleContainerStyle} className="article-container">
            <h2 style={articleTitleStyle} className="article-title">
              {programmingArticles[currentIndex].title}
            </h2>
            <p style={articleContentStyle} className="article-content">
              {programmingArticles[currentIndex].content}
            </p>
          </div>
        </main>
        <button onClick={handleNextClick} style={buttonStyle2}>
          Next Reads
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Programming;
