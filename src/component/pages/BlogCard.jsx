import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "./ApiContext";

const BlogCard = () => {
  const blogPosts = useApi();
  return (
    <>
      {blogPosts.map((blog) => {
        return (
          <div class="card" key={blog.BlogId}>
            <img
              src={blog.BlogTitleImage}
              class="card-img-top mt-3"
              alt="Blog Title"
            />
            <div class="card-body">
              <div className="d-flex article-sect-details-div">
                <p className="fs-10">
                  <i class="fa-solid fa-calendar-days"></i>
                  {blog?.BlogDate}
                </p>
                <p>
                  <i class="fa-solid fa-user"></i>
                  {blog?.BlogPostUser}
                </p>
                <p>
                  <i class="fa-solid fa-folder-open"></i> {blog?.BlogPostType}
                </p>
              </div>
              <h5 class="card-title">{blog?.BlogTitle}</h5>

              <p class="card-text">{blog?.BlogPostBriefDesc}</p>
              <Link to={`/blog/${blog?.BlogUrl}`} className="read-more-tag">
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
