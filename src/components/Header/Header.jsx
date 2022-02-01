import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles.css"
import "../Header/Header.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../Header/logo.png"
import {useWindowScrollPositions} from "../../Scrollposition";

const Header = () => {
   const user = true;
   const { scrollX, scrollY } = useWindowScrollPositions();
   const navStyle = {
     background: 'transparent',
     transition: 'all .8s ease'
   }
   const navStyle2 = {
    backgroundImage: 'linear-gradient(to left, #008ab0, #006280)',
    boxShadow: '0px 3px 4px 2px #999999'
  }
  return (
      <div className='nav' style={scrollY < 5 ? navStyle : navStyle2}>
          <div className='logo'>
              <div className='logocontainer'>
                <img src={logo} alt="logo" width="100px" height="auto" />
              </div>
              <div className='logotext'>
                <h1 className='opensans'>Geepy</h1>
              </div>
          </div>
          <div className='navitems'>
                <ul className='list'>
                    <li className='selected'>
                        Home
                    </li>
                    <li className='listitem'>About</li>
                    <li className='listitem'>Services</li>
                    <li className='listitem'>Works</li>
                    <li className='listitem'>Contact</li>
                </ul>
          </div>
          <div className='Socialiconscon'>
              <div className="Socialicons">
                <FacebookIcon style={{fill: 'white'}}/>
                <TwitterIcon style={{fill: 'white'}}/>
                <InstagramIcon style={{fill: 'white'}}/>
                <LinkedInIcon style={{fill: 'white'}}/>
              </div>
          </div>
      </div>
  )
};









export default Header;
