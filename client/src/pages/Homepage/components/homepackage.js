import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import '../style.css';
import arrow from "../../../media/white-arrow.png"
// import profPic from "../../media/5.PNG"
import mugs from "../../../media/2mugss.jpg"
import mmp from "../../../media/mmp.png"
import lemons from "../../../media/lemons.jpg"
// import arrow from "../../../media/white-arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomePackage extends Component {


    render() {

        return (

            <Row className="package-block">
                <Col xs={12} md={6} className="package-text">
                <Image className="stamp-img-mobile" style={{display: 'none'}} src={mmp} width='150px'></Image>

                    <h1>The Whole Package</h1>
                    <p>Looking for a way to tackle Google Ads but not sure where to start?
                    No problem! We've spent years fine-tuning our strategy and creating campaigns that are sure to get you noticed.</p>
                    <p>Want to spice up your business's branding a bit? Leave it to us!
We love working with our partners to turn their branding dreams into reality.</p>
                    <p>Gung-ho for a little bit of everything? Awesome! We'll ensure your branding and message stay consistent from the moment pen touches paper to each time your ideal customer converts.</p>
                </Col>
                <Col className="lemon-col" xs={12} md={6} style={{
                    backgroundImage: `url(${lemons})`,
                    // backgroundColor: `#333333f2`,
                    // opacity: `90%`,
                    // backgroundBlendMode: `multiply`,
                    backgroundPosition: `center`,
                    backgroundSize: `contain`,
                    backgroundRepeat: `no-repeat`,
                    // backgroundAttachment: `fixed`,
                    height: `275px`,
                    width: `25vh`,
                    display: `flex`,
                    alignItems: `center`,
                    position: `relative`
                    //   cover no-repeat center center fixed`
                }}><Image className="stamp-img" src={mmp} width='150px'></Image>
                    <a href="/services">
                        <div className="lemon-btn tc">
                        <p>Explore Our Services</p>
                        <a onClick={this.scrollDown}><Image className="lemon-arrow center" src={arrow}></Image></a>
                        </div>
                        </a>
                       
                    {/* <Image className="stamp-img" src={mmp} width='25px'></Image> */}
                </Col>
                {/* <div className="vertical-line-about"></div> */}
            </Row>
        )

    }
}