import React, { useEffect } from 'react';
import "./Contact.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
      <div className='contact' id='contact'>
          <div data-aos="zoom-in-right" className='discuss'>
              <div className='linecon'>
                  <div className='line'></div>
              </div>
              <h2 className='poppins discusstext'>Let's discuss your project</h2>
              <div className='icons'><CallIcon style={{fill:'#f52225'}}/><span className='poppins info'>+234 810 697 4201</span></div>
              <div className='icons'><EmailIcon style={{fill:'#f52225'}}/><span className='poppins info'>geepytechnologies@gmail.com</span></div>
              <div className='icons'><FmdGoodIcon style={{fill:'#f52225'}}/><span className='poppins info'>Lagos, Nigeria</span></div>
          </div>
          <div data-aos="fade-left" className='form'>
              <p className='poppins formheader'>I'm always open to discussing product design work or partnerships.</p>
              <form className='forms'>
                  <input type="text" placeholder='Name *' className='nameinput1 dmsans'></input>
                  <input type="email" placeholder='Email *' className='nameinput2 dmsans'></input>
                  <input type="text" placeholder='Message *' className='nameinput3 dmsans'></input>
                  <div className='submit dmsans'>Submit</div>
              </form>
          </div>
      </div>
  )
}

export default Contact;
