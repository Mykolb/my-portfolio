import React from "react";
import "../styles/Footer.scss";
import MyResume from "../resume/my-resume.pdf";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons">
        <a
          href="https://github.com/Mykolb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-github fa-2x  fa-border github"
            id="github-icon"
          />
        </a>

        <a
          href="https://Linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin-in fa-2x  fa-border linkedin"
            id="linkedin-icon"
          />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i
            className="fab fa-twitter fa-2x  fa-border twitter"
            id="twitter-icon"
          />
        </a>

        <a href={MyResume} target="_blank" rel="noopener noreferrer">
          <i
            className="fa fa-file-text-o fa-2x fa-border resume"
            id="resume-icon"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
