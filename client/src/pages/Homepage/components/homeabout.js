import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
// import profPic from "../../media/5.PNG"
import mugs from "../../../media/2mugss.jpg"
import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomeAbout extends Component {

 
    render() {
  
      return (
      
     <Row className="about-block">
         <Col xs={12} md={6} style={{
            backgroundImage: `url(${mugs})`,
            // backgroundColor: `#333333f2`,
            // opacity: `90%`,
            // backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `125%`,
            width: `25vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
            //   cover no-repeat center center fixed`
        }}></Col>
         <Col xs={12} md={6} className="about-text">
             
             <h1>Working Together</h1>
             <p>At Miller Media Partners, your goals are our goals, and we reflect that in our flexible pricing options and unique strategies.</p>
             <p>Whether you're looking for full-service advertising or a standalone design package, we will work <i><strong>with</strong></i> you to achieve mutual success.</p>
             <p>So, what makes us different?</p>
             <p>It's simple - agencies think in 'win' scenarios. Partners think 'win-win'. And we're all about those 'win-wins'.</p>
             <Button className="about-lead-btn" variant="outline-dark">GIVE US A SHOUT</Button>
         </Col>
         <div className="vertical-line-about"></div>
     </Row>
      )
  
    }
  }