import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import {Link} from "react-router-dom"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import logo from "../../../../media/mmp.png";
import desk from "../../../../media/workimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class Ppcblock extends Component {
  render() {
    return (
      <section>
        <div className="home-wrapper">
          <div className="ppc-block-1 margin-top">
            <div className="ppc-left">
            <div className="grey-container">
            <div
                style={{ backgroundImage: `url(${desk})` }}
                className="ppc-grey-img-left"
              ></div>
              <div className="ppc-grey"></div>
              <div className="ppc-vertical-line-1"></div>
              <Image className="grey-stamp" src={logo}></Image>
            
            </div>
            </div>
            <div className="ppc-right">
            <div className="ppc-text-1">
              <h1>Why us?</h1>
              <p>
                Pay-per-click advertising is where we started. Alex worked for
                his parent's company for years, starting in the warehouse, then
                in miscellaneous desk jobs. The business had hired several
                agencies to manage their PPC ads, but none of them dedicated the
                attention needed to produce a great ROI for the company. In
                2013, Alex took on the challenge of managing the ads. After a
                few months of teaching himself PPC, the company saw a
                small-scale ROI of over 400%. Even as the budget grew to over
                $60k per month, the company is still consistently seeing an ROI
                of 150%+.
              </p>
              <p>
                We have experience working for the little guy, and we have
                experience working for agencies. We noticed in every instance,
                agencies just don't care enough. They throw 40 accounts at each
                ad manager and promise clients more leads than they can produce.
                Not us. We're committed to transparency and a healthy balance
                for our employees. In turn, we will provide better results and a
                collaborative partnership with all of our clients regardless of
                their budget.
              </p>
              <Link to="/ppc">
                <Button className="about-lead-btn" variant="outline-dark">
                  TAKE THE FIRST STEP
                </Button>
              </Link>
            </div>
            <div className="ppc-grey-img-container">
            <div
                style={{ backgroundImage: `url(${desk})` }}
                className="ppc-grey-img"
              ></div>
            </div>
            </div>
          </div>
          </div>
          <div
            style={{ backgroundImage: `url(${desk}` }}
            className="branding-img"
          ></div>
          <div className="home-wrapper">
          <div className="ppc-block margin-top">
            <div className="ppc-vertical-line"></div>
            <div className="ppc-text">
              <h1>How It Works</h1>
              <p>
                How It Works The most popular platforms for PPC are Google Ads
                and Microsoft (Bing) Ads. We can get you set up quickly on both
                platforms with goals set up in Google Analytics. We at Miller
                Media Partners believe it's important to align our compensation
                with your goals, and our flexible pricing models reflect that.
              </p>
              <p>
                For more details on pay-per-click advertising, please contact us
                to set up a free consultation so we can answer any questions you
                may have and figure out if we're a good fit for each other. Even
                if you just want some help setting up your account, we're just a
                phone call away.
              </p>
              <Link to="/ppc">
                <Button className="about-lead-btn" variant="outline-dark">
                  GET YOUR FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
