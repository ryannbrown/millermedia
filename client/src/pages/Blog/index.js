import { Container, Nav, Button, Image } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import "./style.css";
import { Drawer } from "@material-ui/core";
import Hero from "../../components/Hero";
import heroImg from "../../media/bread.jpg";
import Footer from "../../components/Footer/footer";
import Prismic from "prismic-javascript";
// import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
import { RichText } from "prismic-reactjs";
import { format, parseISO } from "date-fns";
import fam from '../../media/fam.jpg'
import ClipLoader from "react-spinners/ClipLoader";
import uniq from 'lodash/uniq';
import _ from 'lodash'
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
  const [cats, setCats] = React.useState(null);
  const [ maxPosts, setMaxPosts] = React.useState(4);


  const fetchCategories = (data) => {
  let allCats = []
  data.forEach((post) => {
    allCats.push(post.data.category_name)
  })
  console.log(allCats)
    let uniqueCats = _.uniq(allCats)
    setCats(uniqueCats)
  }


  const searchByCat = (e) => {
    let cat = e.currentTarget.textContent;
    console.log(cat)
//  console.log(e.currentTarget.textContent)
const fetchData = async (cat) => {
  console.log(cat)
  const response = await Client.query(
    // Prismic.Predicates.at('document.type', 'blog'),


    // [
    // Prismic.Predicates.at("document.type", "blog"),
    Prismic.Predicates.at("my.blog.category_name", cat),
    { orderings: "[my.blog.date desc]" }
  
  // ]
  );
  if (response) {
    setDocData(response.results);
    // fetchCategories(response.results)
    console.log(response.results);
  }
};
fetchData(cat);

  }

  const textSearch = (e) => {
    console.log(e.target.value)
    let query = e.target.value;
    const fetchData = async (query) => {
      // console.log(cat)
      const response = await Client.query([
        Prismic.Predicates.at('document.type', 'blog'),
        Prismic.Predicates.fulltext('document', query)
    ]);
      // if (response.results.length > 0) {
      if (response) {
        setDocData(response.results);
        // fetchCategories(response.results)
        console.log(response.results);
      }
    };
    fetchData(query)


  }
  const showAllPosts = () => {
    setMaxPosts(maxPosts + 3)
  }
  const showRecentPosts = () => {
    setMaxPosts(4)
  }

  React.useEffect(() => {
    console.log("hey man!");
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "blog"),
        { orderings: "[my.blog.date desc]" }
      );
      if (response) {
        fetchCategories(response.results)
          setDocData(response.results);    
        console.log(response.results);
      }
    };
    fetchData();
  }, []);

  if (doc && cats) {
    var firstPost = doc.slice(0, 1).map(
      (post) => (
        <div className="blog-post">
          {/* <Link to={`/blog/${post.uid}`}> */}

          <img
            className="latest-blog-img"
            alt="cover"
            src={post.data.blog_image.url}
          />
          <div className="date-cat">
            <p>{format(new Date(post.data.date), "MMMM DD, YYYY")}</p>
            <p>●</p>
            <p>{post.data.category_name}</p>
            {/* <p>{post.data.category[0].text}</p> */}
          </div>
          <h1>{post.data.title[0].text}</h1>
          <p className="ta-left">
            <RichText
              render={post.data["meta-description"]}
              linkResolver={linkResolver}
            />
          </p>
             <Link to={`/blog/${post.uid}`}>
          <button className="dark-btn">Read More</button>
          </Link>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
    var categories = cats.map(
      (cat) => (
        <div onClick={searchByCat} data={cat} className="blog-category">
          <p>{cat}</p>
          <div className="opacity-layer">

          </div>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
  //  let theMaxPosts = 4;
    var nextThreePosts = doc.slice(1, maxPosts).map(
      (post) => (
        <div className="list-blog-post">
          {/* <Link to={`/blog/${post.uid}`}> */}
          <div
            className="blog-img"
            alt="cover"
            style={{backgroundImage: `url(${post.data.blog_image.url})`}}
            // src={post.data.blog_image.url}
          />
          <div className="blog-details">
            <h1>{post.data.title[0].text}</h1>
            <div className="date-cat">
              <p>{format(new Date(post.data.date), "MMMM DD, YYYY")}</p>
              <p className="lil-circle">●</p>
              <p>{post.data.category_name}</p>
            </div>
            <p className="ta-left list-description">
            <RichText
              render={post.data["meta-description"]}
              linkResolver={linkResolver}
            />
          </p>
          <Link to={`/blog/${post.uid}`}>
          <button className="transparent-btn">View Post</button>
          </Link>
          </div>
          {/* </Link> */}
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
  }

  return (
    <div className="blog-page">
      <Hero image={heroImg} title="Blog" button="Read up!" />
      <div className="home-wrapper">
      
          {doc ? (
            <div className="blog-page">
              <div className="blog-left">
              {doc.length < 1 && <div className="search-error">
               <h1> We are sorry,</h1> 
               <p>there appear to be no posts associated with your search.</p>
               <p>Feel free to alter your search, or return to our latest posts</p>
              <a href="/blog" ><button className="dark-btn">See Latest Posts</button></a>
              
                    </div>}
                <div className="recent-block">{firstPost}</div>
                {doc.length > 1 &&
              <div>
                  <div className="blog-wrapper">
                <div className="blog-list-box">
                  <div className="vert-line-blog"></div>
                    </div>
                     <div>{nextThreePosts}</div>
                    {/* {nextThreePosts} */}
                    {/* <h1>{RichText.asText(doc.data.title)}</h1>
                             <img alt='cover' src={doc.data.blog_image.url} />
                            <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
                            {maxPosts <= 4 && <button onClick={showAllPosts} className="dark-btn">older posts</button> }
                            {maxPosts > 4 && <button onClick={showRecentPosts} className="dark-btn">Show only recent</button> }
                </div>
                </div>
                  }
              </div>
              <div className="blog-right">
                <div className="blog-about">
                  <div className="about-img" style={{backgroundImage:`url(${fam})`}}/>
                  <h3>We're the millers</h3>
                  <p>Integer dapibus a massa a finibus. Aenean finibus risus et sapien sodales, in mollis libero tempus. Praesent elementum purus eros, et commodo dolor tincidunt facilisis.</p>
                  <button className="about-lead-btn">About MMP</button>
                </div>
                <div className="blog-connect">
                  <div className="connect-content">
                    <h3>Connect</h3>
                    <div>
                    <i class="lni lni-facebook-filled"></i>
                    <i class="lni lni-pinterest"></i>
                    <i class="lni lni-instagram"></i>
                    <i class="lni lni-envelope"></i>
                    </div>
                  </div>
                  </div>
                  <div className="blog-search">
                    <h3>Looking for something?</h3>
                    <input onChange={textSearch} placeholder="SEARCH THE BLOG"></input>
                  </div>
                  <div className="blog-categories">
                    <h3>Categories</h3>
                    <div className="cat-wrapper">
                            {categories}
                      </div>
                    </div>
               
              </div>
            </div>
          ) : (
            <div className="loading-block">

  <ClipLoader
  // css={override}
  className="clippy"
  size={35}
  color={"#3f3f3f"}
  // loading={this.state.loading}
/>
</div>
          )}
     
      </div>
      <Footer
        text="Want more info?"
        button="PEEK AT OUR FAQs"
        link="/faq"
      ></Footer>
    </div>
  );
}
