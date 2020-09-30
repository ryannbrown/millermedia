
import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
// import logo from './logo.svg';
import '../style.css';
import { Drawer } from '@material-ui/core';
import alex from '../../../media/alex.png'
import abby from '../../../media/abby.png'
import finn from '../../../media/finn.png'

export default class Team extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            isMobile: false,
            isToggled: false,
            toggledSelection: ''
        };
    }


    toggle(selection) {
        console.log(selection, " toggled")
        this.setState({
            isToggled: true,
            toggledSelection: selection
        })
    }

    componentDidMount() {


    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);



    }

    render() {

        const { isMobile, isToggled, toggledSelection } = this.state;


        if (isToggled && toggledSelection == 'alex') {
            var toggledContent =
                <div className="toggled-faq">
                    <h1>Get to know Alex Miller</h1>
                    <p>Co-Owner | Chief Marketing Officer</p>
                    <h1>Specialty</h1>
                    <p>PPC Advertising</p>
                    <h1>Experience</h1>
                    <p>I've worked in PPC advertising for over five years, and have managed a sales and customer experience team for a small business. I've advertised for a variety of products including furniture, automobiles, financial apps, and even carbon offset credits. These opportunities have allowed me to naturally consider the whole funnel and more importantly, the profitability of initiatives like advertising.</p>
                    <h1>First thing I do on a day off...</h1>
                    <p>Check my emails. My days off are never really days off. I love my work too much.</p>
                    <h1>Someday I'd like to...</h1>
                    <p>Sail the Mediterranean</p>
                    <h1>Drink of choice</h1>
                    <p>Manhattan</p>
                    <h1>About me</h1>
                    <p>Business is my passion. Owning a business of my own has always been a dream of mine; because of this, I know how important it is to small to mid-sized business owners to see a return on their investments. My advertising philosophy drives me to produce relevant content for the most relevant audience first. Grab the low-hanging fruit, then work your way up the rest of the tree. This approach maximizes profit and allows us to truly control our advertising dollars. As Chief Marketing Officer, I have my eyes on all marketing accounts and their performance. I want to make sure our partners are taken care of and that our goals align with their goals.</p>
                </div>
        } else if (isToggled &&toggledSelection =='abby') {
            var toggledContent =
            <div className="toggled-faq">
                <h1>Get to know Abby Miller</h1>
                <p>Co-Owner | Chief Design Officer</p>
                <h1>Specialty</h1>
                <p>Graphic Design</p>
                <h1>Experience</h1>
                <p>I have my bachelor's degree in fine art and have been working in the Graphic Design field for just under five years. I've also worked in several advertising agencies where I had the opportunity to learn and dive deeply into Facebook Advertising for a wide variety of industries.</p>
                <h1>First thing I do on a day off...</h1>
                <p>My morning yoga</p>
                <h1>Someday I'd like to...</h1>
                <p>Go on a worldwide trip solely to visit art museums and archaeological sites. I love art history.</p>
                <h1>Drink of choice</h1>
                <p>Extra Dirty Vodka Martini (with blue cheese stuffed olives)</p>
                <h1>About me</h1>
                <p>From the time I could *literally* hold a pencil, pen, or paintbrush, I've worked to put my stamp on the world - to leave my mark and to communicate the best way I know how - through art. I was privileged enough to attend a small Mennonite university in the mountains of Virginia, where I met my husband and graduated with a degree in fine art. This creative path opened the door for me to enter the marketing field, first as a Facebook Marketer, and later as a Creative Director, managing both marketing and design.
                    <br></br>
Through all my experiences, I've collected the skills and passion required to turn something I thought was only an idea into a beautiful reality. I'm lucky to have been surrounded by mentors that nurtured my creative process, a family that encouraged me to break the rules sometimes, and a husband who has opened my eyes to the realization that anything is possible with a little elbow grease. I'm excited to share my skills and experience with our partners in a way that helps their businesses grow and allows them to feel the utmost support and encouragement from us here at Miller Media Partners.</p>
            </div>
        } else if (isToggled &&toggledSelection =='finn') {
            var toggledContent =
            <div className="toggled-faq">
                <h1>Get to know Finn Miller</h1>
                <p>Company Mascot | Good Boy</p>
                <h1>Specialty</h1>
                <p>Napping</p>
                <h1>Experience</h1>
                <p>3 years</p>
                <h1>First thing I do on a day off...</h1>
                <p>Get every toy I own out of my toy basket and place them strategically all over the floor.
Then take a nap.</p>
                <h1>Someday I'd like to...</h1>
                <p>Know where my humans are at all times.</p>
                <h1>Drink of choice</h1>
                <p>Chicken broth</p>
                <h1>About me</h1>
                <p>I am a 3-year-old, 65-pound golden doodle and professional good boy. I insist on being with my humans at all times and don't like boundaries. I travel with my humans as much as I can and love going to new places and meeting new people. <br></br>
I love licking faces, sitting on laps, hanging my head out the car window, and eggs. I make funny noises and love cuddling, but I also need my alone time and get overwhelmed by crowds. I don't like pretzels, raw vegetables, or getting my teeth brushed.</p>
            </div>
        }

        return (

            <div>
                <h1>Meet the Team</h1>
                <p>Tap our faces to get to know us better</p>

                <div className="image-wrapper">
                    <div onClick={() => { this.toggle('alex') }} className="image-container" style={{
                        backgroundImage: `url(${alex})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `contain`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        height: `275px`,
                        width: `225px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <div className="hover-text">
                            <h1>Alex Miller</h1>
                            <hr></hr>
                            <p>Co-owner | Chief Marketing Officer</p>
                        </div>

                    </div>
                    <div onClick={() => { this.toggle('abby') }} className="image-container" style={{
                        backgroundImage: `url(${abby})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `contain`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        height: `275px`,
                        width: `225px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <div className="hover-text">
                            <h1>Abby Miller</h1>
                            <hr></hr>
                            <p>Co-owner | Chief Design Officer</p>
                        </div>


                    </div>
                    <div onClick={() => { this.toggle('finn') }} className="image-container" style={{
                        backgroundImage: `url(${finn})`,
                        // backgroundColor: `#333333f2`,
                        // opacity: `90%`,
                        // backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `contain`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundAttachment: `fixed`,
                        height: `275px`,
                        width: `225px`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`,
                        marginBottom:'100px'
                        //   cover no-repeat center center fixed`
                    }}>
                        <div className="hover-text">
                            <h1>Company Mascot</h1>
                            <hr></hr>
                            <p>Good Boy</p>
                        </div>

                    </div>
                </div>
                {isToggled && <div className="show-toggle">
                    {toggledContent}
                </div>
                }

            </div>

        )

    }
}





