import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import image from '../images/hero.png'

function About() {
    return (
        <div className="about" id="about">
            <Zoom />
            <div className="about-model">
                <img src={image} alt="model" />
            </div>
            <div className="about-text">

                <h2>About Me</h2>
                {/* <h3>I'm a Passionate <span>Web Designer</span></h3> */}
                <ReactTypingEffect className="h3" text={["I'm a Passionate Web Designer!"]} />
                <p>Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced design interface to WordPress that both beginners and experts will fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is meant to be done.</p>
                <button>View More Details</button>
            </div>
        </div>
    )
}

export default About
