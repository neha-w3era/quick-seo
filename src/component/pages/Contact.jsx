import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import "../style/Contact.css";
import ContactImage from "../assets/Contact-Us.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://www.quickwebsiteseo.com/contact-form",
        formData,{
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
      // Handle success, show a success message, redirect, etc.
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
      // Handle error, show an error message, etc.
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>Contact - Digital Marketing Solutions - Quick Website SEO</title>
        <meta
          name="description"
          content="If you have any query feel free to call us at +91 9928640792 or you can fill the form. We will get back to you."
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
        <link rel="canonical" href="https://www.quickwebsiteseo.com/contact/" />
      </Helmet>
      <section className="">
        <div className="about-banner-section">
          <div className="container about-head-div ">
            <div>
              <h1 className="about-us-heading">Contact</h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                <Link className="home-link" to="/">
                  Home{" "}
                </Link>
                / Contact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact form section  */}
      <section>
        <form action="" onSubmit={handleSubmit}>
          <div className="container py-2 py-md-3 ">
            <div>
              <div className="row py-lg-1 py-5">
                <div className="col-lg-6 col-12 mx-auto">
                  <img className="" width="90%" src={ContactImage} alt="" />
                </div>
                <div className="col-lg-6 col-12 py-sm-2 py-5">
                  <div>
                    <h3 className="contact-heading-tag">Give a Message</h3>
                  </div>
                  <div className="col-sm-12 mt-2 mt-sm-4">
                    <input
                      className="contact-div-inputs"
                      type="text"
                      name="name"
                      value={formData.name}
                      id=""
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-sm-12 py-2">
                    <input
                      className="contact-div-inputs"
                      type="email"
                      name="email"
                      value={formData.email}
                      id=""
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className=" col-sm-12 py-2">
                    <input
                      className="contact-div-inputs"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      id=""
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="col-sm-12 py-2">
                    <input
                      className="contact-div-inputs"
                      type="text"
                      name="subject"
                      id=""
                      onChange={handleChange}
                      value={formData.subject}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-12 py-2">
                    <textarea
                      className="contact-div-inputs"
                      type="text"
                      name="message"
                      id=""
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                   
                    />
                  </div>
                  <div className="send-btn-contact-div">
                    <button type="submit" className="send-btn-div">
                     {loading ? "Sending" : "Send"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
