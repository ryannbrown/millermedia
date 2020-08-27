
import { Container, Nav, Button, Image } from 'react-bootstrap'
import {Navbar, NavDropdown} from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';

import logo from '../../media/logo.png'

export default class Navigation extends Component {

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
     <Navbar fixed="top" bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand href="#home">
    <Image src={logo} width="300px"></Image>
  </Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/faq">FAQs</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div >
    )

  }
}





