import React, { useState } from "react";
import axios from "axios";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  // const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
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
        "http://www.quickwebsiteseo.com/get-quote-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        {/* <div>{submitting && <p>Submitting...</p>}</div> */}
        <form action="" className="getQuote-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            id=""
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            id=""
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            id=""
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="getQuote-btn" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
        {/* <div className="text-center">
          <center className="text-center py-3">
            {successMessage && <h6>{successMessage}</h6>}
          </center>
        </div> */}
      </div>
    </>
  );
};

export default GetQuoteForm;
