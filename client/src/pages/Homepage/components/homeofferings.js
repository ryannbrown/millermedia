import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
// import profPic from "../../media/5.PNG"
import mugs from "../../../media/2mugss.jpg"
import mmp from "../../../media/mmp.png"
import ppc from "../../../media/ppc.jpg"
import logobranding from "../../../media/logobranding.jpg"
import fullservice from "../../../media/fullservice.jpg"
import fbads from "../../../media/fbads.jpg"
import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



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
                        <a href="/ppc"><Button variant="dark" className="offering-btn">PPC ADVERTISING</Button></a>
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
                        <a href="/services"><Button variant="dark" className="offering-btn">FACEBOOK ADS</Button></a>
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
                        <a href="/logo-design-branding"><Button variant="dark" className="offering-btn">LOGO + BRANDING</Button></a>
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
                        <a href="full-service-design"><Button variant="dark" className="offering-btn">FULL-SERVICE DESIGN</Button></a>
                    </div>
                </div>
            </div>
        )

    }
}