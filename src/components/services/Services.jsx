import "./Services.css"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import fill from "../../gradientfill2.jpg"
//import block from "../../icons8-block-chain-80.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Services() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []); 
  return(
    <div style={{marginBottom: 80}} className="servicescon">
      <img src={fill} alt="fill" className="fillimg" width="100%" height="510px" />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p className="montserrat pservices">OUR SERVICES</p>
      </div>
      <div data-aos="fade-up" className="services">
        <div className="firstcard" style={{backgroundColor: 'hsl(0,0%,90%)'}}>
          <LanguageIcon style={{fontSize:'100px', fill: 'goldenrod', flexBasis: "40%"}}/>
          <div className="header poppins">web development</div>
          <div className="text">asdfghjk</div>
        </div>
        <div className="secondcard" style={{backgroundColor: 'hsl(0,0%,90%)',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <PhoneIphoneIcon style={{fontSize:'100px', fill: 'goldenrod',flexBasis: "40%"}}/>
          <div className="header poppins">Android/ios App development</div>
          <div className="text">asdfghjk</div>
        </div>
        <div className="thirdcard" style={{backgroundColor: 'hsl(0,0%,90%)',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <ArticleIcon style={{fontSize:'100px', fill: 'goldenrod',flexBasis: "40%"}}/>
          <div className="header poppins">Blockchain Programming</div>
          <div className="text">asdfghjkl;</div>
        </div>
      </div>
    </div>
  )
}
