import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Mainservices from './pages/Mainservices';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Blogs from './pages/Blogs';
import Electronics from './categories/Electronics';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Iot from './categories/Iot';
import Talks from './categories/Talks';
import Programming from './categories/Programming';
import About  from './pages/About';
import Privacypolicy from './pages/Privacypolicy';
import Disclaimer from './pages/Disclaimer'
import Carrers from './pages/Carrers';
import Termofuse from './pages/Termofuse';
import Paymentguide from './pages/Paymentguide';
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Hvm Smart Solutions | Digital Excellence Delivered");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/try-our-services" element={<DemoProduct />} /> 
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/blogs/iot" element={<Iot />} /> 
            <Route path="/blogs/talks" element={<Talks />} /> 
            <Route path="/blogs/programming" element={<Programming />} /> 
            <Route path="/blogs/electronics" element={<Electronics />} /> 
            <Route path="/services" element={<Mainservices />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/privacypolicy" element={<Privacypolicy />} /> 
            <Route path="/disclaimer" element={<Disclaimer />} /> 
            <Route path="/carrers" element={<Carrers />} /> 
            <Route path="/termsofuse" element={<Termofuse />} /> 
            <Route path="/paymentguide" element={<Paymentguide />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
