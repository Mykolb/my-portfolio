import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import Resume from "../resume/Resume2.pdf";


export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  //changed width from 5% to auto
  return (
    <div className="nav-wrapper">
      <MenuTwoToneIcon id="ham-icon" onClick={handleClick}>
        Open Menu
      </MenuTwoToneIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        //prevents popup err from displaying due to max-height
        marginThreshold={0}
      >
        <NavLink
          to={`/about`}
          activeClassName="active"
          name="/about"
          style={{ color: "#B3A190", textDecoration: "none" }}
          activeStyle={{
            color: "#E63629",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={handleClose}
        >
          About
        </NavLink>
        <NavLink
          to={`/projects`}
          activeClassName="active"
          name="projects"
          style={{ color: "#B3A190", textDecoration: "none" }}
          activeStyle={{
            color: "#E63629",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={handleClose}
        >
          Projects
        </NavLink>
        <NavLink
          to={`/contact`}
          activeClassName="active"
          name="contacts"
          style={{ color: "#B3A190", textDecoration: "none" }}
          activeStyle={{
            color: "#E63629",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={handleClose}
        >
          Contact
        </NavLink>
        <NavLink
          to={`/sign-in`}
          activeClassName="active"
          name="signin"
          style={{ color: "#B3A190", textDecoration: "none" }}
          activeStyle={{
            color: "#E63629",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={handleClose}
        >
          Sign In
        </NavLink>
        <div className="mobile-nav-icons">
          <a
            href="https://github.com/Mykolb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github fa-1x  fa-border github"
              id="github-icon"
            />
          </a>

          <a
            href="https://Linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin-in fa-1x  fa-border linkedin"
              id="linkedin-icon"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-twitter fa-1x  fa-border twitter"
              id="twitter-icon"
            />
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <i
              className="fa fa-file-text-o fa-1x fa-border resume"
              id="resume-icon"
            ></i>
          </a>
        </div>
      </Menu>
    </div>
  );
}
