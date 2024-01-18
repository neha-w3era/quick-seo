import React, { useState } from "react";
import axios from "axios";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    contactNo: "",
    websiteURL: "",
    projectDescription: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
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
        "http://www.quickwebsiteseo.com/footer-project-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        countryCode: "",
        contactNo: "",
        websiteURL: "",
        projectDescription: "",
      });
      // Display success message
      setSuccessMessage("Message received! We will get back to you soon.");
      // Handle success, show a success message, redirect, etc.
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
    // Handle error, show an error message, etc.
  };
  return (
    <>
      <div className="footer-form-outer-div">
        <form className="footer-form-div" onSubmit={handleSubmit} action="">
          <h2 className="text-dark text-center fs-32 fw-bold">
            Discuss Your Project
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Please Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <div>
            <input
              type="number"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              placeholder="Country Code"
              required
            />
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Contact No."
              required
            />
          </div>
          <input
            type="text"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
            placeholder="Website URL (if any)"
          />
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            cols="50%"
            rows="2"
            placeholder="Describe Your Project or Service You Need"
            required
          ></textarea>
          <button type="submit" className="form-submit-btn" disabled={loading}>
            {loading ? "Submitting" : "Submit Now"}
          </button>
        </form>
      </div>
      <div className="text-center">
        <center className="text-center py-3">
          {successMessage && <h6>{successMessage}</h6>}
        </center>
      </div>
    </>
  );
};

export default FooterForm;
