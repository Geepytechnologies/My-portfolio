import React, { useEffect } from 'react';
import pic from './gpsvg.png'
import deskman from "../../deskman.webp"
import DownloadIcon from '@mui/icons-material/Download';
import "./About.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Header/Header';

export default function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []); 
  return (
    <div className='About'>
       <Header />
       <img src={deskman} alt='desk' height="auto" width="600px" className='deskman'/>
       <div className='left-right'>
          <div className='left'>
            <div className='leftcontain'>
                <div className='hey poppins'><h3>HEY THERE!!!</h3></div>
                <div className='hey poppins'><h3>I'm</h3></div>
                <div className='name'><h3 className='poppins' style={{fontSize: '60px', fontWeight: 700, lineHeight: 1.2}}>Tahlia McGrath</h3></div>
                <div className='job poppins'><h4>FULL STACK WEB DEVELOPER</h4>
                    <p><h4 className='poppins'>BLOCKCHAIN PROGRAMMER</h4></p>
                    <p><h4 className='poppins'>MOBILE APP DEVELOPER</h4></p>
                    <p><h4 className='poppins'>WRITER</h4></p>
                    <p><h4 className='poppins'>CONTENT CREATOR</h4></p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',justifyContent:'center', alignItems: 'space-between',width: '100%'}}>
                  <div className='buttoncon'><button className='button roboto'>Hire Me</button></div>
                  <div className='buttoncon'><button className='button roboto'>Get CV<span><DownloadIcon /></span></button></div>
                </div>
            </div>
          </div>
          <div className='right' >
              <div className='rightimgcontain'>
                {/*<img src={pic} className='imgcon' alt='pic' height='auto' width='400px'/>*/}
              </div>
          </div>
        </div>
    </div>
)}
