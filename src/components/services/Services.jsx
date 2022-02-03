import "./Services.css"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
//import block from "../../icons8-block-chain-80.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Services() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []); 
  return(
    <div style={{marginBottom: 80}} className="servicescon" id="services">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p className="montserrat pservices">OUR SERVICES</p>
      </div>
      <div data-aos="fade-up" className="services">
        <div className="firstcard" style={{backgroundColor: 'hsl(0,0%,90%)'}}>
          <LanguageIcon style={{fontSize:'100px', fill: 'goldenrod', flexBasis: "40%"}}/>
          <div className="header poppins">Web development</div>
          <div className="text3"><p>Designing and developing <br></br>of stylish and intuitive modern websites using different front end technologies that match up your desires.</p></div>
        </div>
        <div className="secondcard" style={{backgroundColor: 'hsl(0,0%,90%)',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <PhoneIphoneIcon style={{fontSize:'100px', fill: 'goldenrod',flexBasis: "40%"}}/>
          <div className="header poppins">Android/ios App development</div>
          <div className="text3">Designing and building <br></br>of <br></br>scalable and interactive Android/ios apps</div>
        </div>
        <div className="thirdcard" style={{backgroundColor: 'hsl(0,0%,90%)',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <ArticleIcon style={{fontSize:'100px', fill: 'goldenrod',flexBasis: "40%"}}/>
          <div className="header poppins">Blockchain Programming</div>
          <div className="text3">writing and deployment<br></br> of <br></br>smart contracts </div>
        </div>
      </div>
    </div>
  )
}
