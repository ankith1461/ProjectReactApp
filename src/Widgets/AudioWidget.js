import React from 'react';
import './AudioWidget.css';
import Layout from '../shared/Layout'

class AudioWidget extends React.Component {
  render() {
    return (
    <Layout>
        <div class="wrapper">

        <div class="left-list">
            <h3>
                <span>إخترنا لكم</span>
            </h3>

            <ul>
                <li>
                <a href="#"> الكلمة بعد التراويح من سيرة نبينا الكريم </a>
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

export default AudioWidget;
