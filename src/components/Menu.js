import React from 'react';

function Menu() {
  const navbarStyle = {
    padding: '10px',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'Darkblue',
    textAlign: 'center',
    margin: '40px 40px',
    padding: '5px', // Add margin to separate it from the menu
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    marginRight: '143px',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'color 0.3s ease', // Smooth color transition on hover
  };

  // Apply styles only on hover
  const hoverStyle = {
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={navbarStyle}>
      <h1 style={headingStyle}>📖 Welcome to the Learning Club of HVM Guide 📚</h1>
      <a
        className="navbar-brand"
        href="/blogs"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = 'blue')} // Apply hover style on mouse enter
        onMouseLeave={(e) => (e.target.style.color = 'black')} // Reset color on mouse leave
      >
        <i />Explore with HVM Guide
      </a>
      <a
        className="navbar-brand"
        href="/blogs/iot"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = 'blue')}
        onMouseLeave={(e) => (e.target.style.color = 'black')}
      >
        Internet of Things
      </a>
      <a
        className="navbar-brand"
        href="/blogs/electronics"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = 'blue')}
        onMouseLeave={(e) => (e.target.style.color = 'black')}
      >
        Electronics
      </a>
      <a
        className="navbar-brand"
        href="/blogs/talks"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = 'blue')}
        onMouseLeave={(e) => (e.target.style.color = 'black')}
      >
        Tech Talks
      </a>
      <a
        className="navbar-brand"
        href="/blogs/programming"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = 'blue')}
        onMouseLeave={(e) => (e.target.style.color = 'black')}
      >
        Programming
      </a>
    </nav>
  );
}

export default Menu;
