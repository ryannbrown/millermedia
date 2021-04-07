import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
// import profPic from "../../media/5.PNG"
// import heroImg from "../../../media/bread.jpg"
import arrow from "../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"


export default class ServicesHero extends Component {

    constructor(props) {
      super(props);
  
      this.listener = null;
      this.state = {
        status: "top"
      };
    }
  
  
    componentDidMount() {
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (this.state.status !== "bgChanged") {
            this.setState({ status: "bgChanged" });
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({ status: "top" });
          }
        }
      });
    }

    scrollDown = () => {
      window.scrollTo(0, 625)
    }
  
    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }
  
    render() {
  
  
  
  
  
      return (
      
      <div>
        {/* <Col md={3}></Col> */}

        <div className="home-img" style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundColor: `#333333f2`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            height: `668px`,
            display: `flex`,
            justifyContent:'center',
            alignItems: `center`,
            position: `relative`,
            flexDirection: 'column'
            //   cover no-repeat center center fixed`
        }}>
            {/* <Image src={heroImg}></Image> */}
            <div className="hero-text-block">
                <h1 className="hero-header">{this.props.title}</h1>
                <p className="hero-phrase">{this.props.paragraph1}</p>
                <p className="hero-phrase">{this.props.paragraph2}</p>
            </div>

       <br></br>
       {/* <div> */}
      
       <div onClick={this.scrollDown} className="arrow-container">
       <p className="action-button">{this.props.button}</p>
            <Link ><Image className="arrow-img center" src={arrow}></Image></Link>
            </div>
       {/* </div> */}
         
           
      
          
            


        </div>
        {/* <Col md={3}></Col> */}
    </div>
      )
  
    }
  }