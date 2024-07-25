import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualifications/Qualification';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/ScrollUp/Scrollup';
import Work from './components/Work/Work';


const App = () => {
  return (
    <>
    <Header />
    <main>
      <Home />
      <About/>
      <Skills />
      <Services/>
      <Qualification />
      <Work />
      <Testimonial />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
