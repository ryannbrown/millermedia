
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import HomeHero from './components/hero'
import HomeQuote from './components/homequote'
import HomeAbout from './components/homeabout'
import HomePackage from './components/homepackage'
import HomeOfferings from './components/homeofferings'
import Footer from '../../components/Footer/footer'

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
                <HomeHero></HomeHero>
                <div className="home-wrapper">
                    <HomeQuote></HomeQuote>
                    <HomeAbout></HomeAbout>
                    <HomePackage></HomePackage>
                    <HomeOfferings></HomeOfferings>
                </div>
                <Footer text="Have Questions?" button="LET'S CONNECT" link="/connect"></Footer>
            </div >
        )

    }
}





