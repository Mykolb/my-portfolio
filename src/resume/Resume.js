import React from "react";
import MyResume from "../resume/MyResume.pdf";
import Tooltip from '@material-ui/core/Tooltip';


const Resume = () => {
  return (
    <Tooltip title="Resume">
    <a href={MyResume} target="_blank" rel="noopener noreferrer">
      <i
        className="fa fa-file-text-o fa-2x fa-border resume"
        id="resume-icon"
      ></i>
    </a>
    </Tooltip>
  );
};

export default Resume;
