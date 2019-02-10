import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {

      librarys: [
        {
          libraryId: 1,
          libraryTitle: 'Test Library Data Title 1',
          libraryLink: 'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/1.pdf'
        },
        {
          libraryId: 2,
          libraryTitle: 'Test Library Data Title 2',
          libraryLink: 'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/2.pdf'
        },
        {
          libraryId: 3,
          libraryTitle: 'Test Library Data Title 3',
          libraryLink: 'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/3.pdf'
        },
        {
          libraryId: 4,
          libraryTitle: 'Test Library Data Title 4',
          libraryLink: 'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/4.pdf'
        },
        {
          libraryId: 5,
          libraryTitle: 'Test Library Data Title 5',
          libraryLink: 'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/5.pdf'
        },
      ]
    };
  }

  render() {

    return (
      <Layout>
      <div className="title-container">
          <h1> Library  </h1>
     </div>
     <div class="wrapper">      
        <div className="left-list">
          <AudioWidget></AudioWidget>

        </div>
        <div className="right-list">         
                {
                   this.state.librarys.map( library => {
                    return  <div className="item">
                              <div className="img"></div>
                              <div className="infos">
                              <span>
                                <a href={library.libraryLink} target="_blank">{library.libraryTitle}</a>
                              </span>                             
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

export default Library;
