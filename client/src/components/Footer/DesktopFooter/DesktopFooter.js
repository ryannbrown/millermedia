import { Container, Nav, Button, Image, Col, Row } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom"
// import logo from "../../media/stamplogo.png";
import "./style.css";
var _ = require("lodash");

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }



  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <div className="greyfooter">
          <div className="greyfooter-content">
            <h3 className="item">{this.props.text}</h3>
            <Link to={this.props.link}>
              <button className="item" className="connect-btn">
                {this.props.button}
              </button>
            </Link>
          </div>
        </div>
        <div className="darkfooter">
          <div>
            <Image className="stamplogo" width="200px" src={this.props.logo}></Image>
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
              <Link to="/"><p>Home</p></Link>
              <Link to="/about"><p>About</p></Link>
              <Link to="/Services"><p>Services</p></Link>
              <Link to="/ppc"><p>PPC Advertising</p></Link>
              <Link to="/logo-design-branding"><p>Logo + Branding</p></Link>
              <Link to="/full-service-design"><p>Full-Service Design</p></Link>
              <Link to="/faq"><p>FAQs</p></Link>
              <Link to="/contact"><p>Contact</p></Link>
           
            </div>
            <div>
              <p>CONNECT WITH US</p>
              <div className="social-footer-wrapper">
              <a rel="noopenner" target="_blank" href="https://www.facebook.com/millermediapartners/"><i class="lni lni-facebook-filled"></i></a>
                      <a rel="noopenner" target="_blank" href=" https://www.pinterest.com/abbymillerdesignco/_created/"><i class="lni lni-pinterest"></i></a>
                      <a rel="noopenner" target="_blank" href="https://www.instagram.com/millermediapartners"><i class="lni lni-instagram"></i></a>
                      <a href="mailto:info@millermediapartners.com"><i class="lni lni-envelope"></i></a>
                  
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
          <p style={{marginTop:'25px', marginBlockEnd:'0px'}}>©2020 Miller Media Partners LLC  | <a rel="noopenner" target="_blank" href="https://app.termly.io/document/privacy-policy/fa9083e4-d940-438d-b974-bd27863aa8e3"> Privacy Policy </a></p>
        </div>
      </div>
    );
  }
}
