import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import brandingImg from "../../../../media/branding.jpg"
import branding from "../../../../media/branding.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class Brandingblock extends Component {
  render() {
    return (
      <section>
        <div className="ppc-block margin-top">
        
          <div className="ppc-text">
            <h1>How It Works</h1>
            <p>
              How It Works The most popular platforms for PPC are Google Ads and
              Microsoft (Bing) Ads. We can get you set up quickly on both
              platforms with goals set up in Google Analytics. We at Miller
              Media Partners believe it's important to align our compensation
              with your goals, and our flexible pricing models reflect that.
            </p>
            <p>
            For more details on pay-per-click advertising, please contact us to set up a free consultation so we can answer any questions you may have and figure out if we're a good fit for each other. Even if you just want some help setting up your account, we're just a phone call away.
            </p>
            <a href="/ppc">
              <Button className="about-lead-btn" variant="outline-dark">
                GET YOUR FREE CONSULTATION
              </Button>
            </a>
          </div>
         <div className="branding-packages">
      
             <div style={{backgroundImage: `url(${branding}`}} className="branding-img">
        <div className="branding-vert-1"></div>
         <div className="branding-vert-2"></div>
             </div>
             <div className="branding-wrapper">
                 <div className="branding-package">
                    <h1>Logo Design Package</h1>
                    <p>Looking to take the first step toward a brand that drops jaws? This package is the perfect place to start!</p>
                    <p>Please keep in mind that it can take several weeks to complete a logo from the initial design concepts to the final product.</p>
                    <p>$390</p>
                    <Button className="about-lead-btn" variant="outline-dark">INQUIRE</Button>
                 </div>
                 <div className="branding-package">
                    <h1>Branding Package</h1>
                    <p>If you're looking to invest in making your brand a show-stopping, customer converting machine, this package has it all.</p>
                    <p>Including full logo design services in addition to brand guidelines and branding strategy, we work with you to bring it all together.</p>
                    <p>$1,690</p>
                    <Button className="about-lead-btn" variant="outline-dark">INQUIRE</Button>
                 </div>
             </div>
         </div>
        </div>
        
      </section>
    );
  }
}
