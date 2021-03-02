
import { Container, Nav, Button, Image } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap'
import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
import Hero from '../../components/Hero'
import heroImg from "../../media/bread.jpg"
import Footer from '../../components/Footer/footer'
import Prismic from 'prismic-javascript'
import {Link} from 'react-router-dom'
import { RichText } from 'prismic-reactjs'
import { format, parseISO } from "date-fns";
import linkResolver from "../../utils/linkResolver";
import fam from '../../media/fam.jpg'
// import "./style.css"
// import logo from '../../media/logo.png'



export default function BlogPost(props) {

const apiEndpoint = 'https://miller-media-partners.cdn.prismic.io/api/v2'
const accessToken = 'MC5YN1diV1JJQUFDQUFfaFNf.Xig677-977-9Zu-_vRBS77-9KjXvv70PIu-_ve-_vVYFbQAnEe-_vT3vv70WW--_vSXvv70Y' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

const [doc, setDocData] = React.useState(null)



    
    React.useEffect(() => {
        // let id = Object.values(this.props.match.params);
        let param = props.match.params.post
        // console.log(props.match.params.post)
      const fetchData = async () => {
        const response = await Client.query(
            Prismic.Predicates.at('my.blog.uid', param)
        )
        if (response) {
          setDocData(response.results[0])
          console.log(response.results)
        }
      }
      fetchData()
    }, [])

        // if (doc) {
        //     var data = doc.map((post) =>
        //     <div>
        //         <Link to={`/blog/${post.slugs[0]}`}>
        //         <div>{post.data.title[0].text}</div>
        //         <img alt='cover' src={post.data.blog_image.url} />
        //         </Link>
        //     </div>
        //     // <div>post</div>
        //     // <h1>{RichText.asText(doc.data.title)}</h1>
        // );
        // }

        return (

            <div className="blog-post-page">
            <Hero image={heroImg} title="Blog" button="Read up!" />
            <div className="home-wrapper">
            
                {doc ? (
                  <div className="blog-page">
                    <div className="blog-left">
                      {/* <div className="recent-block">{firstPost}</div> */}
                        <div className="blog-wrapper">
                        <div className="date-cat">
            <p>{format(new Date(doc.data.date), "MMMM DD, YYYY")}</p>
            <p>●</p>
            <p>{doc.data.category[0].text}</p>
            {/* <p>{post.data.category[0].text}</p> */}
          </div>
          <h1>{doc.data.title[0].text}</h1>
          <img
            className="latest-blog-img"
            alt="cover"
            src={doc.data.blog_image.url}
          />
          <p className="ta-left">
            <RichText
              render={doc.data.blog_text}
              linkResolver={linkResolver}
            />
          </p>
                      <div className="blog-list-box">
                        <div className="vert-line-blog"></div>
                          </div>
                          {/* {nextThreePosts} */}
                          {/* <h1>{RichText.asText(doc.data.title)}</h1>
                                   <img alt='cover' src={doc.data.blog_image.url} />
                                  <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
                                  <button className="about-lead-btn">older posts</button>
                      </div>
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
                          <input placeholder="SEARCH THE BLOG"></input>
                        </div>
                        <div className="blog-categories">
                          <h3>Categories</h3>
                          <div className="cat-wrapper">
                                  {/* {categories} */}
                            </div>
                          </div>
                     
                    </div>
                  </div>
                ) : (
                  <div>No content</div>
                )}
           
            </div>
            <Footer
              text="Want more info?"
              button="PEEK AT OUR FAQs"
              link="/faq"
            ></Footer>
          </div>
        )

    }





