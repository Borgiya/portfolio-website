import React from 'react'
import{Link} from "react-scroll"
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header-right'>
            <Link to="about" smooth={true} duration={500}>
                <h4>About me</h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            <Link to="" smooth={true} duration={500}>
                <h4 className='header-rightButton'>Join with me</h4>
            </Link>
        </div>

    </div>
  )
}

export default Header