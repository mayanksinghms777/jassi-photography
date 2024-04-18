import React from 'react'
import './App.css';
import './App.scss';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Portfolio_wedding from './components/Portfolio_wedding';
import Portfolio_classic from './components/Portfolio_classic';
import Portfolio_escapades from './components/Portfolio_escapades';
import Portfolio_travel from './components/Portfolio_travel';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Routes basename="/jassi-photography">
            <Route path="/jassi-photography" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio_wedding" element={<Portfolio_wedding />} />
            <Route path="/portfolio_classic" element={<Portfolio_classic />} />
            <Route path="/portfolio_escapades" element={<Portfolio_escapades />} />
            <Route path="/portfolio_travel" element={<Portfolio_travel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
