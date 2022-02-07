import './Skills.css'

import { useRef} from 'react'

export default function Skills() {
   const el = useRef(null);
   const el2 = useRef(null);
  return (
      <div className='container' id='skills'>
         <div className='aboutme'>
                <div className='about-text'>
                    <h2 className='montserrat' style={{padding: 5}}>About me</h2>
                    <p style={{fontSize: '16px'}} className='poppins'>I design and develop services for customers, specializing in creating stylish, <br></br>modern websites, web applications, Mobile applications.</p>
                    <div  className='laptop'></div>
                </div>
         </div>
         <div className='skills' >
                <h2 className='poppins'>Skills</h2>
                <div className='skillcontainer'>
                    <div className='htmlcon'>
                        <div className='textcon'>
                            <div className='text'><h5>html</h5></div>
                            <div className='text2'><h5>90%</h5></div>
                        </div>
                        <div className='grey'>
                            <div className='html'></div>
                        </div>
                    </div>
                    <div className='csscon'>
                        <div className='textcon'>
                            <div className='text'><h5>css</h5></div>
                            <div className='text2'><h5><span ref={el2}>95%</span></h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='css' ref={el}></div>
                        </div>
                    </div>
                    <div className='javascriptcon'>
                        <div className='textcon'>
                            <div className='text'><h5>Javascript</h5></div>
                            <div className='text2'><h5>70%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='javascript'></div>
                        </div>  
                    </div>                  
                    <div className='node-jscon'>
                        <div className='textcon'>
                            <div className='text'><h5>Node JS</h5></div>
                            <div className='text2'><h5>93%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='node-js'></div>
                        </div>  
                    </div>                  
                    <div className='reactcon'>
                        <div className='textcon'>
                            <div className='text'><h5>React</h5></div>
                            <div className='text2'><h5>90%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='react'></div>
                        </div>  
                    </div>                  
                    <div className='react-nativecon'>
                        <div className='textcon'>
                            <div className='text'><h5>React native</h5></div>
                            <div className='text2'><h5>87%</h5></div>
                        </div>                       
                        <div className="grey">
                            <div className='react-native'></div>
                        </div>    
                    </div>                 
                    <div className='mongodbcon'>
                       <div className='textcon'>
                            <div className='text'><h5>MongoDB</h5></div>
                            <div className='text2'><h5>98%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='mongodb'></div>
                        </div>  
                    </div>                   
                    <div className='mysqlcon'>
                        <div className='textcon'>
                            <div className='text'><h5>Mysql</h5></div>
                            <div className='text2'><h5>95%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='mysql'></div>
                        </div>  
                    </div>                   
                </div>
         </div>
      </div>
  )
}
