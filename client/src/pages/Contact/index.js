import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Toast,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import image from "../../media/circle-thing.png";
// import avImage from "../../media/bluemoons.png";
import "./style.css";
import ContactForms from "../../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../components/Hero";
import heroImg from "../../media/bread.jpg";
import Quote from "../../components/Quote/quote.js";
import Ppcblock from "../Services/components/ppcblock/index";
// import arrow from "../../../media/white-arrow.png"
import Footer from "../../components/Footer/footer";
// import Navigation from "../../components/Navigation"
// import logo from "../../media/moons.png";
// import blueLogo from "../../media/bluemoons.png";
// import Panel from './panel';
// import axios from 'axios';

// const queryString = require('query-string');

require("dotenv").config();

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderMap: false,
    };
  }

  //   componentDidMount() {
  // const mapKey = process.env.REACT_APP_MAP;
  //     var script = document.createElement('script');
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMap`;
  //     script.defer = true;

  //     // Attach your callback function to the `window` object
  //     window.initMap = function() {
  //       // JS API is loaded and available

  //     };

  //     // Append the 'script' element to 'head'
  //     document.head.appendChild(script);
  //   }

  componentDidMount() {
    const renderMap = () => {
      const mapKey = process.env.REACT_APP_MAP;
      this.setState({ renderMap: true });
    };
    renderMap();
  }

  render() {
    const mapKey = process.env.REACT_APP_MAP;

    return (
      <div className="connect-page">
        <Hero
          image={heroImg}
          title="Contact Us"
          button="GET IN TOUCH"
        />
        <div className="home-wrapper">
          <p>
            Interested in our PPC Advertising, Facebook Ads, or Graphic Design
            services or simply want more information on Miller Media Partners?
            Give us a call or complete the form below.
          </p>
          <div className="contact-boxes">
            <ContactForms></ContactForms>
            <div className="info-hours">
              <div className="info">
                <h6>Contact Info</h6>
                <p>info@millermediapartners.com </p>
                <p>919.229.9095</p>
              </div>
              <div className="hours">
                <h6>Hours of Operation</h6>
                <p>Monday - Friday</p>
                <p>8am-4pm</p>
              </div>
            </div>
          </div>
        </div>
        {this.state.renderMap && (
          <div className="map-div">

          <iframe
          className="map-frame"
            width="100%"
            height="350"
            frameborder="0"
            style={{ border: "0" }}
            src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=Sarasota,Fl&zoom=15`}
            allowfullscreen
          ></iframe>
          </div>
        )}
        {/* <div className="map-div">
          <div id="map"></div>
        </div> */}
        <Footer
          text="Looking for more info?"
          button="CHECK OUT OUR SERVICES"
          link="/services"
        ></Footer>
        {/* <div> */}

        {/* <Image src={image} style={{ width: `5rem` }}></Image> */}
      </div>
    );
  }
  // if (isLoggedIn) {
  //     return (
  //         <AdminPanel></AdminPanel>

  //     );
  // }
}
