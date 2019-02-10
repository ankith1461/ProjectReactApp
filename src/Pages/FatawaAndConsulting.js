import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';
import './FatawaAndConsulting.css';

class FatawaAndConsulting extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Layout>
        <div className="title-container">
            <h1> Fatawa And Consulting  </h1>
       </div>
       <div class="wrapper">      
          <div className="left-list">
            <LibraryWidget></LibraryWidget>
            <AudioWidget></AudioWidget>
          </div>
          <div className="right-list">         
                  
          </div>
        </div>
      </Layout>
    );
  }
}

export default FatawaAndConsulting;
