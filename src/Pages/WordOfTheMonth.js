import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';
import './WordOfTheMonth.css';

class WordOfTheMonth extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      detailView: false,
      filterWords :[],
      words: [
        {
          wordsId: 1,
          wordsTitle: 'Test word Data Title 1',
          wordsData: ['Empty message 1 Empty message 1 Empty message 1 Empty message 1 Empty message 1 Empty message 1'],
          wordVideo :['https://www.youtube.com/embed/HPIjjFGYSJ4'],
          wordImage :['https://s3-ap-southeast-1.amazonaws.com/ankithprofile/ReactImage.png']
        },
        {
          wordsId: 2,
          wordsTitle: 'Test word Data Title 2',
          wordsData: ['Empty message 2 Empty message 2 Empty message 2 Empty message 2 Empty message 2 Empty message 2 Empty message 2']        

        },
        {
          wordsId: 3,
          wordsTitle: 'Test word Data Title 3',
          wordsData: ['Empty message 3 Empty message 3 Empty message 3 Empty message 3 Empty message 3 Empty message 3 Empty message 3'],
          wordImage :['https://s3-ap-southeast-1.amazonaws.com/ankithprofile/ReactImage.png']
        },
        {
          wordsId: 4,
          wordsTitle: 'Test word Data Title 4',
          wordsData: ['Empty message 4 Empty message 4 Empty message 4 Empty message 4 Empty message 4 Empty message 4 Empty message 4'],
          wordVideo :['https://www.youtube.com/embed/HPIjjFGYSJ4'],
        },
        {
          wordsId: 5,
          wordsTitle: 'Test word Data Title 5',
          wordsData: ['Empty message 5 Empty message 5 Empty message 5 Empty message 5 Empty message 5 Empty message 5 Empty message 5']
        },
        {
          wordsId: 6,
          wordsTitle: 'Test word Data Title 6',
          wordsData: ['Empty message 6 Empty message 6 Empty message 6 Empty message 6 Empty message 6 Empty message 6 Empty message 6']
        },
      ]
    };

    this.handleSectionClick = this.handleSectionClick.bind(this);
  }

  handleSectionClick(e,wordId) {
    e.preventDefault();
    if(this.state.detailView){
      this.setState({
        detailView: false,
        words: this.state.words
      });
    } else{
       this.setState({
          detailView: true,
          filterWords: this.state.words.filter(word => word.wordsId === wordId)
        });
    }  
  }

  render() {

    return (
      <Layout>
        <div className="title-container">
            <h1> Word of the Month  </h1>
       </div>
       <div className="wrapper">      
          <div className="left-list">
            <LibraryWidget></LibraryWidget>
            <AudioWidget></AudioWidget>
          </div>
          <div className="right-list">         
            { 
              this.state.detailView 
              ? 
              <div><a href="#" onClick={(e) => this.handleSectionClick(e,'back')}>>></a>
              <div className="article-container"> 
              { 
                 this.state.filterWords.map( word => {
                  return  <div>
                            <h1> {word.wordsTitle} </h1>
                            <div>
                              {word.wordsData} {/* To dispaly Text */}
                              {
                                 word.wordVideo && <div className='video-container'>
                                                      <div className='video'>
                                                        <iframe className='video-player' src={word.wordVideo} frameBorder='0'
                                                                allow='autoplay; encrypted-media' allowFullScreen title='video' />
                                                      </div>
                                                    </div>
                              } {/* To dispaly videos if exist */}
                              {
                                 word.wordImage && <div className='video-container'>
                                                      <div className='video'>
                                                        <img className='video-player' src={word.wordImage} />
                                                      </div>
                                                    </div>
                              } {/* To dispaly videos if exist */}
                            </div>
                          </div>
                 })
              }
              </div></div>

              :
              
              this.state.words.map( word => {
              return  <div className="item">
                        <div className="img"></div>
                        <div className="infos">
                        <span className="title">
                          <a href="#" onClick={(e) => this.handleSectionClick(e,word.wordsId)}>{word.wordsTitle}</a>
                        </span>
                        <p>
                          {word.wordsData}
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

export default WordOfTheMonth;
