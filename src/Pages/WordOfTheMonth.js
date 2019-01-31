import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';
import './WordOfTheMonth.css';

const a = [1, 2, 3];

class WordOfTheMonth extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Layout>
        <div className="title-container">
            <h1> Word of the Month  </h1>
       </div>
       <div class="wrapper">      
          <div className="left-list">
            <LibraryWidget></LibraryWidget>
            <AudioWidget></AudioWidget>
          </div>
          <div className="right-list">         
              {
                a.map( i => {
                return  <div className="item">
                          <div className="img"></div>
                          <div className="infos">
                          <span className="title">
                            <a href="#">Section {i}</a>
                          </span>
                          <p>
                            Empty message Empty message Empty message Empty message Empty message Empty message Empty message
                          </p>
                        </div> 
                      </div> 
          
              })}           
          </div>
        </div>
      </Layout>
    );
  }
}

export default WordOfTheMonth;
