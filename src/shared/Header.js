import React from 'react';
import './Header.css';
import Menu  from './MenuBar';
import logo from '../img/logo.png'
import MenuBar from './MenuBar';

class Header extends React.Component {
  render() {
    return (
        <div className="header-container">
           <div className="top-bar text-left">
                <span> <i className="fas fa-phone"></i> +999 000 000 000 </span>
                <span> <i className="fas fa-envelope"></i> email@email.com </span>
                <div class="social">
                  <a href="#"> <i class="fab fa-facebook-square"></i> </a>
                  <a href="#"> <i class="fab fa-linkedin"></i> </a>
                  <a href="#"> <i class="fab fa-youtube-square"></i> </a>
                  <a href="#"> <i class="fab fa-twitter-square"></i> </a>
                  <a href="#"> <i class="fas fa-rss-square"></i> </a>
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
