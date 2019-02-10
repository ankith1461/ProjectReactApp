import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';
import ReactPlayer from 'react-player'
import './Videos.css';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailView: false,
      filterVideos :[],
      videos: [
        {
          videoId: 1,
          videoTitle: 'Test video Data Title 1',
          videoUrls: ['https://www.youtube.com/embed/HPIjjFGYSJ4',
                     'https://www.youtube.com/embed/93p3LxR9xfM',
                     'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505']
        },
        {
          videoId: 2,
          videoTitle: 'Test video Data Title 2',
          videoUrls: ['https://www.youtube.com/embed/HPIjjFGYSJ4',
                      'https://www.youtube.com/embed/93p3LxR9xfM'
                     ]
        },
        {
          videoId: 3,
          videoTitle: 'Test video Data Title 3',
          videoUrls: ['https://www.youtube.com/embed/pKd0Rpw7O48',
                      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505']
        },
        {
          videoId: 4,
          videoTitle: 'Test video Data Title 4',
          videoUrls: ['https://www.youtube.com/embed/HPIjjFGYSJ4']
        },
        {
          videoId: 5,
          videoTitle: 'Test video Data Title 5',
          videoUrls: ['https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505']
        },
        {
          videoId: 6,
          videoTitle: 'Test video Data Title 6',
          videoUrls: ['https://www.youtube.com/embed/HPIjjFGYSJ4',
                      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505']
        },
      ]
    };

    this.handleSectionClick = this.handleSectionClick.bind(this);
  }

  handleSectionClick(e,videoId) {
    e.preventDefault();
    if(this.state.detailView){
      this.setState({
        detailView: false,
        videos:this.state.videos
      });
    } else{
       this.setState({
          detailView: true,
          filterVideos: this.state.videos.filter(video => video.videoId === videoId)
        });
    }  
  }

  render() {

    return (
      <Layout>
        <div className="title-container">
            <h1> Videos  </h1>
       </div>
       <div class="wrapper">      
          <div className="left-list">
            <LibraryWidget></LibraryWidget>
            <AudioWidget></AudioWidget>
          </div>
          <div className="right-list">         
            { 
              this.state.detailView 
              ? 
              <div><a href="#" onClick={(e) => this.handleSectionClick(e,'back')}>>></a>
              <div class="article-container"> 
               
               { 
                 this.state.filterVideos.map( video => {
                  return <div>
                          <h1> {video.videoTitle} </h1>
                          { 
                            video.videoUrls.map( videoUrl => {
                            return <div className='video-container'>
                              <div className='video'>
                                <iframe className='video-player' src={videoUrl} frameBorder='0'
                                        allow='autoplay; encrypted-media' allowFullScreen title='video' />
                              </div>
                            </div>
                          })
                          }
                        </div>
                  })
                }
              </div></div>

              :
              
              this.state.videos.map( video => {
              return  <div className="item">
                        <div className="img"></div>
                        <div className="infos">
                        <span className="title">
                          <a href="#" onClick={(e) => this.handleSectionClick(e,video.videoId)}>{video.videoTitle}</a>
                        </span>
                        <p>
                          Empty message Empty message Empty message Empty message Empty message Empty message Empty message
                        </p>
                      </div> 
                    </div> 
          
              }) 
            }
          </div>
        </div>
      </Layout>
    );
  }
}

export default Videos;
