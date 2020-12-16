import { Container, Nav, Button, Image, Col, Row } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import DesktopFooter from "./DesktopFooter/DesktopFooter"
import MobileFooter from "./MobileFooter/MobileFooter"
import logo from "../../media/stamplogo.png";
import "./style.css";
var _ = require("lodash");

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  componentDidMount() {
    let height = window.innerHeight + "px";
    // console.log(height);

    this.setState({
      height: height,
    });

    if (window.innerWidth < 667) {
      this.setState({
        isMobile: true,
      });
    }
    window.addEventListener("resize", () => {
      let height = window.innerHeight + "px";
      this.setState({
        height: height,
      });
    });
  }

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth < 667) {
          this.setState({
            isMobile: true,
          });
        } else if (window.innerWidth > 667) {
          this.setState({
            isMobile: false,
          });
        }
      }, 400)
    );
  }


  render() {
    const { isMobile } = this.state;

    return (
      <div>
        {!isMobile? <DesktopFooter logo={logo} text={this.props.text} button={this.props.button} link={this.props.link}></DesktopFooter> :
        <MobileFooter logo={logo} text={this.props.text} button={this.props.button} link={this.props.link}></MobileFooter>}
      </div>
    );
  }
}
