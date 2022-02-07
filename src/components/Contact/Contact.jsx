import React, { useEffect } from 'react';
import "./Contact.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AOS from "aos";
import "aos/dist/aos.css";
import Form from './Form';

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
              <div className='whatsappcon'><a href="https://wa.me/2348106974201"><WhatsAppIcon className='whatsapp' style={{fill: '#43c253', fontSize: 60}}/></a><span className='poppins info'>send me a message on whatsapp</span></div>
          </div>
          <Form />
      </div>
  )
}

export default Contact;
