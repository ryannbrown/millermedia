import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
import mmp from "../../../media/mmp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class AboutAction extends Component {

 
    render() {
  
      return (
          
          <Row className="about-action-block">
         <Col className="about-action-text">
          <Image className="about-stamp-img" src={mmp} width='150px'></Image>
             
             <p>Because we've worked in small businesses and we own one of our own, we get it - scaling can be difficult and learning all the nuances of marketing and design is tedious.</p>
             <p>That's why we love partnering with businesses like yours - to bring your goals to fruition.
</p>
             <p>At Miller Media Partners, we leverage our combined experiences in advertising and design and work with you to reach your goals. Trust and transparency are the foundation of all of our services, interactions, and partnerships. You heard it right - we cut out all the canned responses of a typical agency and give it to you straight.</p>
             <Button className="about-lead-btn" variant="outline-dark">SEE IF WE'RE A GOOD MATCH</Button>
         </Col>
         {/* <div className="vertical-line-about"></div> */}
     </Row>
      )
  
    }
  }