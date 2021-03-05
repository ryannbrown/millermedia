import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
// import profPic from "../../media/5.PNG"
import mugs from "../../../media/2mugss-min.jpg"
import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomeAbout extends Component {

 
    render() {
  
      return (
      
     <div className="about-block">
         <div className="mug-div" style={{
            backgroundImage: `url(${mugs})`,
            // backgroundColor: `#333333f2`,
            // opacity: `90%`,
            // backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100%`,
            width: `50%`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
            //   cover no-repeat center center fixed`
        }}></div>
         <div className="about-text">
         <div className="vertical-line"></div>
         <div className="about-text-box">
             <h2>Working Together</h2>
             <p>At Miller Media Partners, your goals are our goals, and we reflect that in our flexible pricing options and unique strategies.</p>
             <p>Whether you're looking for full-service advertising or a standalone design package, we will work <i><strong>with</strong></i> you to achieve mutual success.</p>
             <p>So, what makes us different?</p>
             <p>It's simple - agencies think in 'win' scenarios. Partners think 'win-win'. And we're all about those 'win-wins'.</p>
             <button className="transparent-btn" >GIVE US A SHOUT</button>
             </div>
         </div>
         <div className="vertical-line-about"></div>
     </div>
      )
  
    }
  }