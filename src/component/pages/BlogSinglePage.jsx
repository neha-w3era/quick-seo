// BlogSinglePage.jsx

import React from "react";
import { Helmet } from "react-helmet";

const BlogSinglePage = ({ selectedBlog }) => {
  return (
    <div className="blog-detail-page-div">
      <Helmet>
        <title>{selectedBlog?.seo.title}</title>
        <meta name="description" content={selectedBlog?.seo?.metaContent} />
        <link rel="canonical" href={selectedBlog?.seo?.canonicalUrl} />"
      </Helmet>
      <img
        src={selectedBlog?.BlogTitleImage}
        className="card-img-top"
        alt="Blog Title"
      />
      <div className="card-body">
        <div className="article-sect-details-div">
          <p className="fs-10">
            <i className="fa-solid fa-calendar-days"></i>
            {selectedBlog?.BlogDate}
          </p>
          <p>
            <i className="fa-solid fa-user"></i>
            {selectedBlog?.BlogPostUser}
          </p>
          <p>
            <i className="fa-solid fa-folder-open"></i>{" "}
            {selectedBlog?.BlogPostType}
          </p>
        </div>
        <h5 className="card-title">{selectedBlog?.BlogTitle}</h5>
        <p className="card-text my-3">{selectedBlog?.BlogPostBriefDesc}</p>

        <div className="blog-content-div">
          <div className="blog-points-content">
            <center>
              <img src={selectedBlog?.BlogContentImages[0]} alt="" />
            </center>
            <p>
              <strong>{selectedBlog?.BlogHeading[0]}</strong>
            </p>
            <p>{selectedBlog?.BlogHeadingContent[0]}</p>
          </div>
          <div className="blog-points-content">
            <center>
              <img src={selectedBlog?.BlogContentImages[1]} alt="" />
            </center>
            <p>
              <strong>{selectedBlog?.BlogHeading[1]}</strong>
            </p>
            <p>{selectedBlog?.BlogHeadingContent[1]}</p>
          </div>
          <div className="blog-points-content">
            <center>
              <img src={selectedBlog?.BlogContentImages[2]} alt="" />
            </center>
            <p>
              <strong>{selectedBlog?.BlogHeading[2]}</strong>
            </p>
            <p>{selectedBlog?.BlogHeadingContent[2]}</p>
          </div>
          <div className="blog-points-content">
            <center>
              <img src={selectedBlog?.BlogContentImages[3]} alt="" />
            </center>
            <p>
              <strong>{selectedBlog?.BlogHeading[3]}</strong>
            </p>
            <p>{selectedBlog?.BlogHeadingContent[3]}</p>
          </div>
          <div className="blog-points-content">
            <center>
              <img src={selectedBlog?.BlogContentImages[4]} alt="" />
            </center>
            <p>
              <strong>{selectedBlog?.BlogHeading[4]}</strong>
            </p>
            <p>{selectedBlog?.BlogHeadingContent[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
