import './Skills.css'
import laptop from "../../laptop.webp"
import code from "../../code.webp"
import office from "../../office.jpg"
import deskman from "../../deskman.webp"
import { useEffect, useState } from 'react'

export default function Skills() {
   const [width, setWidth] = useState(5)
   useEffect(()=>{
      setTimeout(()=>{
          setWidth(90)
      },5000)
   },[]);

  return (
      <div className='container'>
         <div className='aboutme'>
                <div className='about-text'>
                    <p><h2 className='poppins'>About me</h2></p>
                    <p className='poppins'>I design and develop services for customers, specializing in creating stylish, <br></br>modern websites, web applications, Mobile applications.</p>
                    <img src={laptop} alt='check' height="auto" width="600px" />
                </div>
         </div>
         <div className='skills'>
                <div className='skillcontainer'>
                    <div className='htmlcon'>
                        <div className='textcon'>
                            <div className='text'><h5>html</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>
                        <div className='grey'>
                            <div className='html'></div>
                        </div>
                    </div>
                    <div className='csscon'>
                        <div className='textcon'>
                            <div className='text'><h5>css</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='css'></div>
                        </div>
                    </div>
                    <div className='javascriptcon'>
                        <div className='textcon'>
                            <div className='text'><h5>Javascript</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='javascript'></div>
                        </div>  
                    </div>                  
                    <div className='node-jscon'>
                        <div className='textcon'>
                            <div className='text'><h5>Node JS</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='node-js'></div>
                        </div>  
                    </div>                  
                    <div className='reactcon'>
                        <div className='textcon'>
                            <div className='text'><h5>React</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='react'></div>
                        </div>  
                    </div>                  
                    <div className='react-nativecon'>
                        <div className='textcon'>
                            <div className='text'><h5>React native</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                       
                        <div className="grey">
                            <div className='react-native'></div>
                        </div>    
                    </div>                 
                    <div className='mongodbcon'>
                       <div className='textcon'>
                            <div className='text'><h5>MongoDB</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
                        </div>                        
                        <div className="grey">
                            <div className='mongodb'></div>
                        </div>  
                    </div>                   
                    <div className='mysqlcon'>
                        <div className='textcon'>
                            <div className='text'><h5>Mysql</h5></div>
                            <div className='text2'><h5>{width}%</h5></div>
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
