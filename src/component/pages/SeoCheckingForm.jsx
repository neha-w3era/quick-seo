import React, { useState } from "react";
import axios from "axios";

const SeoCheckingForm = () => {
  const [formData, setFormData] = useState({
    url: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "https://www.quickwebsiteseo.com/seo-checking-form",
        formData
      );

      console.log(response.data);
      // Optionally, you can show a success message or perform other actions

      setFormData({
        url: "",
        email: "",
      });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
      // Optionally, you can show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="url"
        onChange={inputChange}
        value={formData.url}
        className="seo-form-input input-web-url"
        placeholder="Type website URL"
        required
        autoComplete="off"
      />
      <input
        type="email"
        onChange={inputChange}
        className="seo-form-input seo-form-email-input"
        name="email"
        value={formData.email}
        placeholder="Your Email"
        autoComplete="off"
        required
      />
      <button type="submit" className="seo-form-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit Now"}
      </button>
    </form>
  );
};

export default SeoCheckingForm;
