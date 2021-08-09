import React from 'react'
import Zoom from 'react-reveal/Zoom'

function Contact() {
    return (
        <div className="contact" id="contact">
            <Zoom>
            <h3>Get in Touch</h3>
            <div className="contact-input">
                <input type="email" placeholder="Example@gmail.com"/>
                <a href="/">Continue</a>
            </div>
            </Zoom>
        </div>
    )
}

export default Contact
