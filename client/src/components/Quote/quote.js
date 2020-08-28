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
      
      <div className="quote-block">
            <div className="vertical-line"></div>
          <h1 style={{fontSize:`1.5rem`}}>"{this.props.text}"</h1>
          <h2><i>{this.props.author}</i></h2>
      </div>
      )
  
    }
  }