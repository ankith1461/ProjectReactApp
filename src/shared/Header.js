import React from 'react';
import './Header.css';
import logo from '../img/logo.png'
import MenuBar from './MenuBar';

class Header extends React.Component {
  render() {
    return (
        <div className="header-container">
           <div className="top-bar text-left">
                <span> <i className="fas fa-phone"></i> +999 000 000 000 </span>
                <span> <i className="fas fa-envelope"></i> email@email.com </span>
                <div className="social">
                  <a href="#"> <i className="fab fa-facebook-square"></i> </a>
                  <a href="#"> <i className="fab fa-linkedin"></i> </a>
                  <a href="#"> <i className="fab fa-youtube-square"></i> </a>
                  <a href="#"> <i className="fab fa-twitter-square"></i> </a>
                  <a href="#"> <i className="fas fa-rss-square"></i> </a>
                </div>
            </div>
        
            <div className="logo-container home">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <MenuBar></MenuBar>
      </div>
    );
  }
}

export default Header;
