import React from 'react';
import './AudioWidget.css';

var a = [
    { id: 1, name: 'الكلمة بعد التراويح من سيرة نبينا الكريم', url:'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/1.pdf' },
    { id: 2, name: 'الكلمة بعد التراويح من سيرة نبينا الكريم', url:'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/2.pdf' },
    { id: 3, name: 'الكلمة بعد التراويح من سيرة نبينا الكريم' , url:'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/3.pdf' },
    { id: 4, name: 'الكلمة بعد التراويح من سيرة نبينا الكريم', url:'https://s3-ap-southeast-1.amazonaws.com/ankithprofile/4.pdf' }
  ];
class LibraryWidget extends React.Component {
  render() {
    return (
    
        <div >
                <h3 className="library">
                    <span> المكتبة </span>
                </h3>

                <ul className="library">
                    {
                        a.map( i => { 
                        return  <li>
                                    <a href={i.url} target="_blank"> {i.name} </a>
                                </li>                
                    })}       
                </ul>
           </div>
   
    );
  }
}

export default LibraryWidget;
