
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../../components/Hero'
import heroImg from "../../../media/bread.jpg"
import Quote from '../../../components/Quote/quote.js'
import Brandingblock from '../../Services/components/brandingblock/index'
// import arrow from "../../../media/white-arrow.png"
import Footer from '../../../components/Footer/footer'

// import logo from '../../media/logo.png'

export default class Logodesignbranding extends Component {

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
                <Hero image={heroImg} title="Logo Design + Branding" paragraph1="At Miller Media Partners, we wholeheartedly believe that a beautiful, recognizable logo and strong, consistent branding are essential ingredients to growing a successful business that turns heads (and makes you money)." paragraph2="Your brand is more than just a logo - it's an identity that your ideal customer will recognize instantly! That's why we place so much importance on logo design and branding, working with scaling businesses to create brands that will attract their ideal customers." button="REVOLUTIONIZE YOUR BRAND" />
                <div className="home-wrapper">
                    {/* <Quote text="THE ONLY WAY TO DO GREAT WORK IS TO
                    LOVE WHAT YOU DO." author="Steve Jobs"></Quote> */}
                    <Brandingblock/>
                </div>
                <Footer text="Need full-service design work?" button="CHECK OUT OUR PRICES" link="/full-service-design"></Footer>
            </div>
        )

    }
}





