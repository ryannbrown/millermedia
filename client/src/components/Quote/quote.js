import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
// import profPic from "../../media/5.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomeQuote extends Component {

 
    render() {
  
      return (
      
      <div className="quote-block animate__animated animate__fadeInLeft">
            {/* <div className="vertical-line"></div> */}
          <h3>"{this.props.text}"</h3>
          <p><i>{this.props.author}</i></p>
      </div>
      )
  
    }
  }