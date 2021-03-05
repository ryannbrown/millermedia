import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"
import logo from "../../media/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
var _ = require("lodash");

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      mobileNavToggle: false,
    };
  }



  // updateHandle = (handle, i) => {
  //   console.log(handle, i)
  //   // console.log(event)
  //   let activeClass = document.getElementsByClassName('is-lit');
  //   if (activeClass.length > 0) {
  //     activeClass[0].classList.remove('is-lit')
  //   }
  //   // console.log(activeClass)
  //   // this.setState({ handle: handle });
  //   // const ourContext = this.context;
  //   // console.log("updating handle");
  //   // ourContext.grabCollection(handle);
  //   let makeActive = document.getElementById(`nav-link-${i}`);
  //   // console.log(thisHere.classList);
  //   makeActive.classList.add("is-lit")
  // };

  // makeFirstLinkActive = (i) => {
 
  //   // will only fire if no other links are active 
  //   if (document.getElementsByClassName('is-lit').length == 0) {
  //     // saves arrays as object
  //     let thisHere = document.getElementsByClassName('linkz')
  //     console.log(thisHere)
  //     // grabs last one which happens to be most popular. If Most Popular collection gets deleted, we will have issues.
  //     let mostPop = thisHere[0]
  //     if (mostPop) {
  //       // makes it bold
  //       mostPop.classList.add('is-lit')
  //     }
  //   }
  // }

  toggleNav = () => {
    if (this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: false,
      });
    } else if (!this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: true,
      });
    }
  };

  handleMobileNav = () => {
    this.setState({ mobileNavToggle: false });
    document.getElementById("menu-toggle").checked = false;
  };

  componentDidMount() {
    // this.makeFirstLinkActive();
  }

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth > 1150) {
          this.setState({
            mobileNavToggle: false,
          });
          document.getElementById("navvy-bar").className = "header";
          document.getElementById("menu-toggle").checked = false;
        } else if (window.innerWidth < 1150) {
          if (this.state.mobileNavToggle) {
            document.getElementById("menu-toggle").checked = true;
          }
        }
      }, 400)
    );
  }

  render() {


// const links = [
//   ["Home", 1], ["About", 2],
// ]
//     var firstTwoLinks = links.map((item,i) => {
//       return (
//         <li>
//         <Link className="linkz" id={`nav-link-${item[1]}`}
//           onClick={() => {
//             this.updateHandle(item[0], item[1]);
//           }}
//           to={`/${item[0]}`}
//         >
//           {item[0]}
//         </Link>
//         </li>
//       );
//     });

// const links = [
//   ["Home", 1], ["About", 2],
// ]
//     var firstTwoLinks = links.map((item,i) => {
//       return (
//         <li>
//         <Link className="linkz" id={`nav-link-${item[1]}`}
//           onClick={() => {
//             this.updateHandle(item[0], item[1]);
//           }}
//           to={`/${item[0]}`}
//         >
//           {item[0]}
//         </Link>
//         </li>
//       );
//     });

    return (
      <div className="nav-section">
        <header
          id="navvy-bar"
          class={this.state.mobileNavToggle ? "mobile-header" : "header"}
        >
          <nav>
            <div className="nav-brand">
              {" "}
              <img className="nav-logo" src={logo} width="300px"></img>
            </div>
            {this.state.mobileNavToggle ? (
              <ul>
                <li>
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/About">About</NavLink>
                </li>
                <li className="service-trigger">
                  <input
                    type="checkbox"
                    class="nav-down-toggle"
                    id="nav-toggle"
                  ></input>
                  <FontAwesomeIcon className="nav-down" icon={faChevronDown} />
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/Services">
                    Services
                  </NavLink>
                  <div className="nav-services">
                    <div className="nav-service-arrow"></div>
                    <li>
                      <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/ppc">
                        Pay-Per-Click Advertising
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active"
                        onClick={this.handleMobileNav}
                        to="/logo-design-branding"
                      >
                        Logo Design + Branding
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active"
                        onClick={this.handleMobileNav}
                        to="/full-service-design"
                      >
                        Full-Service Design
                      </NavLink>
                    </li>
                  </div>
                </li>

                <li>
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/faq">
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" onClick={this.handleMobileNav} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                {/* {firstTwoLinks} */}
                <li className="link-wrapper">
                  <NavLink 
                 activeClassName="active"
             exact to="/">Home</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink
                  activeClassName="active"
             to="/About">About</NavLink>
                </li>
                <li className="service-trigger">
                  {/* <input
                    type="checkbox"
                    class="nav-down-toggle"
                    id="nav-toggle"
                  ></input> */}
                  <FontAwesomeIcon className="nav-down" icon={faChevronDown} />
                  <NavLink activeClassName="active" to="/Services">Services</NavLink>
                  <div className="nav-services">
                    <div className="nav-service-arrow"></div>
                    <li>
                      <NavLink activeClassName="active" to="/ppc">Pay-Per-Click Advertising</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/logo-design-branding">
                        Logo Design + Branding
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/full-service-design">Full-Service Design</NavLink>
                    </li>
                  </div>
                </li>

                <li>
                  <NavLink activeClassName="active" to="/faq">FAQs</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
              </ul>
            )}
          </nav>
        </header>
        <input
          type="checkbox"
          class="menu-toggle"
          id="menu-toggle"
          onClick={this.toggleNav}
        />
        <div class="mobile-bar">
          <div className="nav-brand">
            {" "}
            <img className="mobile-nav-logo" src={logo}></img>
          </div>
          <label for="menu-toggle" class="menu-icon">
            <span></span>
          </label>
        </div>
      </div>
    );
  }
}
