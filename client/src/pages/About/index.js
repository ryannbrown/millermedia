
import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import AboutHero from './components/hero'
import AboutAction from './components/action'
import Footer from '../../components/Footer/footer'
import Team from './components/team'
import logo from '../../media/logo.png'

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

            <div>
                <AboutHero></AboutHero>
                <div className="home-wrapper">
                    <Row className="flex-wrapper">
                        <Col>
                            <h1 className="flex-above">HOME BASE</h1>
                            <p className="flex-below">Sarasota, FL</p>
                        </Col>
                        <hr></hr>
                        <Col>
                            <h1 className="flex-above">MARRIED</h1>
                            <p className="flex-below">March 2018</p>
                        </Col>
                        <hr></hr>
                        <Col>
                            <h1 className="flex-above">MILLER HOUNDS</h1>
                            <p className="flex-below">Finnegan</p>
                        </Col>
                    </Row>
                    <AboutAction></AboutAction>
                    <Team></Team>
                </div>
                <Footer text="Have Questions?" button="LET'S CONNECT" link="/connect"></Footer>
            </div >
        )

    }
}





