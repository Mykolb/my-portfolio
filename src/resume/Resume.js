import React from "react";
import MyResume from "../resume/My-Resume.pdf";

const Resume = () => {
  return (
    <a href={MyResume} target="_blank" rel="noopener noreferrer">
      <i
        className="fa fa-file-text-o fa-2x fa-border resume"
        id="resume-icon"
      ></i>
    </a>
  );
};

export default Resume;
