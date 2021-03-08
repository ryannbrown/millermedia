import { Container, Nav, Button, Image } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component, useState } from "react";

// import logo from './logo.svg';
import "./style.css";
import { Drawer } from "@material-ui/core";
import Hero from "../../components/Hero";
import heroImg from "../../media/bread.jpg";
import Footer from "../../components/Footer/footer";
import Prismic from "prismic-javascript";
import { Link } from "react-router-dom";
import { RichText } from "prismic-reactjs";
import { format, parseISO } from "date-fns";
import linkResolver from "../../utils/linkResolver";
import ClipLoader from "react-spinners/ClipLoader";
import {
  EmailShareButton,
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
} from "react-share";
import fam from "../../media/fam.jpg";
import { useForm } from "react-hook-form";
// import "./style.css"
// import logo from '../../media/logo.png'

export default function BlogPost(props) {
  const { register, handleSubmit, errors } = useForm();
  const apiEndpoint = "https://miller-media-partners.cdn.prismic.io/api/v2";
  const accessToken =
    "MC5YN1diV1JJQUFDQUFfaFNf.Xig677-977-9Zu-_vRBS77-9KjXvv70PIu-_ve-_vVYFbQAnEe-_vT3vv70WW--_vSXvv70Y"; // This is where you would add your access token for a Private repository

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const [newParam, setNewParam] = React.useState(null);
  const [posts, setPostsData] = React.useState(null);
  const [doc, setDocData] = React.useState(null);
  const [shareUrl, setShareUrl] = React.useState(null);
  const [prevPost, setPrevPost] = React.useState(null);
  const [nextPost, setNextPost] = React.useState(null);
  const [itemPosted, setItemPosted] = React.useState(false);
  const [comments, setComments] = React.useState(false);

  const fetchPlugins = () => {
    const script = document.createElement("script");

    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=668236647227571&autoLogAppEvents=1";
    script.async = true;
    var url =
      "https://millermediapartners.herokuapp.com/" + window.location.pathname;
    // console.log("url", url);
    setShareUrl(url);

    document.body.appendChild(script);
  };

  const fetchPrevNext = (id) => {
    const fetchData = async (id) => {
      const prevPost = await Client.query(
        Prismic.Predicates.at("document.type", "blog"),
        { pageSize: 1, after: id, orderings: "[my.blog.date desc]" }
      );
      if (prevPost) {
        console.log("prev", prevPost.results[0]);
        setPrevPost(prevPost.results[0]);
      }
      const nextPost = await Client.query(
        Prismic.Predicates.at("document.type", "blog"),
        { pageSize: 1, after: id, orderings: "[my.blog.date]" }
      );
      if (nextPost) {
        console.log("next", nextPost.results[0]);
        setNextPost(nextPost.results[0]);
      }
    };
    fetchData(id);
  };

  const fetchPosts = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "blog"),
      { orderings: "[my.blog.date desc]" }
    );
    if (response) {
      setPostsData(response.results);
      //   fetchCategories(response.results)
      console.log(response.results);
    }
  };

  const updateParams = () => {
    setNewParam(props.match.params.post);
  };


  const fetchComments = (param) => {
   
    fetch(`/api/reviews/${param}`)
    .then((res) => res.json())
    .then((json) => {
      console.log("json", json);
  setComments(json);
    });

  };

  // form for reviews
  const onSubmit = (data) => {
    console.log(doc);
    console.log(data);
    //   let date = doc.data.date;
    let blog_id = doc.id;
    let blog_title = doc.uid;
    let review_body = data.post;
    let name = data.name;
    let email = data.email;
    let website = data.website;

    console.log(blog_id, blog_title);

    const postReview = () => {
      // console.log("posting to DB")
      // POST TO DB
      fetch("/api/postreview", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // date,
          blog_id,
          blog_title,
          review_body,
          name,
          email,
          website,
        }),
      }).then((response) => {
        // console.log("hey i did it")
        // console.log(response)
        if (response.status == "200") {
          console.log("success");
          setItemPosted(true);
          let param = props.match.params.post;
          fetchComments(param);
        }
      });
    };
    postReview();

    // console.log(one)
    console.log("posting");
  };

  React.useEffect(() => {
    console.log(newParam);
    // let id = Object.values(this.props.match.params);
    let param = props.match.params.post;
    // console.log(props.match.params.post)
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("my.blog.uid", param)
      );
      if (response) {
        setDocData(response.results[0]);
        fetchPrevNext(response.results[0].id);
        console.log(response.results);
      }
    };

    fetchPlugins();
    fetchData();
    fetchPosts();
    fetchComments(param);
  }, [newParam]);

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


