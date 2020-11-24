
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../../components/Hero'
import heroImg from "../../../media/bread.jpg"
import Quote from '../../../components/Quote/quote.js'
import Ppcblock from '../../Services/components/ppcblock/index'
// import arrow from "../../../media/white-arrow.png"
import Footer from '../../../components/Footer/footer'

// import logo from '../../media/logo.png'

export default class Ppc extends Component {

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
                <Hero image={heroImg} title="Pay-Per-Click Advertising" paragraph1="If you're not on Google and Bing, you're missing out on leads.
If a company were only to run one type of advertising, we would insist it be PPC. Pay-per-click advertising is extremely effective at capturing people looking for your product, whether your budget is $100,000 or $100." paragraph2="PPC is largely based on keyword targeting, and setting up a few keywords for your brand or core product lines is relatively simple. However, there are a lot of nuances to the platforms and strategy behind PPC, so if you want some help managing your ads or even just a free consultation to help you set up your account, don't hesitate to give us a call!" button="SCROLL FOR MORE" />
                {/* <div className="home-wrapper"> */}
                    {/* <Quote text="THE ONLY WAY TO DO GREAT WORK IS TO
                    LOVE WHAT YOU DO." author="Steve Jobs"></Quote> */}
                    <Ppcblock/>
                {/* </div> */}
                <Footer text="Want more info?" button="PEEK AT OUR FAQs" link="/faq"></Footer>
            </div>
        )

    }
}





