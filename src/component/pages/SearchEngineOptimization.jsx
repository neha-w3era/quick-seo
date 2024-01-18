import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import GetQuoteForm from "./GetQuoteForm";

const SearchEngineOptimization = () => {
  return (
    <>
      <section>
        <Helmet>
          <title>
            SEO Services in Jaipur – Best Search Engine Optimization in Jaipur |
            Hire Top Rated Seo Services in Jaipur - Quick Website SEO
          </title>
          <meta
            name="description"
            content="SEO services in Jaipur, India - Quick website SEO is a leading Search Engine Optimization company in Jaipur that gives you an amazing experience with its top notch and affordable SEO services. Visit us today for more details!"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="bingbot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link
            rel="canonical"
            href="https://www.quickwebsiteseo.com/search-engine-optimization/"
          />
        </Helmet>
        <div className="about-banner-section">
          <div className="container about-head-div ">
            <div>
              <h1 className="about-us-heading">
                Search Engine Optimization in Jaipur
              </h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                <Link className="home-link" to="/">
                  Home
                </Link>
                / Search Engine Optimization in Jaipur
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row p-md-5 p-2">
            <div className="col-lg-9">
              <h1 className="main-services-title">SEO Services</h1>

              <p className="main-services-text">
                No matter what type of business you run, its online presence is
                essential to match up or stay ahead of the competitors. Search
                engine optimization (SEO) is one such efficacious strategy which
                can drastically improve your online footprint and give your
                website highest visibility on the search engine page results.
              </p>
              <p className="main-services-text">
                Quickwebsiteseo is an eminent search engine optimization
                services in India that adopt a strategic approach to create the
                online presence of your brand and generate high-quality traffic.
                We utilize white hat ethical SEO methodologies that deliver the
                long lasting rankings in the search engine and colossal amount
                of stable traffic.
              </p>
              <p className="main-services-text">
                Quickwebsiteseo is one of the leading search engine optimization
                companies in India who understand that every business is
                different and same set of SEO strategies won’t work to meet the
                need of your business goals. For every client, we devise a
                novice strategy that provides the real results and delivers the
                noteworthy return on investment.
              </p>
              <p
                className=""
                style={{
                  letterSpacing: "1px",
                  fontFamily: ' "Roboto", sans-serif',
                }}
              >
                <strong>What Included in Our SEO Services?</strong>
              </p>
              <ul className="smm-ul-section">
                <li>
                  A painstaking analysis of the competitor business in the
                  search results and keyword research to derive the SEO strategy
                  that gives edge above all.
                </li>
                <li>
                  On-page SEO to optimize every page of your website and make
                  them more SEO friendly. We induce the best on-page SEO
                  strategies that are time-tested and make your website fast and
                  secure.
                </li>
                <li>
                  Content is the essence of SEO. Our team of skilled writers
                  creates SEO oriented content that quickly boosts the rankings
                  of web pages in the SERPs and makes the user experience
                  seamless. In addition to that, we heavily use creative content
                  like infographics and video content that appeals the users and
                  amass relevant traffic.
                </li>
                <li>
                  Last but not the least, by creating high-quality backlinks, we
                  significantly improve the ranking of the website, generate
                  traffic, and enhance the conversion rate that makes your brand
                  name a dominant force in the industry.
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div>
                <h2 className="other-services-title">Other Services</h2>

                <div className="service-menu">
                  <Link
                    className="service-menu-link"
                    to="/off-page-optimization"
                  >
                    Off Page Optimization
                  </Link>
                  <Link className="service-menu-link" to="/analytics-tracking">
                    Analytics & Tracking
                  </Link>
                  <Link
                    className="service-menu-link"
                    to="/search-engine-optimization"
                  >
                    Search Engine Optimization
                  </Link>
                  <Link
                    className="service-menu-link"
                    to="/social-media-optimization"
                  >
                    Social Media Optimization
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="other-services-title">Get A Quote</h2>

                <div className="get-quote-form">
                  <GetQuoteForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchEngineOptimization;
