import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Home - Sohit's Portfolio",
      "/about": "About Me - Sohit's Portfolio",
      "/portfolio": "Portfolio - Sohit's Portfolio",
      "/contact": "Contact Me - Sohit's Portfolio",
      "*": "Page Not Found - Sohit's Portfolio",
    };
    document.title = pageTitles[location.pathname] || "Sohit's Portfolio";
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const RouterWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default RouterWrapper;
