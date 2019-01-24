import React from 'react';
import './AudioWidget.css';
import Layout from '../shared/Layout';
import {pdf} from '../Documents/1.pdf';

class LibraryWidget extends React.Component {
  render() {
    return (
    <Layout>
        <div class="wrapper">

        <div class="left-list">
                <h3 class="library">
                    <span> المكتبة </span>
                </h3>

                <ul class="library">
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
        </div>
   </Layout>
    );
  }
}

export default LibraryWidget;
