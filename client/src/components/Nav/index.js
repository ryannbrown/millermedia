import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"
import logo from '../../media/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
var _ = require("lodash");

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      mobileNavToggle: false
    };
  }

  toggleNav = () => {
   if (this.state.mobileNavToggle) {
     this.setState({
         mobileNavToggle: false
     })
   } else if (!this.state.mobileNavToggle) {
    this.setState({
      mobileNavToggle: true
  })
   }
  }

  componentDidMount() {}

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth > 1150) {
          this.setState({
            mobileNavToggle: false,
          });
          document.getElementById("navvy-bar").className = "header";
          document.getElementById("menu-toggle").checked = false
        } 
        else if (window.innerWidth < 1150) {
          if (this.state.mobileNavToggle) {
            document.getElementById("menu-toggle").checked = true;
          }
        }
          
      }, 400)
    );
  }

  render() {
    return (
      <div className="nav-section">
        <header id="navvy-bar" class={this.state.mobileNavToggle ? 'mobile-header' : 'header'}>
          <nav>
            <div className="nav-brand"> <img className="nav-logo" src={logo} width="300px"></img></div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li className="service-trigger">
              <input type="checkbox" class="nav-down-toggle" id="nav-toggle"></input>
              <FontAwesomeIcon className="nav-down" icon={faChevronDown}/>
                <a href="/Services">Services</a>
                <div className="nav-services">
                  <div className="nav-service-arrow">
              
                
                  </div>
              <li>
                <a href="/ppc">Pay-Per-Click Advertising</a>
              </li>
              <li>
                <a href="/logo-design-branding">Logo Design + Branding</a>
              </li>
              <li>
                <a href="/full-service-design">Full-Service Design</a>
              </li>
              </div>
              </li>
             
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <input type="checkbox" class="menu-toggle" id="menu-toggle" onClick={this.toggleNav} />
        <div class="mobile-bar">
        <div className="nav-brand"> <img className="mobile-nav-logo" src={logo}></img></div>
          <label for="menu-toggle" class="menu-icon">
            <span></span>
          </label>
        </div>
      </div>
    );
  }
}
