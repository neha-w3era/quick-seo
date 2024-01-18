import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "../style/Blog.css";
import { Helmet } from "react-helmet";
import rightChevron from "../assets/right-black-chevron.png";
import { useApi } from "./ApiContext";

const Blog = () => {
  const blogPosts = useApi();

  return (
    <div className="blog-section">
      <Helmet>
        <title>Blog - Latest Blogs - Quick Website SEO</title>
        <meta
          name="description"
          content="Get knowledgeable information on digital marketing, search engine optimization (SEO), Search Engine Marketing etc. with QuickwebsiteSEO blog."
        />
        <link rel="canonical" href="https://www.quickwebsiteseo.com/blog" />
      </Helmet>
      <section>
        <div className="about-banner-section">
          <div className="container about-head-div ">
            <div>
              <h1 className="about-us-heading">Blog</h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                <Link className="home-link" to="/">
                  Home
                </Link>
                / Blog
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-lg-5">
          <div className="row gap-2">
            <div className="col-md-8">
              <div className="row gap-3">
                <BlogCard />
              </div>
            </div>

            <div className="col-md-3 left-sidebar p-2">
              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">RECENT POSTS</h3>
                <ul>
                  {blogPosts.map((blog) => (
                    <li key={blog.BlogUrl}>
                      <img className="me-2" src={rightChevron} alt="" />
                      <Link to={`/blog/${blog.BlogUrl}`}>{blog.BlogTitle}</Link>
                    </li>
                  ))}
                </ul>
                {/* 50 + ? = 25 */}
              </section>

              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">ARCHIVES</h3>
                <ul>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/blog/june-2018">June 2018</Link>
                  </li>
                </ul>
                {/* 50 + ? = 25 */}
              </section>

              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">CATEGORIES</h3>
                <ul>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/category/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/blog/win-the-seo-game-with-these-must-know-seo-concepts-2018">
                      Local SEO
                    </Link>
                  </li>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/blog/win-the-seo-game-with-these-must-know-seo-concepts-2018">
                      SEO
                    </Link>
                  </li>
                </ul>
                {/* 50 + ? = 25 */}
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
