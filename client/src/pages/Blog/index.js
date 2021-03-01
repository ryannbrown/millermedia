import { Container, Nav, Button, Image } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./style.css";
import { Drawer } from "@material-ui/core";
import Hero from "../../components/Hero";
import heroImg from "../../media/bread.jpg";
import Footer from "../../components/Footer/footer";
import Prismic from "prismic-javascript";
// import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
import { RichText } from 'prismic-reactjs'
import { format, parseISO } from 'date-fns'
// import logo from '../../media/logo.png'

require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Blog() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  console.log(apiEndpoint, accessToken);
  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
    console.log("hey man!");
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "blog")
      )
      if (response) {
        setDocData(response.results);
        console.log(response.results);
      }
    };
    fetchData();
  }, []);

  if (doc) {
    var firstPost = doc.slice(0,1).map(
      (post) => (
        <div className="blog-post">
          {/* <Link to={`/blog/${post.uid}`}> */}
       
            <img
              className="blog-img"
              alt="cover"
              src={post.data.blog_image.url}
            />
                 <div className="date-cat">
                   <p>{format(new Date(post.data.date), "MMMM DD, YYYY")}</p>
                   <p>{post.data.category[0].text}</p>
                   {/* <p>{post.data.category[0].text}</p> */}
                   </div>
                   <h1>{post.data.title[0].text}</h1>
                   <RichText render={post.data['meta-description']} linkResolver={linkResolver} />
                   <button>Read More</button>
          {/* </Link> */}
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
    var nextThreePosts = doc.slice(1,4).map(
      (post) => (
        <div className="blog-post">
          <Link to={`/blog/${post.uid}`}>
            <div>{post.data.title[0].text}</div>
            <img
              className="blog-img"
              alt="cover"
              src={post.data.blog_image.url}
            />
          </Link>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
  }

  return (
    <div>
      <Hero image={heroImg} title="Blog" button="Read up!" />
      <div className="home-wrapper">
        <div>
          {doc ? (
            <div className="blog-page">
            <div className="blog-left">
              <div className="recent-block">
              {firstPost}
                </div>
            <div className="blog-wrapper">
            
              {nextThreePosts}
              {/* <h1>{RichText.asText(doc.data.title)}</h1>
                             <img alt='cover' src={doc.data.blog_image.url} />
                            <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
                            </div>
                  </div>  
                  <div className="blog-right" >
                    </div>        
            </div>
          ) : (
            <div>No content</div>
          )}
        </div>
      </div>
      <Footer
        text="Want more info?"
        button="PEEK AT OUR FAQs"
        link="/faq"
      ></Footer>
    </div>
  );
}
