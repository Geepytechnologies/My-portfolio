import "./Bottomnav.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import CallIcon from '@mui/icons-material/Call';


const Bottomnav = () => {
  return (
      <div className='bottomnav'>
        <div className="iconscon">
          <a href="#about"><div className="home">
            <HomeIcon className="fontnav"/>
            <p className="textnav">Home</p>
          </div></a>
          <a href="#about"><div className="about">
            <PersonIcon className="fontnav"/>
            <p className="textnav">About</p>
          </div></a>
          <a href="#services"><div className="servicesbottom">
            <SettingsIcon className="fontnav"/>
            <p className="textnav">Services</p>
          </div></a>
          <a href="#services"><div className="works">
            <BuildIcon className="fontnav"/>
            <p className="textnav">Works</p>
          </div></a>
          <a href="#contact"><div className="contactbottom">
            <CallIcon className="fontnav"/>
            <p className="textnav">Contact</p>
          </div></a>
        </div>
      </div>
  )
};

export default Bottomnav;
