import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Toast,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import image from "../../media/circle-thing.png";
// import avImage from "../../media/bluemoons.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import Navigation from "../../components/Navigation"
// import logo from "../../media/moons.png";
// import blueLogo from "../../media/bluemoons.png";
// import Panel from './panel';
// import axios from 'axios';

// const queryString = require('query-string');

require("dotenv").config();

export default class BlogContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoggedIn: false,
      catData: [],
      itemPosted: false,
      file: null,
      chosenWork: "0",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileChanged = this.fileChanged.bind(this);
    // this.img = React.createRef();
    this.first = React.createRef();
    this.last = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.message = React.createRef();
  }

  fileChanged(event) {
    console.log(event);
    var f = event.target.files;
    console.log(f);
    this.setState(
      {
        file: f,
      },
      function () {
        console.log(this.state);
      }
    );
    // console.log("state",this.state.file)

    // this.handleImage()
  }

  handleSubmit(event) {
    event.preventDefault();
    let first = this.first.current.value;
    let last = this.last.current.value;
    let email = this.email.current.value;
    let phone = this.phone.current.value;
    let message = this.message.current.value;
    // console.log(date);

    const postItem = () => {
      console.log("posting to DB");
      this.setState({
          itemPosted: true,
      })
      // POST TO DB
    //   fetch("/api/lead-form", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       first: first,
    //       email: email,
    //       phone: phone,
    //       message: message,
    //     }),
    //   }).then((response) => {
    //     console.log("hey i did it");
    //     console.log(response);
    //     if (response.status == "200") {
    //       this.setState({
    //         itemPosted: true,
    //       });
    //     }
    //   });
    };
    postItem();
  }

  componentDidMount() {


  }

  render() {
    const { itemPosted, chosenWork } = this.state;

    return (
      <div className="blog-form-container">
        <form
          // onSubmit={this.handleSubmit}
          action="https://getform.io/f/6ac3031f-0cf4-4ee8-bca8-b61aa15e16c0" method="POST"
          className="connect-form"
          encType="multipart/form-data"
        >
          <Form.Group className="name-row">
            <Form.Control name="firstname" ref={this.first} type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="name-row">
            <Form.Control name="lastname" ref={this.last} type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="email" ref={this.email} type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="phone" ref={this.phone} type="phone" placeholder="Phone (optional)" />
          </Form.Group>
          <Form.Group>
            {/* {/* <Form.Label>Post Body</Form.Label> */}
            <Form.Control
            name="message"
              ref={this.message}
              as="textarea"
              rows="5"
              placeholder="Type your message here..."
            />
          </Form.Group>
          <Button type="submit" className="about-lead-btn" variant="outline-dark">SUBMIT</Button>
        </form>
        {itemPosted ? (
          <div className="toasty">
            <Toast
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                marginLeft: "-175px",
              }}
            >
              <Toast.Header>
                  <img
                    style={{ width: `75px`, height: `auto` }}
                    // src={avImage}
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Miller Media Partners</strong>
                  <small>just now</small>
                </Toast.Header>
              <Toast.Body>
                Thanks for reaching out! We will reach out to you as soon as we
                can!{" "}
              </Toast.Body>
            </Toast>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
