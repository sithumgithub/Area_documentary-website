import React from 'react'
import './Header.css'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Header = () => {
   return (
    <div className="header">
      
      <div className='logoDiv'>
          <a href='#' className="logo1 flex">
            <h1><MdOutlineTravelExplore className='icon1' />
            <span> Travel Uva.</span></h1>
            </a>
            </div>
            <ul className='header-menu'>
                <li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li>
                <li>Home</li>
                <li>Places</li>
                <li>Hotels</li>
                <li>Contacts</li>
                <li>
                <button className='btn'>Book Now</button>
                </li>
              </ul>
      </div>
   )
}

export default Header
