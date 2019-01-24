import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import UploadData from './Pages/UploadData';
import * as serviceWorker from './serviceWorker';
import AudioWidget from './Widgets/AudioWidget';
import LibraryWidget from './Widgets/LibraryWidget';
import MeetingsOfTheMonth from './Pages/MeetingsOfTheMonth';
import WordOfTheMonth from './Pages/WordOfTheMonth';
import DefinitionofSheikh from './Pages/DefinitionofSheikh';
import FatawaAndConsulting from './Pages/FatawaAndConsulting';
import ScientificCourses from './Pages/ScientificCourses';
import SpeechesAndObservations from './Pages/SpeechesAndObservations';
import Translations from './Pages/Translations';
import Videos from './Pages/Videos';
import Library from './Pages/Library';

function RouterComponet() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dataupload" component={UploadData} />
          <Route path="/audio" component={AudioWidget} />
          <Route path="/library" component={Library} />
          <Route path="/word" component={WordOfTheMonth} />
          <Route path="/meeting" component={MeetingsOfTheMonth} />
          <Route path="/definitionofsheikh" component={DefinitionofSheikh} />
          <Route path="/fatawaAndconsulting" component={FatawaAndConsulting} />
          <Route path="/scientificcourses" component={ScientificCourses} />
          <Route path="/speechesandobservations" component={SpeechesAndObservations} />
          <Route path="/translations" component={Translations} />
          <Route path="/videos" component={Videos} />
        </Switch>
      </BrowserRouter>
    );
  }
  
ReactDOM.render(<RouterComponet  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
