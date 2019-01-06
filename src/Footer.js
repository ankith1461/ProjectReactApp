import React, { Component } from 'react';
import './Footer.css';
import logo from './img/logo.png'

class Footer extends Component {
  render() {
    return (        
        <div className="footer-container home">
            <div className="wrapper">
                <div className="item">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <div className="social-media">
                            <a href="#"> <i className="fas fa-rss-square"></i> </a>
                            <a href="#"> <i className="fab fa-telegram-plane"></i> </a>
                            <a href="#"> <i className="fas fa-headphones"></i> </a>
                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                            <a href="#"> <i className="fab fa-google-plus-square"></i> </a>
                            <a href="#"> <i className="fab fa-youtube-square"></i> </a>
                            <a href="#"> <i className="fab fa-twitter-square"></i> </a>
                            <a href="#"> <i className="fab fa-facebook-square"></i> </a>
                        </div>
                    </div>
            </div>
        </div>
        <div className="copyrights">
            All rights reserved
        </div>
    </div>
    );
  }
}

export default Footer;