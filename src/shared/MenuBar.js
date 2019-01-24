import React from 'react';
import home from '../img/home.png'
import './MenuBar.css';
import { Link  } from 'react-router-dom';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pageName: 'Home'
        };
    
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e,val) {
        e.preventDefault();
        console.log(val);
        this.setState({
            pageName : val
        });     
    }

    

  render() {
    return (
        <div>
            <div className="menu-container">
                <div className="toggler">
                    <i className="fas fa-bars"></i>
                </div>
                <ul>
                    <li> <a href="#" onClick={(e) => this.handleMenuClick(e,'Home')}> <img src={home} alt="home"/> </a> </li>
                    <li> <Link to="/definitionofsheikh"> تعريف بالشيخ </Link> </li>
                    <li> <Link to="/word">  كلمة الشهر </Link> </li>
                    <li> <Link to="/meeting" > لقاءات الشهر </Link> </li>
                    <li> <Link to="/fatawaAndconsulting"> فتاوى و استشارات </Link> </li>
                    <li> <Link to="/library"> المكتبة </Link> </li>
                    <li> <Link to="/scientificcourses"> دروس علمية </Link> </li>
                    <li> <Link to="/videos"> مرئيات </Link> </li>
                    <li> <Link to="/translations"> التراجم </Link> </li>
                    <li> <Link to="/speechesandobservations"> خطب و محاظرات </Link> </li>
                </ul>
        </div>
        {/* <div class="title-container">
            <h1> {this.state.pageName} </h1>
       </div> */}
      </div>
    );
  }
}

export default MenuBar;
