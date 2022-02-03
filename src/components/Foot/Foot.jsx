import "./Foot.css"
import logo from "../Header/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Foot() {
  return (
      <div className="foot">
        <img src={logo} alt="logo" height="auto" width="500px" className="logofade"/>
        <img src={logo} alt="logo" height="auto" width="500px" className="logofade2"/>
        <div className="logosection">
            <div className="logofoot">
              <img src={logo} alt="logo" height="auto" width="80px" />
            </div>
            <div className="geepy">
                <h2 style={{color: 'white'}} className="opensans">Geepy</h2>
            </div>
        </div>
        <div className="Socialicons">
            <FacebookIcon style={{fill: 'white'}}/>
            <TwitterIcon style={{fill: 'white'}}/>
            <InstagramIcon style={{fill: 'white'}}/>
            <LinkedInIcon style={{fill: 'white'}}/>
        </div>
        <div className="copyright">
          <p>copyright<span className="span"><CopyrightIcon style={{fill: 'white', fontSize: '20px'}} /></span>2022 . All rights reserved</p>
        </div>
      </div>
  )
}
