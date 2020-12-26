import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import logo from "../../../../media/mmp.png";
import notebook from "../../../../media/notebook.jpg";
import office from "../../../../media/office.jpg";
// import desk from "../../../../media/desk.jpg"
import branding from "../../../../media/branding.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
export default class Fullserviceblock extends Component {
  render() {
    return (
      <section>
        <div className="home-wrapper">
          <div className="service-block-1 margin-top">
            <div className="service-right">
              <div className="service-grey-container">
                <div
                  className="service-grey"
                  style={{ backgroundImage: `url(${office})` }}
                >
                  <div className="fullservice-vertical-line-1"></div>
                </div>

                <div
                  style={{ backgroundImage: `url(${notebook})` }}
                  className="service-grey-img"
                ></div>
              </div>
            </div>
            <div className="service-left">
              <div className="service-text-1">
                <h2>How It Works</h2>
                <p>
                  At Miller Media Partners, we offer a variety of graphic design
                  services in order to provide you and your business with
                  exactly what you need.
                </p>
                <p>
                  Our design retainer packages cover businesses of all sizes so
                  that you can keep us on tap for whenever you may need us. With
                  these packages, we're 100% at your service.
                </p>
                <p>
                  If you're looking for graphic design service on a
                  project-to-project basis - no biggie! We also offer hourly
                  design work that allows you to partner with us on an as-needed
                  basis.
                </p>
                <p>
                  Our process for projects is simple and easy, using our design
                  request forms to submit information pertaining to whatever
                  task you need tackling. Just fill out the form and we'll take
                  care of the rest!
                </p>
                <Link to="/ppc">
                  <Button className="about-lead-btn" variant="outline-dark">
                    CHECK OUT OUR PRICING
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="service-branding-block">
        <Image className="grey-stamp-mobile" src={logo}></Image>
          <div
            style={{ backgroundImage: `url(${branding}` }}
            className="service-img"
          ></div>
          <div className="branding-box-parent">
         
         
          <div className="service-branding-box">
          <Image className="grey-stamp" src={logo}></Image>
            <div className="service-line"></div>
            <h1>Design Retainer Packages</h1>
            <div className="service-branding-wrapper">
              <div className="logo-branding-text">
                <h3>Copper</h3>
                <p>
                  10 hours of design work per month​ Price reflects an 8%
                  discount 3-month initial commitment
                </p>
                <p><i>$650/mo</i></p>
                <Link to="/logo-design-branding">
                  <Button className="about-lead-btn" variant="outline-dark">
                    INQUIRE
                  </Button>
                </Link>
              </div>
              <div className="logo-branding-text">
                <h3>Gold</h3>
                <p>
                  20 hours of design work per month Price reflects a 15%
                  discount 3-month initial commitment
                </p>
                <p><i>$1,200/mo</i></p>
                <Link to="/logo-design-branding">
                  <Button className="about-lead-btn" variant="outline-dark">
                    INQUIRE
                  </Button>
                </Link>
              </div>
              <div className="logo-branding-text">
                <h3>Platinum</h3>
                <p>
                  40 hours of design work per month Price reflects a 25%
                  discount 3-month initial commitment
                </p>
                <p><i>$2,200/mo</i></p>
                <Link to="/logo-design-branding">
                  <Button className="about-lead-btn" variant="outline-dark">
                    INQUIRE
                  </Button>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="home-wrapper">
          <div className="hourly-work">
            <h2>Hourly Design Work</h2>
            <p>$70/hour</p>
            <p>No initial commitment</p>
            <p>$150 design work deposit (applied to final cost)</p>
            <Button className="about-lead-btn" variant="outline-dark">
              INQUIRE
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
