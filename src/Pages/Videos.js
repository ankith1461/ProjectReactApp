import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import ReactPlayer from 'react-player'
import './Videos.css';

const a = ['https://www.youtube.com/watch?v=HPIjjFGYSJ4',
           'https://soundcloud.com/a-boogie-wit-da-hoodie/swervin'];

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Layout>
        <div class="title-container">
            <h1> Videos  </h1>
       </div>
        <div><h1>This is Videos Page</h1></div>
        
        <div className="wrapper">                   
        <LibraryWidget></LibraryWidget>
          <div className="right-list">         
            <div>
              {
                a.map( i => {
                return  <div className="item">                          
                          <div>
                              <ReactPlayer
                                url= {i}
                                className='react-player'
                                // playing
                                controls
                                width='500px'
                                height='300px'
                              />
                          </div>
                      </div> 
          
              })}
            </div>
            {/* <div><div className="item"> <div className="img"></div><div className="infos"> <span className="title">
                            <a href="#">Video Section </a>
                          </span></div></div></div> */}

           
        </div>
          
        </div>

      </Layout>
    );
  }
}

export default Videos;
