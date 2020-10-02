
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../components/Hero'
import heroImg from "../../media/bread.jpg"
import Quote from '../../components/Quote/quote.js'
import Ppcblock from '../Services/components/ppcblock/index'
import FaqAccordion from '../../components/FaqAccordion'
// import arrow from "../../../media/white-arrow.png"
import Footer from '../../components/Footer/footer'

// import logo from '../../media/logo.png'

export default class Faq extends Component {

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
                <Hero image={heroImg} title="Frequently Asked Questions" button="GET THE ANSWERS" />
                <div className="home-wrapper">
                    {/* <Quote text="THE ONLY WAY TO DO GREAT WORK IS TO
                    LOVE WHAT YOU DO." author="Steve Jobs"></Quote> */}
                    <FaqAccordion/>
                </div>
                <Footer text="Want more info?" button="PEEK AT OUR FAQs" link="/faq"></Footer>
            </div>
        )

    }
}





