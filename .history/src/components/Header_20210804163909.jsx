import React from 'react'
// import { ScrollElement } from 'react-scroll';
// import { scrollToBottom, scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './Navbar/Navbar'
import Zoom from 'react-reveal/Zoom'

function Header() {
    return (
        <div className="main" id="header">
            <Zoom />
            <Navbar />
            <div className="name">
                <Slide left>
                <p className="heading">Looking for a Web Developer!</p>
                {/* <h1>I'm <span>Luka</span>, a.k.a <span>lg99</span></h1> */}
                <ReactTypingEffect className="typing"
                    text={["I'm Luka, a.k.a lg99!", "Contact me for more..."]}
                />
                <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae incidunt! Dolor praesentium, aliquam dicta minima fuga amet dolore omnis autem? Praesentium, ea mollitia? Libero repudiandae animi molestiae velit sint?</p>
                <div className="header-btns">
                <a href="/" className="btn-1">Hire me</a>
                <a href="/" download="https://drive.google.com/file/d/1z_kut70m208BGZbxChukJ0nACA8eOBp9/view?usp=sharing" className="btn-2">Download CV</a>
                </Slide>
            </div>
            </div>
            <div className="arrow"></div>
        </div>
    )
}

export default Header
