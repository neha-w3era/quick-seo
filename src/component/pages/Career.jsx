import React from "react";
import { Link } from "react-router-dom";
import "../style/Career.css";
import { Helmet } from "react-helmet";
import CareerForm from "./CareerForm";
const Career = () => {
  return (
    <>
      <section>
        <Helmet>
          <title>
            Jobs in SEO | SMO | Digital marketing - Career - Quick Website SEO
          </title>
          <meta
            name="description"
            content="Quick Website SEO is looking for SEO, SMO, and Content writing experts. Apply today if you want to make career in your digital marketing dream job."
          />

          <link
            rel="canonical"
            href="https://www.quickwebsiteseo.com/career/"
          />
        </Helmet>

        <div className="about-banner-section">
          <div className="container about-head-div ">
            <div>
              <h1 className="about-us-heading">Career</h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                <Link className="home-link" to="/">
                  Home{" "}
                </Link>
                / Career
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* job post section  */}

      <section>
        <div className="">
          <h4 className="text-center fs-24 p-5 px-2">
            <strong>
              If you love challenges and has an insatiable hunger to excel then,
              we welcome you to drive us forward!
            </strong>
          </h4>
          <div className="container">
            <div className="row career-main  gx-4 gy-4">
              <div className="col-sm-6 career-post-div">
                <h3 className="text-center post-heading">SEO EXECUTIVE</h3>
                <p className="post-detail">
                  Full Time No. of Vacancies : <strong>5</strong>
                  {"  "} Experience :<strong> 1-3</strong> Years
                </p>
                <hr />
                <h5 className="responsi-tag">
                  <strong>Responsibilities</strong>
                </h5>
                <ul>
                  <li>
                    Perform painstaking keyword research as per client business
                    objective
                  </li>
                  <li>Create, Implement, & manage link building campaigns</li>
                  <li>
                    Monitor and evaluate the search performance across all the
                    search engines to boost up the rankings.
                  </li>
                  <li>
                    Communicate with team and management to initiate, process,
                    and execute the task within the deadlines.
                  </li>
                  <li>
                    Provide recommendation of finest strategies for SEO process
                    & content development to meet the end goals.
                  </li>
                  <li>
                    Perform SEO analysis and provide recommendations to optimize
                    the website rapidly.
                  </li>
                </ul>
                <h5 className="skill-tag">
                  <strong>Skills & Qualifications</strong>
                </h5>
                <ul>
                  <li>High level proficiency in MS Word, Powerpoint & Excel</li>
                  <li>
                    Outstanding knowledge of SEO tools like ( webmaster,
                    analytics, SEMrush, AHREF, etc)
                  </li>
                  <li>In-depth understanding of SEO process</li>
                  <li>
                    Extremely strong verbal & written communication skills
                  </li>
                  <li>
                    Ability to analyze the huge chunk of data and experienced
                    enough to manage multiple projects at a time.
                  </li>
                </ul>
                <div className="career-apply-btn-div">
                <a href="#apply-jobs-from" className="career-apply-now">Apply Now</a>

                </div>
              </div>
              <div className="col-sm-6 career-post-div">
                <h3 className="text-center post-heading">SMO EXPERT</h3>
                <p className="post-detail">
                  Full Time No. of Vacancies : <strong>2</strong>
                  {"  "} Experience :<strong> 1-3</strong> Years
                </p>
                <hr />
                <h5 className="responsi-tag">
                  <strong>Responsibilities</strong>
                </h5>
                <ul>
                  <li>
                    Work with in-house social media team to build and manage the
                    social campaigns for the clients
                  </li>
                  <li>
                    Ensure the development & execution of social media campaign
                    strategies.
                  </li>
                  <li>
                    Frequently monitor the social media channels and campaigns
                    to ensure traffic growth.
                  </li>
                  <li>
                    Keep a close eye on the latest social media trends and tools
                  </li>
                  <li>
                    Assist in developing and managing the workflow process for
                    optimum results.
                  </li>
                </ul>
                <h5 className="skill-tag">
                  <strong>Skills & Qualifications</strong>
                </h5>
                <ul>
                  <li>Excellent leadership & project management skills</li>
                  <li>
                    Have an upbeat attitude and ability to work under enormous
                    pressure
                  </li>
                  <li>
                    Must be a social media preacher who loves to tap into the
                    social media world and market the clients brand name.
                  </li>
                  <li>
                    Extremely strong verbal & written communication skills
                  </li>
                  <li>
                    Must know how to harness the various social networking
                    platforms and devise the best course of action for the
                    projects.
                  </li>
                </ul>
                <div className="career-apply-btn-div">
                <a href="#apply-jobs-from" className="career-apply-now">Apply Now</a>

                </div>
              </div>
              <div className="col-sm-6 career-post-div">
                <h3 className="text-center post-heading">CONTENT WRITER</h3>
                <p className="post-detail">
                  Full Time No. of Vacancies : <strong>2</strong>
                  {"  "} Experience :<strong> 1-3</strong> Years
                </p>
                <h5 className="responsi-tag">
                  <strong>Responsibilities</strong>
                </h5>
                <hr />
                <ul>
                  <li>
                    Develop the compelling and brand-centric content for the
                    clients business.
                  </li>
                  <li>
                    Develop and implement the effectual content marketing
                    strategies to grow the traffic and user base
                  </li>
                  <li>Must know how to write ridiculously amazing blogs</li>
                  <li>Grow and manage the database of users for the clients</li>
                  <li>
                    Perform meticulous research to extract the finest ideas
                    which bound the users to stick and read.
                  </li>
                </ul>
                <h5 className="skill-tag">
                  <strong>Skills & Qualifications</strong>
                </h5>
                <ul>
                  <li>Outstanding command of the English language</li>
                  <li>Unmatched editorial skills</li>
                  <li>Be a master storyteller</li>
                  <li>Proficient in writing all styles of content</li>
                </ul>
                <div className="career-apply-btn-div">
                  <a href="#apply-jobs-from" className="career-apply-now">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="career-page-hr" />

      <section id="apply-jobs-from" >
        <div className="container">
          <h1 className="text-center apply-job-heading ">APPLY FOR JOB</h1>

          <p className="apply-job-para">
            Quickwebsiteseo is the ideal platform for both freshers and working
            professionals to showcase their talent & Knowledge and garner
            experience. We highly value the industry talents who have the zeal
            and drive to excel. Join us today and ensure your shiny future!
          </p>

          <p>&nbsp;</p>
          <p className="apply-job-para">
            With Search Engine Optimization, you can promote your website to
            present information in a way that brings and captivates users to the
            page. Whether r you own a small, medium, or large-sized enterprise,
            SEO plays a crucial role for every online business.
          </p>
          <p>&nbsp;</p>
          <p className="apply-job-para">
            We at Quick Website SEO offer quality SEO services that will help
            your business rank at the top of the digital world. We believe in
            offering a complete business solution that fits your requirement
            criteria. We usually hire experts who have precise knowledge of
            digital marketing and can boost a website ranking in the search
            engine. So if you want to give a kick start to your digital
            marketing career, you can approach us for the job.
          </p>
          <p>&nbsp;</p>
          <p className="apply-job-para">
            We update recent <strong>SEO jobs in Jaipur</strong> on our portal
            with eligibility criteria. If you find yourself suitable for the
            opening, feel free to share your resume with us.
          </p>
        </div>
      </section>

      {/* form apply jobs  */}
      <section >
        <div className="container py-4 ">
        <CareerForm/>

        </div>
      </section>
    </>
  );
};

export default Career;
