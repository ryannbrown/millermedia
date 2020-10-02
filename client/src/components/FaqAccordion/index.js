import { Accordion, Card } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import "./style.css";

export default class FaqAccordion extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div className="faq-section">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Do I have to use both the marketing AND design services offered?
              <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Great question! No, you don't. We offer a variety of services
                  and packages for you to choose from for both our marketing AND
                  design services. If you already have a marketing team
                  in-house, no biggie - we're happy to help you with the design
                  part of the equation and vice versa. We want to make sure
                  you're getting exactly what you're looking for to fit your
                  business's specific needs. Whatever you're looking for, we've
                  got you covered.
                </p>
                <p>
                  If you'd like more information on how this whole thing works,
                  contact us and we'll be happy to help!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              If I become a partner, will I have to sign a contract?
              <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  We're not fans of being locked into a contract, and we're sure
                  you're in the same boat. When we first partner with you, we'll
                  send over a working agreement outlining what you can expect
                  from our services and all the nitty gritty. We know it takes a
                  bit to get to know each other, get familiar with your needs,
                  and decide whether or not a working partnership is really in
                  the cards for us. That's why we do hope for an initial 3-month
                  commitment to working with one another upfront. After that,
                  either party can decide to part ways for any reason!
                </p>
                <p>
                  But if you'd rather complete a long-term working agreement for
                  more than the initial 3-month commitment, we're open to that,
                  too!
                </p>
                <p>
                  If you'd like more information on our working agreements,
                  contact us and we'll get back to you as soon as possible!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
            I don't see the service I need offered on your website. Do you offer it?
            <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                It never hurts to ask! We're mostly self-taught and continue growing in our services as a result of learning new things. If there's a service that you're looking for that isn't yet listed on our site, we may already offer it on a client-to-client basis or be excited and ready to learn whatever you need using the skills we already possess.

                </p>
                <p>
                If you'd like more information on what services we offer, submit a contact form and we'll reach out!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            Can I hire you on a retainer basis?
            <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                Yes! We offer retainer services for both our marketing and design services. While the marketing packages vary based on your goals and specific services, we offer full-service marketing for you on a month-to-month basis so that we can walk with you through all the progress, successes, and analytical goodness as we work together to watch your business grow.

                </p>
                <p>
                As far as design services go, we do offer three separate retainer packages so that you can request projects on-demand throughout the month. Our 'Single Scoop' package offers 10 hours of design work each month, our 'Double Scoop' offers 20 hours of design work each month, and our 'Triple Scoop' offers 40 hours of design work each month. It's really just a matter of what your business needs in the way of design. Our design retainers don't include logo or branding design, but we do offer those services separately as well as hourly design work for one-off projects. Here's a closer look at <a className="faq-link" href="pdflink">our retainer design services.</a>
                </p>
                <p>
                If you'd like more information on our retainer services, contact us and we'll fill you in!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
            What graphic design services do you offer?
            <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                We offer design retainer packages, sized to meet your needs, in addition to logo design, branding design, and hourly design services. Our design packages range from 10, 20 and 40 hours each month while our hourly design services are geared more toward one-off projects. From content creation to ad design and more, the retainer packages and hourly work have you covered.
                </p>
                <p>
                We want to be upfront with you, so we'll give it to you straight. Hourly design work does require a $150 deposit before work can begin. But don't worry! This deposit is applied to your final cost and, if you don't require enough work to cover the deposit, the difference will be refunded to you. Want more information on our different services? Here you go!
                </p>
                <p>
                If you'd like more information on pricing for our design services, <a>contact us</a> and we'll give you the scoop!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
            I need a logo but I don't need branding. Can I just do one or the other?
            <FontAwesomeIcon className="down-icon" icon={faChevronDown}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                Absolutely! We believe that great branding is much more than just a logo, but a strong logo provides the perfect stepping stone to a brand that impresses. That's why we offer either just a logo or complete brand strategy.
                </p>
                <p>
                <i>When you request a logo,</i> we'll work with you to bring your vision to life. And while logo design doesn't necessarily mean we'll be working with you on a retainer basis, we'll always be here if you need us for any other design work as you need it.
                </p>
                <p>
<i>When you request branding,</i> we'll not only design a logo for you but we'll also create a complete brand guide with brand colors, fonts, and brand images that speak to your brand and your ideal customer in a consistent way.
Want more information on our logo and branding prices? Check out our price sheet!
                </p>
                <p>
                If you're curious about revolutionizing your brand, contact us and we'll talk about what you're looking for.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
