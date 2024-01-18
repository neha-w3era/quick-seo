import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section>
      <Helmet>
        <title>
          About us - Digital Marketing Company in Jaipur - Quick Website SEO
        </title>
        <meta
          name="description"
          content="We are leading digital marketing company offering best SEO services in Jaipur. Call us at +91 9928640792 for any queries."
        />
        <link rel="canonical" href="https://www.quickwebsiteseo.com/about/" />
      </Helmet>

      <div className="about-banner-section" >
        <div className="container about-head-div ">
          <div>
            <h1 className="about-us-heading">About us</h1>
            <p style={{ color: "white", fontWeight: "bold" }}>
              <Link className="home-link" to="/">
                Home
              </Link>
              / About us
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-div container py-5">
        <h4>Who We Are</h4>
        <p>
          Quickwebsiteseo is one of the fastest emerging and most sought after
          SEO companies that offer a comprehensive range of digital marketing
          services to the clients. We stepped into the arena of the digital
          world with one and only motto, to offer the online marketing services
          that foster business growth and make your brand a shining name in the
          corporate world. With years of experience in the digital marketing, we
          offer our expertise to everyone and ensure business excellence.
        </p>
        <p>
          Today, any individual or organization who are establishing a business
          or have an established business understands well that how pivotal
          online presence is for business sustenance. That’s where our role
          comes into play, to establish your brand online presence and make it a
          dominant force in the search engine results. We are very best at what
          we do i.e to provide you guidance and expertise and deliver the
          results that surpass your expectations. We are an ethic-led company.
          We don’t make any magical promises that most of the SEO companies do
          to lure customers. We believe in establishing long-term relationships
          with the customers and feel proud to be the contributor to their
          success journey.
        </p>
        <h4>Our Team</h4>
        <p>
          To achieve the global success, one has to have a world-class team.
          Quickwebsiteseo has a team of insanely talented and outrageously
          passionate digital marketers who are available round the clock to
          provide a comprehensive range of services to the clients. Here each
          and every employee is a digital genius in his/her own right and strive
          relentlessly to ensure clients success and satisfaction.
        </p>
        <h4>Why Choose Us?</h4>
        <p>
          Because we do SEO like no one do. We painstakingly understand every
          business requirement and devise the best possible SEO campaign to
          elevate your brand visibility and gain the gargantuan amount of
          traffic for the website. Let’s team up and climb the mountain of
          success together!
        </p>
      </div>
    </section>
  );
};

export default About;
