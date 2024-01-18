import React, { useState } from "react";
import axios from "axios";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    email: "",
    contactNumber: "",
    applyFor: "",
    experience: "",
    resume: null,
    message: "",
  });

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObj = new FormData();
      formDataObj.append("file", file);

      for (const key in formData) {
        formDataObj.append(key, formData[key]);
      }
      setLoading(true);
      const response = await axios.post(
        "http://www.quickwebsiteseo.com/submit-job-application",
        formDataObj
      );
      if (response.status === 200) {
        console.log("File uploaded successfully.");
        // Optionally, you can reset the form or perform other actions here
      } else {
        console.error("File upload failed.");
      }

      // Reset the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        email: "",
        contactNumber: "",
        applyFor: "",
        experience: "",
        resume: null,
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
    <div>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="row">
          <div className="col-md-6 my-2">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-md-6 my-2">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-md-6 my-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-md-6 my-2">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-md-6 my-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-md-6 my-2">
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Contact Number"
              autocomplete="off"
              required
            />
          </div>
          <div className="col-6 my-2">
            <select
              name="applyFor"
              value={formData.applyFor}
              onChange={handleInputChange}
              autocomplete="off"
              required
            >
              <option value="">-- Apply For --</option>
              <option value="seo">SEO</option>
              <option value="smo">SMO</option>
              <option value="ppc">PPC</option>
              <option value="contentWriter">Content Writer</option>
              <option value="businessAnalyst">Business Analyst</option>
            </select>
          </div>
          <div className="col-6 my-2">
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Select Experience --</option>
              <option value="1-2">1-2 Years</option>
              <option value="2-4">2-4 Years</option>
              <option value="4-6">4-6 Years</option>
              <option value="above6">Above 6 Years</option>
            </select>
          </div>
          <div className="col-12 my-2">
            <input
              type="file"
              name="file"
              id="resume"
              accept=".pdf, .docx, .doc"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="col-12 my-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              autocomplete="off"
              required
            ></textarea>
          </div>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          <button type="submit" className="career-apply-now" disabled={loading}>
            {loading ? "Submitting" : "Apply Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
