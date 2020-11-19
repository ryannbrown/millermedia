
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
import { Date, Link, RichText } from 'prismic-reactjs'
import linkResolver from "../../utils/linkResolver"
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
        //         <a href={`/blog/${post.slugs[0]}`}>
        //         <div>{post.data.title[0].text}</div>
        //         <img alt='cover' src={post.data.blog_image.url} />
        //         </a>
        //     </div>
        //     // <div>post</div>
        //     // <h1>{RichText.asText(doc.data.title)}</h1>
        // );
        // }

        return (

            <div>
                <Hero image={heroImg} title="Blog" button="Read up!" />
                <div className="home-wrapper">
                    <div>
                    {
                        doc ? (
                            <div>
                                <a href="/blog">back</a>
                            <h1>{RichText.asText(doc.data.title)}</h1>
                             <img alt='cover' src={doc.data.blog_image.url} />
                            {/* <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
                            {/* <p>{doc.data.blog_text[0].text}</p> */}
                            <RichText render={doc.data.blog_text} linkResolver={linkResolver} />
                            </div>
                        ) : <div>No content</div>
                        }
                    </div>
                </div>
                <Footer text="Want more info?" button="PEEK AT OUR FAQs" link="/faq"></Footer>
            </div>
        )

    }





