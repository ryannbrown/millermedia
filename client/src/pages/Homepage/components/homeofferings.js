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


    render() {

        return (

            <div className="offerings-block">
                <h1>Here's some of what we offer.</h1>
                <div className="wrapper">
                    <div className="offering" style={{
                        backgroundImage: `url(${ppc})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        width: `243px`,
                        height: `243px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <Button variant="dark" className="offering-btn">PPC ADVERTISING</Button>
                    </div>
                    <div className="offering" style={{
                        backgroundImage: `url(${fbads})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        width: `243px`,
                        height: `243px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <Button variant="dark" className="offering-btn">FACEBOOK ADS</Button>
                    </div>
                    <div className="offering" style={{
                        backgroundImage: `url(${logobranding})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        width: `243px`,
                        height: `243px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <Button variant="dark" className="offering-btn">LOGO + BRANDING</Button>
                    </div>
                    <div className="offering" style={{
                        backgroundImage: `url(${fullservice})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        width: `243px`,
                        height: `243px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <Button variant="dark" className="offering-btn">FULL-SERVICE DESIGN</Button>
                    </div>
                </div>
            </div>
        )

    }
}