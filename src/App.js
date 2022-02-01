import React, { useEffect } from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/services/Services';
import Foot from './components/Foot/Foot';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {
  return (
      <>
        <About />
        <Skills />
        <Services />
        <Foot />
      </>
  )
};


export default App;