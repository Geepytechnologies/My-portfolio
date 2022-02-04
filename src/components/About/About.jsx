import React, { useEffect, useRef } from 'react';
import deskman from "../../deskman.webp"
import DownloadIcon from '@mui/icons-material/Download';
import "./About.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js"
import Header from '../Header/Header';

export default function About() {
  const el = useRef(null);
  // typed js useeffect
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Godspower","Enwereuzor"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  // Aos animation useeffect
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []); 
  return (
    <div className='About' id='about'>
       <Header />
       <img src={deskman} alt='desk' height="auto" width="600px" className='deskman'/>
          <div className='left'>
            <div className='leftcontain'>
                <div className='hey montserrat'><h3>HEY THERE!!!</h3></div>
                <div className='hey montserrat'><h3>I'm</h3></div>
                <div className='name'><span className='montserrat iam' ref={el} style={{fontSize: '60px', fontWeight: 700, lineHeight: 1.2}}></span></div>
                <div className='job montserrat'>
                    <h4>FULL STACK WEB DEVELOPER</h4>
                    <h4 className='montserrat'>BLOCKCHAIN PROGRAMMER</h4>
                    <h4 className='montserrat'>MOBILE APP DEVELOPER</h4>
                    <h4 className='montserrat'>WRITER</h4>
                    <h4 className='montserrat'>CONTENT CREATOR</h4>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',justifyContent:'flex-start',height:'50px', alignItems: 'center',width: '100%'}}>
                  <div className='button montserrat'><a href="#contact" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Hire Me</a></div>
                  <div className='button2 montserrat'><a href="./Godspower.pdf" style={{display:'flex',justifyContent:'center',alignItems:'center'}} download="geepy's CV">Get CV<span><DownloadIcon style={{marginLeft: '5px'}}/></span></a></div>
                </div>
            </div>
        </div>
    </div>
)}
