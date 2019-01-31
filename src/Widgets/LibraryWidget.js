import React from 'react';
import './AudioWidget.css';
import {pdf} from '../Documents/1.pdf';

class LibraryWidget extends React.Component {
  render() {
    return (
    
        <div >
                <h3 className="library">
                    <span> المكتبة </span>
                </h3>

                <ul className="library">
                    <li>
                        <a href={pdf} > الكلمة بعد التراويح من سيرة نبينا الكريم </a>
                    </li>

                    <li>
                        <a href="#"> الكلمة بعد التراويح من سيرة نبينا الكريم </a>
                    </li>

                    <li>
                        <a href="#"> الكلمة بعد التراويح من سيرة نبينا الكريم </a>
                    </li>

                    <li>
                        <a href="#"> الكلمة بعد التراويح من سيرة نبينا الكريم </a>
                    </li>
                </ul>
           </div>
   
    );
  }
}

export default LibraryWidget;
