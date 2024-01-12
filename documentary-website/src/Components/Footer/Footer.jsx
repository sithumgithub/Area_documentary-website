import React from 'react';
import './Footer.css'; 
import video2 from '../../Assests/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="overlay4"></div>
      <video autoPlay muted loop className="background-video">
        <source src={video2} type="video/mp4" />
      </video>
      
    <div className="secContent container">
        <div className="contactDiv-flex"></div>
            <div className="text1">
                <small>KEEP IN TOUCH</small>
                <h2>Travel With Us</h2>
            </div>
        
        <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
                SEND <FiSend className='icon'/>
            </button>
        </div>

        <div className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href='#' className='logo flex'>
                     <MdOutlineTravelExplore className='icon'/>Travel Uva.
                    </a>
                </div>

            <div className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nisi alias sed. Sed debitis voluptatum numquam provident sunt consequatur? Dolore quia, rerum cupiditate culpa officia sequi ipsa molestias reprehenderit inventore?
            </div>

            <div className="footerSocials">
                <FaTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
            </div>
            </div>
            <div className="footerLinks grid">
                 <div className="linkGroup">
                    <span className='groupTitle'>
                        OUR AGENCY
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className='icon'/>Services</li>

                    <li className="footerList flex">
                    <FiChevronRight className='icon'/>Agency</li>

                    <li className="footerList flex">
                    <FiChevronRight className='icon'/>Tourism</li>


                 </div>
            </div>
        
        </div>
    </div>

    </footer>
  );
};

export default Footer;

