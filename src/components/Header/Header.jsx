import "../../styles.css"
import "../Header/Header.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Header/logo.png"
//import {useWindowScrollPositions} from "../../Scrollposition";

const Header = () => {
  // const { scrollX, scrollY } = useWindowScrollPositions();
   const navStyle2 = {
    backgroundImage: 'linear-gradient(to left, #008ab0, #006280)',
    boxShadow: '0px 3px 4px 2px #999999'
  }
  return (
      <div className='nav' style={navStyle2} id='#header'>
          <div className='logo'>
              <div className='logocontainer'>
                <img src={logo} alt="logo" width="100px" height="auto" className='logoimg' />
              </div>
              <div className='logotext'>
                <h1 className='opensans'>Geepy</h1>
              </div>
          </div>
          <div className='navitems'>
                <ul className='list'>
                    <a href="#about"><li className='listitem'>
                        Home
                    </li></a>
                    <a href='#skills'><li className='listitem'>About</li></a>
                    <a href="#services"><li className='listitem'>Services</li></a>
                    <li className='listitem'>Works</li>
                    <a href="#contact"><li className='listitem'>Contact</li></a>
                </ul>
          </div>
          <div className='menu'>
            <MenuIcon style={{fill: 'white',fontSize: '30px'}}/>
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
