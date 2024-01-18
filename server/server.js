import express from "express";
import cors from "cors";
import multer from "multer";
import https from "https";

import pkg from "body-parser";
import { createTransport } from "nodemailer";
const { urlencoded, json } = pkg;

const app = express();
const isProduction = process.env.NODE_ENV === "production";


const serverProtocol = isProduction ? https : require('http');
const server = serverProtocol.createServer(credentials, app);

const PORT = process.env.PORT || 5000;

// Set the port based on the environment
const port = isProduction ? process.env.PORT || 5000 : 5000;
//
app.use(urlencoded({ extended: false }));
app.use(json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "nehasharma@digranknow.com", // Your Gmail email address
    pass: "wxtv exlo ziys qlwq", // Your Gmail password or App Password
  },
});

// Set up Multer for file uploads

// Route for handling Footer  form submissions
app.post("/footer-project-form",  (req, res) => {
  const {
    name,
    email,
    countryCode,
    contactNo,
    websiteURL,
    projectDescription,
  } = req.body;
  const mailOptions = {
    from: "nehasharma@digranknow.com",
    to: "nehasharma@digranknow.com", // Email address for general contact
    subject: "Project Discussion Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nCountry Code: ${countryCode}\nPhone: ${contactNo}\nMessage: ${websiteURL} \nProject Description: ${projectDescription}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("General contact form submitted successfully!");
  });
});


// Route for handling Get Quote Form
app.post("/get-quote-form",  (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: "nehasharma@digranknow.com",
    to: "nehasharma@digranknow.com", // Email address for general contact
    subject: "Get Quote Form Details",
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Get Quote Form form submitted successfully!");
  });
});


// Route for handling Contact Form
app.post("/contact-form", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  const mailOptions = {
    from: "nehasharma@digranknow.com",
    to: "nehasharma@digranknow.com", // Email address for general contact
    subject: "Contact Form Details",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Contact Form submitted successfully!");
  });
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
 // Respond to preflight requests
// Handle POST requests to Submit Job Application
app.post(
  "/submit-job-application",
  upload.single("file"),
  (req, res) => {
    try {
      if (!req.file) {
        throw new Error("No file uploaded");
      }

      const file = req.file;
      const { body } = req;
      // Access other form fields
      const {
        firstName,
        lastName,
        city,
        state,
        email,
        contactNumber,
        applyFor,
        experience,
        message,
      } = body;

      // Access the uploaded file details

      if (file) {
        console.log("File Data:", file.originalname);
      } else {
        console.error("No file uploaded");
        res.status(400).send("Bad Request: No file uploaded");
        return;
      }
      // Compose email content
      const mailOptions = {
        from: "nehasharma@digranknow.com",
        to: "nehasharma@digranknow.com", // Email address where you want to receive form submissions
        subject: "Job Application Submission Form",
        text: `
      Name: ${firstName} ${lastName}
      City: ${city}
      State: ${state}
      Email: ${email}
      Contact Number: ${contactNumber}
      Apply For: ${applyFor}
      Experience: ${experience}
      Message: ${message}

    `,
        attachments: [
          {
            filename: file.originalname,
            content: file.buffer, // Use file.buffer for in-memory storage
          },
        ],
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email sending failed:", error.message);
          res.status(500).send("File upload failed.");
        } else {
          console.log("Email sent:", info.response);
          res.status(200).send("File uploaded and email sent successsfully.");
        }
      });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).send("File upload failed.");
    }
  }
);


// Route for handling Seo checking form
app.post("/seo-checking-form", (req, res) => {
  const { url, email } = req.body;

  console.log(email);
  console.log(url);
  const mailOptions = {
    from: "nehasharma@digranknow.com",
    to: "nehasharma@digranknow.com", // Email address for general contact
    subject: "SEO Checking Form Submission",
    text: `URL: ${url}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Seo contact form submitted successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
