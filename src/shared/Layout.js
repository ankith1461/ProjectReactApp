import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Layout.css";

class Layout extends React.Component {
  render() {
    return (
        <div >
          <Header />
            <div className="body-container">
                { this.props.children }
             </div>
          <Footer />
       </div>
    );
  }
}

export default Layout;
