
import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import '../style.css';
import { Drawer } from '@material-ui/core';

export default class Team extends Component {

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
                <h1>Meet the Team</h1>
                <p>Tap our faces to get to know us better</p>

                <div>
                    {/* <Image src={}></Image> */}

                </div>
            </div>

        )

    }
}





