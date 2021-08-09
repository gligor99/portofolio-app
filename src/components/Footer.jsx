import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        
            <div className="footer-distributed">
                <div className="footer-left">
                    <h3>WebDev<span>Trick</span></h3>
                    <p className="footer-links">
                        <a href="#"><Link activeClass="active" to="header" spy="true" smooth="true">Home</Link></a>
                        ·
                        <a href="#"><Link activeClass="active" to="about" spy="true" smooth="true">About</Link></a>
                        ·
                        <a href="#"><Link activeClass="active" to="service" spy="true" smooth="true">Services</Link></a>
                        ·
                        <a href="#"><Link activeClass="active" to="contact" spy="true" smooth="true">Contact</Link></a>
                    </p>
                    <p className="footer-company-name">webdevtrick &copy; 2019</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Delhi, India</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                    </p>
                    <div className="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
    )
}

export default Footer
