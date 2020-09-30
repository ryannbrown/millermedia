import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import logo from '../../../../media/mmp.png';
import desk from '../../../../media/desk.jpg';
import lights from '../../../../media/lights.jpg';
// import arrow from "../../../media/white-arrow.png"
// import profPic from "../../media/5.PNG"
// import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class ServiceBlock extends Component {


    render() {

        return (
            <section>


                <div className="service-block">
                    <Image className="service-block-logo" width='100px' src={logo}></Image>
                    <div className="ppc-text">
                        <h1>Pay-Per-Click Advertising</h1>
                        <p>We know pay-per-click advertising like the backs of our hands. By teaming up with small businesses that are eager to grow, we strategize with you to set goals that will allow you to flourish and thrive on any budget. Together, we reach them - and we're there with you through every step of the way.</p>
                        <a href="/ppc"><Button className="about-lead-btn" variant="outline-dark">ASK ABOUT PPC SERVICES</Button></a>
                    </div>
                    <div className="grey-div"></div>
                    <div className="vertical-line-service-1"></div>
                </div>
                <div className="collage">
                    <Image className="collage-1" width='25%' src={lights}></Image>
                    <Image className="collage-2" width='25%' src={desk}></Image>
                    <div className="vertical-line-service"></div>
                </div>
                <div className="fb-text">
                    <h1>Facebook Advertising</h1>
                    <p>At MMP, we believe that Facebook advertising is an <i><strong>essential</strong></i> ingredient to any advertising strategy. It's a super-powerful platform in the digital marketing space and we just so happen to love using it! We have experience producing exceptional results for clients in a wide array of industries and we'd love to add yours to the list!</p>
                    <a href="/contact"><Button className="about-lead-btn" variant="outline-dark">FIND OUT MORE</Button></a>
                </div>
                <div className="logo-branding-block">
                    <Image className="" width='75%' height="400px" src={desk}></Image>
                    <div className="logo-branding-box">
                        <div className="logo-branding-text">
                            <h1>Logo Design + Branding</h1>
                            <p>Making a good first (and lasting) impression on the world is a key ingredient to growing a business. It's important to be transparent, so we'll give it to you straight - we believe a logo is only as good as the branding that backs it up. That's why we offer both individual logo design as well as full-fledged branding with logo creation and brand strategy so that you can pick and choose what works best for you.</p>
                            <a href="/logo-design-branding"><Button className="about-lead-btn" variant="outline-dark">Ready to revolutionize your brand?</Button></a>
                        </div>
                    </div>
                </div>
                <div className="service-block">
                    <div className="ppc-text">
                        <h1>Full-Service Design</h1>
                        <p>Got a design need? No problem! We offer a wide range of design services that provide you with whatever you need. From hourly design work to design retainer packages, we're there when you need us, for whatever you need us for.</p>
                        <a href="/full-service-design"><Button className="about-lead-btn" variant="outline-dark">GET STARTED</Button></a>
                    </div>

                    {/* <div className="vertical-line-about"></div> */}
                </div>
                    <div className="collage-two">
                    <img className="collage-4" width='25%' src={desk}></img>
                    <img className="collage-3" width='25%' src={lights}></img>
                    <Image className="service-block-logo-2" width='100px' src={logo}></Image>
                    <div className="vertical-line-service-2"></div>
                </div>
            </section>
        )

    }
}