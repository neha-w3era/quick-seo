import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../style/SocialMediaOpt.css";
import GetQuoteForm from "./GetQuoteForm";

const SocialMediaMarketing = () => {
  return (
    <>
      <section>
        <Helmet>
          <title>
            SMO Services in Jaipur | Social Media Marketing Services in Jaipur,
            India | Best SMM packages inJaipur, India - Quick Website SEO
          </title>
          <meta
            name="description"
            content="Quick Website SEO offers best SMO services in Jaipur and Social Media Marketing Services in Jaipur, which is best suitable for your company with reasonable packages in India. Visit Us now!"
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
            href="https://www.quickwebsiteseo.com/social-media-optimization/"
          />
        </Helmet>
        <div className="about-banner-section">
          <div className="container about-head-div ">
            <div>
              <h1 className="about-us-heading">
                Social Media Marketing Services in Jaipur
              </h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                <Link className="home-link" to="/">
                  Home
                </Link>
                / Social Media Marketing Services in Jaipur
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row p-md-5 p-2">
            <div className="col-lg-9">
              <h1 className="main-services-title">SMO Services in Jaipur</h1>

              <p className="main-services-text">
                Social media optimization is an effectual strategy to enhance
                the brand awareness and generate traffic on the website by
                harnessing the distinct social media platforms like Facebook,
                Twitter, Linkedin, Instagram etc. Every social media channel has
                millions and millions of active users and this factor makes them
                an ideal source for the organizations to connect with customers
                on the global scale and shoot up their sales without much of a
                hitch.
              </p>
              <p className="main-services-text">
                Quickwebsiteseo utilizes the various social media marketing
                platforms to help your business gain an upper hand over the
                competitors and escalate the popularity of your brand
                enormously. Our comprehensive range of social media marketing
                services in Jaipur provides you various benefit like increasing
                online footprint, branding, generating huge website traffic etc.
                We devise a perfect social media marketing packages that will
                cost you very less and give the maximum return on investment.z
              </p>
              <p className="main-services-text">
                In today’s cut-throat competitive world, the absence of any
                brand from the social media channels is an unrecoverable loss.
                We make sure that your business presence grows day in and day
                out on the key social networking channels and your website is
                sitting on top in the search engine results. Our SMO services in
                Jaipur are the best way to target the right audience and carve a
                brighter future for your business,
              </p>
              <p
                className=""
                style={{
                  letterSpacing: "1px",
                  fontFamily: ' "Roboto", sans-serif',
                }}
              >
                <strong>Quickwebsiteseo SMO Services Encompasses –</strong>
              </p>
              <ul className="smm-ul-section">
                <li>Article Submission</li>
                <li>Blog Submission</li>
                <li>
                  Social Media Marketing( Facebook, Instagram, Twitter,
                  Pinterest)
                </li>
                <li>Video Submission</li>
                <li>Social Bookmarking</li>
                <li>Online Reputation Management</li>
                <li>Business Reviews Submission</li>
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

export default SocialMediaMarketing;
