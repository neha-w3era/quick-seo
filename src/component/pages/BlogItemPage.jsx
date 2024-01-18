import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import rightChevron from "../assets/right-black-chevron.png";
// import Blog from "./Blog";
import BlogCard from "./BlogCard";
import BlogSinglePage from "./BlogSinglePage";

const BlogItemPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/BlogCardData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlogPosts(data);

        const selected = data.find((blog) => blog.BlogUrl === id);
        setSelectedBlog(selected);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, [id]);

  // Find the blog with the corresponding URL after fetching data

  // Check if the blog is not found

  return (
    <section>
      <div className="about-banner-section">
        <div className="container about-head-div ">
          <div>
            <h1 className="about-us-heading">Blog</h1>
            <p style={{ color: "white", fontWeight: "bold" }}>
              <Link className="home-link" to="/">
                Home {" "}
              </Link>
              / {selectedBlog?.BlogTitle}
            </p>
          </div>
          <div></div>
        </div>
      </div>

      {/* blog_item-section  */}

      <section className="blog-section">
        <div className="container p-lg-5">
          <div className="row gap-2">
            <div className="col-md-8">
              <div className="row gap-3">
                <div>
                  {selectedBlog ? (
                    <div className="row gap-2">
                      <div className="col-md-12">
                        <div className="row gap-3">
                          <BlogSinglePage selectedBlog={selectedBlog} />
                          {/* Add more details if needed */}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Render a default message or component when no blog is selected

                    <div className="row gap-2">
                      <div className="col-md-12">
                        <div className="row gap-3">
                          <BlogCard />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add more elements to display other blog details */}
                </div>
              </div>
            </div>
            <div className="col-md-3 left-sidebar p-2">
              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">RECENT POSTS</h3>
                <ul>
                  {blogPosts.map((blog) => {
                    return (
                   
                        <li key={blog.id}>
                          <img className="me-2" src={rightChevron} alt="" />
                          <Link to={`/blog/${blog.BlogUrl}`}>
                            {blog.BlogTitle}
                          </Link>
                        </li>
                      
                    );
                  })}
                </ul>
                {/* 50 + ? = 25 */}
              </section>

              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">ARCHIVES</h3>
                <ul>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/blog/win-the-seo-game-with-these-must-know-seo-concepts-2018">
                      June 2018
                    </Link>
                  </li>
                </ul>
                {/* 50 + ? = 25 */}
              </section>

              <section className="blog-post-side-div">
                <h3 className="post-blog-heading">CATEGORIES</h3>
                <ul>
                  <li>
                    <img className="me-2" src={rightChevron} alt="" />
                    <Link to="/blog/win-the-seo-game-with-these-must-know-seo-concepts-2018">
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
    </section>
  );
};

export default BlogItemPage;
