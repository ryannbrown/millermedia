import { Container, Nav, Button, Image, Col, Row } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import logo from "../../media/stamplogo.png";
import "./style.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <div className="greyfooter">
          <div className="greyfooter-content">
            <h3 className="item">{this.props.text}</h3>
            <a href={this.props.link}>
              <button className="item" className="connect-btn">
                {this.props.button}
              </button>
            </a>
          </div>
        </div>
        <div className="darkfooter">
          <div>
            <Image className="stamplogo" width="200px" src={logo}></Image>
            <hr></hr>
          </div>
          <div className="footer-wrapper">
            <div>
              <p>STAY CURRENT</p>
              <br></br>
              <button>BLOG</button>
            </div>
            <div>
              <p>NAVIGATE</p>
              <br></br>
              <a href="/"><p>Home</p></a>
              <a href="/about"><p>About</p></a>
              <a href="/Services"><p>Services</p></a>
              <a href="/ppc"><p>PPC Advertising</p></a>
              <a href="/logo-design-branding"><p>Logo + Branding</p></a>
              <a href="/full-service-design"><p>Full-Service Design</p></a>
              <a href="/faq"><p>FAQs</p></a>
              <a href="/contact"><p>Contact</p></a>
           
            </div>
            <div>
              <p>CONNECT WITH US</p>
              <div>
                  <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"></img>
                  <img src="https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/9c486556465843c5850fabfd68dfae49.webp"></img>
                  <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></img>
                  {/* <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></img> */}
                  
              </div>
            </div>
            <div>
              <p>RESOURCES</p>
              <br></br>
              <p>Hourly Design Request</p>
              <p>Design Package Project Request</p>
              <p>Design Services Pricing</p>
              <p>Design Package Offerings</p>
            </div>
            <div>
              <p>KEEP IN TOUCH</p>
              <br></br>
              <p>info@millermediapartners.com</p>
              <p>919.229.9095</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
