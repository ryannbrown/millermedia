
import { Container, Nav, Button, Image, Col, Row } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
import logo from '../../media/stamplogo.png';
import './style.css';


export default class Footer extends Component {

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
                <div className="greyfooter">
                    <div className="greyfooter-content">
                        <h3 className="item">{this.props.text}</h3>
                        <a href={this.props.link}><button className="item" className="connect-btn">{this.props.button}</button></a>
                    </div>
                </div>
                <Row className="darkfooter">
                    <Col>
                    <Image className="stamplogo" width='200px' src={logo}></Image>
                    <hr></hr>
                    </Col>
                </Row>
            </div>

        )

    }
}





