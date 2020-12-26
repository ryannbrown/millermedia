import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import brandingImg from "../../../../media/branding.jpg"
import branding from "../../../../media/branding.jpg"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class Brandingblock extends Component {
  render() {
    return (
      <section>
        <div className="branding-block margin-top">
        
          <div className="branding-text">
            <h2>How It Works</h2>
            <p>
            Our graphic design services extend beyond the day-to-day. We work with businesses like yours to bring your ideas for your brand to life. Whether you're partnering with us on a new logo design or a total rebranding, we always start with a little warmup questionnaire that can help you visualize just what you're looking for in your logo or brand.
            </p>
            <p>
            From there, we gather all the intel we need to start conceptualizing some ideas, building different logos for you to choose from and, if needed, a full branding guide with guidelines that you can follow to ensure your business's collateral, signage, etc. is consistent.
            </p>
            <Link to="/ppc">
              <Button className="about-lead-btn" variant="outline-dark">
                GET STARTED
              </Button>
            </Link>
          </div>
         <div className="branding-packages">
      
             <div style={{backgroundImage: `url(${branding}`}} className="branding-img">
        <div className="branding-vert-1"></div>
         <div className="branding-vert-2"></div>
             </div>
             <div className="branding-wrapper">
                 <div className="branding-package">
                    <h3>Logo Design Package</h3>
                    <p>Looking to take the first step toward a brand that drops jaws? This package is the perfect place to start!</p>
                    <p>Please keep in mind that it can take several weeks to complete a logo from the initial design concepts to the final product.</p>
                    <p><i>$390</i></p>
                    <Button className="about-lead-btn" variant="outline-dark">INQUIRE</Button>
                 </div>
                 <div className="branding-package">
                    <h3>Branding Package</h3>
                    <p>If you're looking to invest in making your brand a show-stopping, customer converting machine, this package has it all.</p>
                    <p>Including full logo design services in addition to brand guidelines and branding strategy, we work with you to bring it all together.</p>
                    <p><i>$1,690</i></p>
                    <Button className="about-lead-btn" variant="outline-dark">INQUIRE</Button>
                 </div>
             </div>
         </div>
        </div>
        
      </section>
    );
  }
}
