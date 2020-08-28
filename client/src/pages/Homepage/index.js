
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../components/Hero'
import HomeQuote from '../../components/Quote/quote.js'
import HomeAbout from './components/homeabout'
import HomePackage from './components/homepackage'
import HomeOfferings from './components/homeofferings'
import Footer from '../../components/Footer/footer'
import heroImg from "../../media/homehero.jpg"
import logo from '../../media/logo.png'

export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            isMobile: false
        };
    }


    componentDidMount() {


    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);



    }

    render() {

        const { isMobile } = this.state;



        return (

            <div>
                <Hero image={heroImg} title="Tired of agencies? We're all about partnerships." paragraph1="Our services are created specifically with small businesses in mind.We walk with you every step of the way so that you're not just hiring an agency, you're investing in a partnership that will invest in you." paragraph2="Strike your fancy? Take a gander at what we're all about." button="FIND OUT MORE"/>
                <div className="home-wrapper">
                    <HomeQuote text="GREAT THINGS ARE DONE BY A SERIES OF SMALL THINGS BROUGHT TOGETHER." author="Vincent Van Gogh"></HomeQuote>
                    <HomeAbout></HomeAbout>
                    <HomePackage></HomePackage>
                    <HomeOfferings></HomeOfferings>
                </div>
                <Footer text="Have Questions?" button="LET'S CONNECT" link="/connect"></Footer>
            </div >
        )

    }
}





