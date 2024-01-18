/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SeoCheckingForm from "./SeoCheckingForm";

import "../style/Home.css";
import Feature1Img from "../assets/feature1.png";
import Feature2Img from "../assets/feature2.png";
import Feature3Img from "../assets/feature3.png";
import waveSeoImage from "../assets/wave-seo-section.png";
import seoService1 from "../assets/seo-img1.png";
import seoService2 from "../assets/seo-img2.png";
import seoService3 from "../assets/seo-img3.png";
import seoService4 from "../assets/seo-img4.png";
import ProjectCountImg from "../assets/project-count-img.png";
import ClientsCount from "../assets/client-count-img.png";
import CommitCount from "../assets/commitment-count-img.png";
import SuccessRate from "../assets/success-rate-count.png";
import UnethicalPractice from "../assets/unethical-practices-count.png";
import { useApi } from "./ApiContext";

const Home = () => {
  const data = useApi();

  const projectDetails = [
    {
      serviceName: "Projects",
      serviceNumber: 2000,
      serviceImg: ProjectCountImg,
    },
    {
      serviceName: "Active Clients",
      serviceNumber: 300,
      serviceImg: ClientsCount,
    },
    {
      serviceName: "Commitments",
      serviceNumber: 100,
      serviceImg: CommitCount,
    },
    {
      serviceName: "Success Rate",
      serviceNumber: 98,
      serviceImg: SuccessRate,
    },
    {
      serviceName: "Unethical Practise",
      serviceNumber: 0,
      serviceImg: UnethicalPractice,
    },
  ];

  return (
    <>
      <section className="banner-section">
        <Helmet>
          <title>
            Best SEO &amp; SMO Service Provider Company in Jaipur, Rajasthan |
            India&#039;s Local SEO Expert Near By - Quick Website SEO
          </title>
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="bingbot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="description"
            content="Find best SEO company in Jaipur that provides SEO, SMO, local SEO and other digital marketing services at affordable package. Visit Quick Website SEO online for more information."
          />
          <link rel="canonical" href="https://www.quickwebsiteseo.com/" />
        </Helmet>
        <div className="home-main">
          <div className="inner-home-main">
            <h1>
              Let's Start Growing Your Business Through An Award Winning SEO
              Optimization Company in Jaipur
            </h1>
            <p>
              We are one of the fastest growing digital marketing services
              across the globe with remarkable success <br /> rate and towering
              experience in this industry.
            </p>
            <Link to="/contact" className="home-banner-btn">
              GET STARTED NOW
            </Link>
          </div>
        </div>
      </section>

      {/* best seo in jaipur section after banner  */}

      <section className="seo-section">
        <img src={waveSeoImage} className="waveSeoImage" alt="" />
        <div className="container seo-main ">
          <div className="row upper-seo-text-div1">
            <div className="col-lg-4">
              <h1>
                Best SEO <br /> Company in Jaipur
              </h1>
            </div>
            <div className="col-lg-8 upper-seo-text-div2">
              <p>
                “Dreams doesn’t work unless you do” that pretty much sums up the
                significance of hard work and successful strategies need to be
                implemented in order to achieve the earth-shattering results. We
                at quickwebsiteseo, put our soul into the projects to make your
                business an unimaginable digital success. Our search engine
                optimization and social media optimization services will
                generate more traffic, more leads, and take your brand to the
                greater heights.
              </p>
            </div>
          </div>
          <div className="row gap-3 d-flex justify-content-center align-items-center ">
            <div className="col-md-4 feature-div d-flex flex-column justify-content-center align-items-center">
              <img src={Feature1Img} alt="" />
              <h1>Social Optimization</h1>
              <p>
                Our social media optimization services designed in a way to make
                your brand a juggernaut on the key social media platforms
                without much of a hitch.
              </p>
            </div>
            <div className="col-md-4 feature-div d-flex flex-column justify-content-center align-items-center">
              <img src={Feature2Img} alt="" />
              <h1>SEO Optimization</h1>
              <p>
                We have unparalleled SEO optimization strategies that drive high
                quality and right traffic to your website and give you an edge
                above all
              </p>
            </div>
            <div className="col-md-4 feature-div d-flex flex-column justify-content-center align-items-center">
              <img src={Feature3Img} alt="" />
              <h1>SEO Management</h1>
              <p>
                Quickwebsiteseo understands quite well the pillars of SEO
                management and harness them to provide your brand highest
                possible visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* website's Seo  */}
      <section>
        <div className="seo-form-div">
          <h1>Check your Website’s SEO</h1>
          <div className="home-seo-web-form-div">
            <SeoCheckingForm />
          </div>
        </div>
      </section>

      {/* seo optimization services  */}
      <section className="seo-optimization-div">
        <div className="container ">
          <div className="row">
            <h1 className="home-seo-heading">SEO Optimization Services</h1>
            <hr className="my-4 seo-optimization-serices-hr" />
            <p className="text-center">
              Let us boost your organic search engine rankings with our top of
              the line digital marketing services.
            </p>
          </div>

          {/* features box es  */}
          <div className="row d-flex gap-2">
            <div className="col-md-3 seo-feature-div">
              <img className="seo-feature-div-img" src={seoService1} alt="" />
              <h3 class="services-title" itemprop="name">
                <a href="#" class="services-title-btn text-center" tabindex="0">
                  Search Engine Optimize
                </a>
                <span class="services-effect"></span>
              </h3>
              <p>
                Perhaps the most effectual strategy to get your website noticed
                by the right prospects. Our SEO services enclose…
              </p>
              <Link className="services-btn" to="/search-engine-optimization">
                Read more <i class="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
            <div className="col-md-3  seo-feature-div">
              <img className="seo-feature-div-img" src={seoService2} alt="" />
              <h3 class="services-title" itemprop="name">
                <a href="#" class="services-title-btn text-center" tabindex="0">
                  Social Media Marketing
                </a>
                <span class="services-effect"></span>
              </h3>
              <p>
                Our social media marketing services can help the businesses of
                all sizes to capture the attention of...
              </p>
              <Link className="services-btn" to="/social-media-marketing">
                Read more <i class="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
            <div className="col-md-3  seo-feature-div">
              <img className="seo-feature-div-img" src={seoService3} alt="" />
              <h3 class="services-title" itemprop="name">
                <a href="#" class="services-title-btn text-center" tabindex="0">
                  Analytics & Tracking
                </a>
                <span class="services-effect"></span>
              </h3>
              <p>
                We keep a close eye on your website performance and take the
                necessary measures to make your brand an…
              </p>
              <Link className="services-btn" to="/analytics-tracking">
                Read more <i class="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
            <div className="col-md-3  seo-feature-div">
              <img className="seo-feature-div-img" src={seoService4} alt="" />
              <h3 class="services-title" itemprop="name">
                <a
                  href="#"
                  class="services-title-btn text-center "
                  tabindex="0"
                >
                  Off Page Optimization
                </a>
                <span class="services-effect"></span>
              </h3>
              <p>
                Quickwebsiteseo offers all-inclusive off-page optimization
                services that will drastically put you on the top…
              </p>
              <Link className="services-btn" to="/off-page-optimization">
                Read more <i class="fa-solid fa-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="count-details-div">
        <div className="container">
          <div className="row">
            {/* count-details  */}
            {projectDetails.map((data) => {
              return (
                <div
                  className={`col-md-2 count-div-item`}
                  key={data.serviceName}
                >
                  <p className="text-center count-tag-p">{data.serviceName}</p>
                  <h2 className="text-center count-tag-h2">
                    {data.serviceNumber}
                  </h2>
                  <div className="yellow-circle"></div>
                  <div className="count-img-div">
                    <img src={data.serviceImg} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* great plans section  */}

      <section className="plan-section-main">
        <div className="container">
          <h2 className="text-center plan-heading">Our Greatest Plans</h2>
          <hr className="plan-hr" />
          <p className="text-center plan-text">
            Quickwebsiteseo SEO packages are designed to fulfill the need for
            quality SEO for both small and large businesses without making a
            dent in the budget. Our SEO packages address the specific needs of
            your business and provide you compelling results!
          </p>
        </div>
        <div className="container">
          <div className="plan-div-row">
            <div className="col-lg-3 col-md-6 text-center plan-div-item">
              <p className="plan-name">BRONZE</p>
              <span className="d-flex justify-content-center align-items-center month-tag">
                <h1>
                  <strong className="plan-price">$59</strong>
                </h1>
                /mo
              </span>
              <ul className="plan-feature-ul">
                <li>Site Wide Factors</li>
                <li>On site Factors</li>
                <li>On-Page Optimization</li>
                <li>Off-Page Optimization</li>
                <li>Analysis Reports</li>
              </ul>
              <div className="plan-buy-div">
                <Link className="plan-buy-btn" to="/contact">
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center plan-div-item">
              <p className="plan-name">SILVER</p>
              <span className="d-flex justify-content-center align-items-center month-tag ">
                <h1>
                  <strong className="plan-price">$119</strong>
                </h1>
                /mo
              </span>
              <ul className="plan-feature-ul">
                <li>Site Wide Factors</li>
                <li>On site Factors</li>
                <li>On-Page Optimization</li>
                <li>Off-Page Optimization</li>
                <li>Analysis Reports</li>
              </ul>
              <div className="plan-buy-div">
                <Link className="plan-buy-btn" to="/contact">
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center plan-div-item gold-plan-div">
              <p className="plan-name text-light">GOLD</p>
              <p className="best-choice-text">Best Choice</p>
              <span className="d-flex justify-content-center align-items-center month-tag">
                <h1>
                  <strong className="plan-price">$239</strong>
                </h1>
                /mo
              </span>
              <ul className="plan-feature-ul">
                <li>Site Wide Factors</li>
                <li>On site Factors</li>
                <li>On-Page Optimization</li>
                <li>Off-Page Optimization</li>
                <li>Social Media Optimization</li>
                <li>Analysis Reports</li>
              </ul>
              <div className="plan-buy-div">
                <Link className=" gold-btn" to="/contact">
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center plan-div-item">
              <p className="plan-name">PLATINUM</p>
              <span className="d-flex justify-content-center align-items-center month-tag">
                <h1>
                  <strong className="plan-price">$479</strong>
                </h1>
                /mo
              </span>
              <ul className="plan-feature-ul">
                <li>Site Wide Factors</li>
                <li>On site Factors</li>
                <li>On-Page Optimization</li>
                <li>Off-Page Optimization</li>
                <li>Social Media Optimization</li>
                <li>Analysis Reports</li>
              </ul>
              <div className="plan-buy-div">
                <Link className="plan-buy-btn" to="/contact">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial-div  */}
      <section className="testi-section">
        <div className="container">
          <h1 className="test-title">Testimonials</h1>
          <hr className="plan-hr" />

          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active dot-carousel-btn "
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner inner-carousel-item ">
              <div class="carousel-item active">
                <p className="d-block w-100">
                  We don't have a large firm with several masters, but
                  definitely we don't need either. Their team is doing a great
                  job in link building and search engine optimization for
                  posting articles. The efforts done for marketing of our
                  company are actually appreciable. They have handled several of
                  our projects so far and no chances of complaints too. They
                  have made their big supporter and all of the firms should give
                  them a try to serve.
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  I'm just writing this testimonial to thank quickwebsiteseo.com
                  for their ultimate and timely service. It is my first
                  experience where within weeks my ranks upgraded on great
                  positions. Convincing and hard work of its team has given one
                  stop solution for every time. I had tried their value pack,
                  but now I can trust for platinum as well. I wish all the very
                  best to the team for getting more and more projects and I will
                  highly recommend all of the website owners to give them a try.
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  I'm just writing this testimonial to thank quickwebsiteseo.com
                  for their ultimate and timely service. It is my first
                  experience where within weeks my ranks upgraded on great
                  positions. Convincing and hard work of its team has given one
                  stop solution for every time. I had tried their value pack,
                  but now I can trust for platinum as well. I wish all the very
                  best to the team for getting more and more projects and I will
                  highly recommend all of the website owners to give them a try.
                </p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            ></button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            ></button>
          </div>
        </div>
      </section>

      {/* article section  */}

      <section>
        <div className="latest-article-heading-div">
          <h1 className="article-heading">Latest Articles</h1>
          <hr className="plan-hr" />
          <p className="text-center">
            Step into our blog section to make yourself aware of what’s
            happening in the digital world. From SEO to PPC, we’ve rounded up
            all for you.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {data.map((blog) => {
              return (
                <div className="col-md-6 blog-blog-div" key={blog.BlogId}>
                  <div class="card" key={blog.BlogId}>
                    <img
                      src={blog.BlogTitleImage}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div className="d-flex article-sect-details-div">
                        <p className="fs-10">
                          <i class="fa-solid fa-calendar-days"></i>
                          {blog.BlogDate}
                        </p>
                        <p>
                          <i class="fa-solid fa-user"></i>
                          {blog.BlogPostUser}
                        </p>
                        <p>
                          <i class="fa-solid fa-folder-open"></i>{" "}
                          {blog.BlogPostType}
                        </p>
                      </div>
                      <h5 class="card-title">{blog.BlogTitle}</h5>

                      <p class="card-text">{blog.BlogPostBriefDesc}</p>
                      <div>
                        <Link
                          className="read-more-tag"
                          to={`/blog/${blog.BlogUrl}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
