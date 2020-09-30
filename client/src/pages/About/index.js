
import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Divider, Drawer } from '@material-ui/core';
import Hero from '../../components/Hero'
import AboutAction from './components/action'
import Footer from '../../components/Footer/footer'
import Team from './components/team'
import logo from '../../media/logo.png'
import heroImg from "../../media/boots.jpg"
export default class About extends Component {

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

            <div className="about-page">
                   <Hero image={heroImg} title="We're the Millers" paragraph1="We're a husband and wife team with a fire in our hearts for helping small to mid-sized businesses grow." paragraph2="We're not afraid to mix things up a bit. So, after two cross-country moves, several full-time jobs, and a dream to start our own business, we put our heads together and finally took the leap." button="GET TO KNOW US"/>
                <div className="home-wrapper">
                    <Row className="flex-wrapper">
                        <div className="flex-item">
                            <h1 className="flex-above">HOME BASE</h1>
                            <p className="flex-below">Sarasota, FL</p>
                        </div>
                        <hr></hr>
                        <div className="flex-item">
                            <h1 className="flex-above">MARRIED</h1>
                            <p className="flex-below">March 2018</p>
                        </div>
                        <hr></hr>
                        <div className="flex-item">
                            <h1 className="flex-above">MILLER HOUNDS</h1>
                            <p className="flex-below">Finnegan</p>
                        </div>
                    </Row>
                    <AboutAction></AboutAction>
                    <Team></Team>
                </div>
                <Footer text="Like what you see?" button="CHECK OUT OUR SERVICES" link="/services"></Footer>
            </div >
        )

    }
}





