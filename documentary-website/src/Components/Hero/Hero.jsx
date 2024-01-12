import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import videoBg from '../../Assests/videoBg.mp4'
import uva from '../../Assests/uva.png'


const Hero = () => {
  return (
      <div className="hero">
        <div className="left-h">
            <Header/> 
    
        <div className="overlay3"></div>
        <video src={videoBg} muted autoPlay loop ></video>


             <div className="the-best-ad">
                <div></div>
                <span>Uva is Hart of Sri Lanka</span> 
                </div> 
                
              <div></div>
                <div className="hero-text">
                  <div>
                    <span className='stroke-text'>Welcome </span>
                    <span>To Haven</span>
                  </div>
                </div>
        </div>

        <div className="right-h">
            <img src={uva} alt=''className='hero-image'/>  
        </div>

    </div>
  )
}

export default Hero