if (comments) {
    var blogComments = comments.map((post) => (
<div className="single-comment">
    <div className="comment-info">
    <p className="comment-author">{post.name} said</p>
    <p className="comment-date">{format(new Date(post.date), "MMMM DD, YYYY")}</p>
    </div>
    <div>{post.review_body}</div>
    <div className="reply-space">
    <button className="transparent-btn">reply</button>
    </div>
</div>
    ));
}

  if (posts) {
    var threeRecentPosts = posts.slice(0, 3).map((post) => (
      <Link onClick={updateParams} to={`/blog/${post.uid}`}>
        <div className="list-blog-post">
          <div
            className="blog-img"
            alt="cover"
            style={{ backgroundImage: `url(${post.data.blog_image.url})` }}
            // src={post.data.blog_image.url}
          />

          <h4 className="bold">{post.data.title[0].text}</h4>
        </div>
      </Link>
    ));
  }

  return (
    <div className="blog-post-page">
      <Hero image={heroImg} title="Blog" button="Read up!" />
      <div className="home-wrapper">
        {doc ? (
          <div className="">
            <div className="blog-content">
              <div className="blog-left">
                <Link to="/blog">
                  <i class="lni lni-arrow-left"></i> Back{" "}
                </Link>
                {/* <div className="recent-block">{firstPost}</div> */}
                <div className="blog-wrapper">
                  <div className="date-cat">
                    <p>{format(new Date(doc.data.date), "MMMM DD, YYYY")}</p>
                    <p>●</p>
                    <p>{doc.data.category_name}</p>
                    {/* <p>{post.data.category[0].text}</p> */}
                  </div>
                  <h1>{doc.data.title[0].text}</h1>
                  <img
                    className="latest-blog-img"
                    alt="cover"
                    src={doc.data.blog_image.url}
                  />
                  <p className="ta-left post-text">
                    <RichText
                      render={doc.data.blog_text}
                      linkResolver={linkResolver}
                    />
                  </p>
                  <div className="share-block">
                    <div className="share-btns">
                      <h5>SHARE</h5>
                      <FacebookShareButton url={shareUrl}>
                        <i class="lni lni-facebook"></i>
                      </FacebookShareButton>
                      <PinterestShareButton>
                        <i class="lni lni-pinterest"></i>
                      </PinterestShareButton>
                      <TwitterShareButton url={shareUrl}>
                        <i class="lni lni-twitter"></i>
                      </TwitterShareButton>
                      <EmailShareButton url={shareUrl}>
                        <i class="lni lni-envelope"></i>
                      </EmailShareButton>
                      {/* <LinkedinShareButton url={shareUrl}>
          <i class="lni lni-linkedin"></i>
             </LinkedinShareButton> */}
                    </div>
                    <h5>{doc.data.category_name}</h5>
                  </div>
                  <div className="blog-nav-box">
                    {prevPost && (
                      <Link to={`/blog/${prevPost.uid}`}>
                        <button onClick={updateParams} className="dark-btn">
                          PREVIOUS POST
                        </button>
                      </Link>
                    )}

                    {nextPost && (
                      <Link to={`/blog/${nextPost.uid}`}>
                        <button onClick={updateParams} className="dark-btn">
                          NEXT POST
                        </button>
                      </Link>
                    )}
                  </div>

                  {/* <button className="dark-btn">older posts</button> */}
                </div>
              </div>
              <div className="blog-right">
                <div className="blog-about">
                  <div
                    className="about-img"
                    style={{ backgroundImage: `url(${fam})` }}
                  />
                  <h3>We're the Millers</h3>
                  <p>
                    Integer dapibus a massa a finibus. Aenean finibus risus et
                    sapien sodales, in mollis libero tempus. Praesent elementum
                    purus eros, et commodo dolor tincidunt facilisis.
                  </p>
                  <Link to="/about"><button className="transparent-btn">About MMP</button></Link>
                </div>
                <div className="blog-connect">
                  <div className="connect-content">
                    <h3>Connect</h3>
                    <div>
                      <a rel="noopenner" target="_blank" href="https://www.facebook.com/millermediapartners/"><i class="lni lni-facebook-filled"></i></a>
                      <a rel="noopenner" target="_blank" href=" https://www.pinterest.com/abbymillerdesignco/_created/"><i class="lni lni-pinterest"></i></a>
                      <a rel="noopenner" target="_blank" href="https://www.instagram.com/millermediapartners"><i class="lni lni-instagram"></i></a>
                      <a href="mailto:info@millermediapartners.com"><i class="lni lni-envelope"></i></a>
                    </div>
                  </div>
                </div>
               
                {/* <div className="blog-search">
                          <h3>Looking for something?</h3>
                          <input placeholder="SEARCH THE BLOG"></input>
                        </div> */}
                {/* <div className="blog-categories">
                          <h3>Categories</h3>
                          <div className="cat-wrapper">
                                 
                            </div>
                          </div> */}
              </div>
            </div>
            <div className="recent-block">
              <h2 className="recent-text">Recent Posts</h2>
              <div className="recent-wrapper">
                <div className="blog-list-box"></div>
                {threeRecentPosts}
              </div>
            </div>
            <div className="comment-block">
              <div className="comment-form">
                <h2 className="recent-text">Leave a Comment</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="comment-form-info">
                    <input
                      name="name"
                      ref={register}
                      placeholder="Name"
                      required
                    ></input>
                    <input
                    type="email"
                      name="email"
                      ref={register}
                      placeholder="Email"
                      required
                    ></input>
                    <input
                      name="website"
                      ref={register}
                      placeholder="Website"
                    ></input>
                  </div>
                  <div className="comment-message">
                    {itemPosted ? <p>Thanks for your comment!</p> : <textarea required name="post" ref={register}></textarea> }
                    
                    <div>
                      {!itemPosted &&  <input placeholder="Comment here..." className="dark-btn" type="submit" /> }
                   
                    </div>
                    {/* <button type="submit">Submit</button> */}
                  </div>
                </form>
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
      <div className="comments-container">
        <h1 className="bold">Comments</h1>
        {comments.length > 0 ? <div className="comments-block">{blogComments}</div> :
        <div><p>Be the first to leave a comment on this post!</p></div>}
        
      </div>
      <Footer
        text="Want more info?"
        button="PEEK AT OUR FAQs"
        link="/faq"
      ></Footer>
    </div>
  );
}
