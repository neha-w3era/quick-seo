import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css";
import Image404 from "../assets/404.png";

const NotFound404 = () => {
  return (
    <section className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className=" error-code">
              <strong>404</strong>
            </h1>
            <h3>Oops... Page Not Found!</h3>
            <h6>Try using the button below to go to main page of the site</h6>

            <Link className="error-page-btn btn btn-primary solid blank" to="/">
              <i class="fa-solid fa-circle-left error-icon mx-2"></i>
              GO TO HOME
            </Link>
          </div>
          <div className="col-12 col-md-6 error-image-div">
            <img width="100%" src={Image404} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound404;
