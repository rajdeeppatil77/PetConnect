import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>

        <i className="fa fa-envelope"></i>
        <a className="mail-links" href="mailto:rajdeeppatil334@gmail.com">
          rajdeeppatil334@gmail.com
        </a>

        <br />

        <i className="fa fa-linkedin"></i>
        <a
          className="mail-links"
          href="https://www.linkedin.com/in/rajdeep-patil7/"
          target="_blank"
          rel="noreferrer"
        >
          User Name: Rajdeep Patil
        </a>

        <br />

        <i className="fa fa-github"></i>
        <a
          className="mail-links"
          href="https://github.com/rajdeeppatil77"
          target="_blank"
          rel="noreferrer"
        >
          rajdeeppatil77
        </a>

        <br />

        <i className="fa fa-phone"></i>
        <a className="mail-links" href="tel:+919322027792">
          +91 9322027792
        </a>
      </div>

      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;