import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
// import profPic from "../../media/5.PNG"
import heroImg from "../../../media/boots.jpg"
import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class AboutHero extends Component {

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
      window.scrollTo(0, 850)
    }
  
    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }
  
    render() {
  
  
  
  
  
      return (
      
      <Row>
        {/* <Col md={3}></Col> */}

        <Col sm={12} md={12} className="home-img" style={{
            backgroundImage: `url(${heroImg})`,
            backgroundColor: `#333333f2`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
            //   cover no-repeat center center fixed`
        }}>
            {/* <Image src={heroImg}></Image> */}
            <div className="tc w-100 hero-text-block">
                <h1 className="hero-header">We're the Millers</h1>
                <p className="hero-phrase">We're a husband and wife team with a fire in our hearts for helping small to mid-sized businesses grow.</p>
                <p className="hero-phrase">We're not afraid to mix things up a bit. So, after two cross-country moves, several full-time jobs, and a dream to start our own business, we put our heads together and finally took the leap.</p>
            </div>

       <br></br>
       {/* <div> */}
      
       <div className="arrow-container">
       <p className="action-button">GET TO KNOW US</p>
            <a onClick={this.scrollDown}><Image className="arrow-img center" src={arrow}></Image></a>
            </div>
       {/* </div> */}
         
           
      
          
            


        </Col>
        {/* <Col md={3}></Col> */}
    </Row>
      )
  
    }
  }