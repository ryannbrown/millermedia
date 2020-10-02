
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../../components/Hero'
import heroImg from "../../../media/bread.jpg"
import Quote from '../../../components/Quote/quote.js'
import Fullserviceblock from '../../Services/components/fullserviceblock/index'
// import arrow from "../../../media/white-arrow.png"
import Footer from '../../../components/Footer/footer'

// import logo from '../../media/logo.png'

export default class Fullservice extends Component {

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
                <Hero image={heroImg} title="Full-Service Design" paragraph1="From print to digital, design is a major player when it comes to helping your brand stun. Publication design, advertisements, business cards - you name it! Killer design is key to attracting customers and growing your business.
" paragraph2="It's true! Design is a versatile tool that is often overlooked by businesses and it truly makes a big difference. Remember, you only have one chance to make a first impression - make it count!" button="SCROLL FOR MORE" />
                    {/* <Quote text="THE ONLY WAY TO DO GREAT WORK IS TO
                    LOVE WHAT YOU DO." author="Steve Jobs"></Quote> */}
                    <Fullserviceblock/>
         
                <Footer text="Considering a re-branding?
" button="SEE WHAT WE OFFER" link="/logo-design-branding"></Footer>
            </div>
        )

    }
}





