
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../components/Hero'
import heroImg from "../../media/bread.jpg"
import Quote from '../../components/Quote/quote.js'
import ServiceBlock from '../Services/components/ServiceBlock'
// import arrow from "../../../media/white-arrow.png"
import Footer from '../../components/Footer/footer'
import {Link} from "react-router-dom"

// import logo from '../../media/logo.png'

export default class Services extends Component {

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
                <Hero image={heroImg} title="What We Offer" paragraph1="We're a full-service marketing and design company that specializes in helping small businesses thrive. Our areas of expertise are fine-tuned to meet your needs and strategically nurture your business all at the same time." paragraph2="Not sure if we do something you're interested in? It never hurts to ask! We're fast learners and have grown our overall portfolio through a lot of self-guidance and instruction. Also a plus, we love to learn! Tackling new challenges is part of what gets our hearts racing." button="CHECK OUT OUR SERVICES" />
                <div className="home-wrapper">
                    <Quote text="THE ONLY WAY TO DO GREAT WORK IS TO
                    LOVE WHAT YOU DO." author="Steve Jobs"></Quote>
                    <ServiceBlock></ServiceBlock>
                </div>
                <Footer text="Have Questions?" button="LET'S CONNECT" link="/connect"></Footer>
            </div>
        )

    }
}





