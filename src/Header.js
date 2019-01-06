import React, { Component } from 'react';
import './Header.css';
import logo from './img/logo.png'

class Header extends Component {
  render() {
    return (
        <div className="header-container">
           <div class="top-bar text-left">
                <span> <i className="fas fa-phone"></i> +999 000 000 000 </span>
                <span> <i className="fas fa-envelope"></i> email@email.com </span>
                </div>
        
                <div className="logo-container home">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
      </div>
    );
  }
}

export default Header;
