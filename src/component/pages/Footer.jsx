/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import "../style/Footer.css";

import FooterBg from "../assets/footer-bg.jpg";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <>
      <footer className="footer-main ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 text-data-div">
              <div className="left-footer-div1">
                <h2>Interested in working with us ?</h2>
                <p>LET'S TALK AND GET STARTED</p>
              </div>
              <div className="left-footer-div2">
                <div>
                  <img
                    className=""
                    width="100%"
                    src={FooterBg}
                    alt="Footer-bg"
                  />
                </div>
                <div>
                  <h4>Follow us</h4>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/Quick-Website-Seo-174487189915221/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="footer-social-icon fb-icon fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com/WebsiteQuick"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter footer-social-icon twitter-icon "></i>
                  </a>
                  <a
                    href="https://in.pinterest.com/quickwebsiteseo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-pinterest footer-social-icon pinterest-icon"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/quickwebsite-seo-370643166/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-linkedin-in footer-social-icon linkedin-icon"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/quickwebsiteseo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-instagram footer-social-icon insta-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 footer-right-div2">
                <FooterForm />
              </div>
          </div>
        </div>
      </footer>
      <div className=" copyright-div">
        <div className="container">
          <p className=" m-0">
            Copyright © 2018-2024 Quickseowebsite. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
