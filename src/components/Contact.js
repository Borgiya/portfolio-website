import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact' name="contact">
        <h1>Contact</h1>
        <div className='contact-list'>
            <p>
                Email :<span>borgiyamary@gmail.com</span>
            </p>
            <p>
                Github Username: <span>Borgiya </span>
            </p>
        </div>
    </Element>
  )
}

export default Contact