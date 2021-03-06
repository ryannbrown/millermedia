import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
// import profPic from "../../media/5.PNG"
import mugs from "../../../media/2mugss.jpg"
import mmp from "../../../media/mmp.png"
import ppc from "../../../media/ppc-min.jpg"
import logobranding from "../../../media/logobranding-min.jpg"
import fullservice from "../../../media/fullservice-min.jpg"
import fbads from "../../../media/fbads-min.jpg"
import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"


export default class HomeOfferings extends Component {

    navTo = (page) => {
        window.location = page
    }


    render() {

        return (

            <div className="offerings-block">
                <h1>Here's some of what we offer.</h1>
                <div className="wrapper">
                    <div className="offering" onClick={() => {this.navTo('/ppc')}} style={{
                        backgroundImage: `url(${ppc})`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`,
                        cursor:'pointer'
                    }}>
                        <Link to="/ppc"><Button variant="dark" className="offering-btn">PPC ADVERTISING</Button></Link>
                    </div>
                    <div className="offering" onClick={() => {this.navTo('/services')}} style={{
                        backgroundImage: `url(${fbads})`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`,
                        cursor:'pointer'
                    }}>
                        <Link to="/services"><Button variant="dark" className="offering-btn">FACEBOOK ADS</Button></Link>
                    </div>
                    <div className="offering" onClick={() => {this.navTo('/logo-design-branding')}} style={{
                        backgroundImage: `url(${logobranding})`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`,
                        cursor:'pointer'
                    }}>
                        <Link to="/logo-design-branding"><Button variant="dark" className="offering-btn">LOGO + BRANDING</Button></Link>
                    </div>
                    <div className="offering" onClick={() => {this.navTo('full-service-design')}} style={{
                        backgroundImage: `url(${fullservice})`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`,
                        cursor:'pointer'
                    }}>
                        <Link to="full-service-design"><Button variant="dark" className="offering-btn">FULL-SERVICE DESIGN</Button></Link>
                    </div>
                </div>
            </div>
        )

    }
}