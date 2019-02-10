import React, { Component } from "react";
import Layout from '../shared/Layout';
import LibraryWidget from '../Widgets/LibraryWidget';
import AudioWidget from '../Widgets/AudioWidget';

class MeetingsOfTheMonth extends Component {
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
                
        </div>
      </div>
    </Layout>
    );
  }
}

export default MeetingsOfTheMonth;
