import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/services/Services';
import Foot from './components/Foot/Foot';
import Contact from './components/Contact/Contact';
import Bottomnav from './components/Bottomnav/Bottomnav';

const App = () => {
  return (
      <>
        <About />
        <Skills />
        <Services />
        <Contact />
        <Foot />
        <Bottomnav />
      </>
  )
};


export default App;