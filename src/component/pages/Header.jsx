/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import blackHeaderLogo from "../assets/black-logo.png";
import "../style/Header.css";

const Header = () => {
  const collapseRef = useRef(null);

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };
  return (
    <>
      <header className="main-header">
        <nav class="navbar navbar-expand-lg scroll " id="mainNav">
          <div class="container-fluid bg-white abs-nav ">
            <Link class="navbar-brand" to="/">
              <img src={blackHeaderLogo} alt="" />
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse nav-items-div"
              ref={collapseRef}
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav nav-items-div-div ms-auto  mb-lg-0">
                <li class="nav-item ">
                  <Link
                    className="nav-link link-items "
                    aria-current="page"
                    to="/"
                    onClick={hideBars}
                  >
                    HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className="nav-link link-items "
                    aria-current="page"
                    to="/about"
                    onClick={hideBars}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li class="nav-item services-link">
                  <Link class="nav-link  link-items" aria-current="page">
                    SERVICES <i class="fa-solid fa-chevron-down"></i>
                  </Link>
                  <div className="services-link-div">
                    <div className="services-link-items-div">
                      <Link
                        onClick={hideBars}
                        className="services-link-items"
                        to="/off-page-optimization"
                      >
                        Off Page Optimization
                      </Link>
                      <Link
                        onClick={hideBars}
                        className="services-link-items"
                        to="/analytics-tracking"
                      >
                        Analytics & Tracking
                      </Link>
                      <Link
                        onClick={hideBars}
                        className="services-link-items"
                        to="/search-engine-optimization"
                      >
                        Search Engine Optimization
                      </Link>
                      <Link
                        onClick={hideBars}
                        className="services-link-items"
                        to="/social-media-optimization/"
                      >
                        Social Media Marketing Services
                      </Link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <Link
                    onClick={hideBars}
                    class="nav-link link-items "
                    aria-current="page"
                    to="/career"
                  >
                    CAREER
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    onClick={hideBars}
                    class="nav-link link-items "
                    aria-current="page"
                    to="/blog"
                  >
                    BLOG
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    onClick={hideBars}
                    class="nav-link link-items "
                    aria-current="page"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
                <div className="mx-lg-5 mx-sm-auto free-seo-button-div">
                  <Link
                    to="/contact"
                    className="free-seo-button"
                    onClick={hideBars}
                  >
                    Free Seo Analysis
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <script>
    ( document ).ready(function() {
   
 	$('.dropdown-item').click(function(){
  	 $('.navbar div').removeclass('show');
  });  
  $('.single').click(function(){
    	 $('.navbar div').removeclass('show');
  });
 
   });   
    </script> */}
    </>
  );
};

export default Header;
