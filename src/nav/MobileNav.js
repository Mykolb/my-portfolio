import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import { Link, scrollTo, animateScroll as scroll } from "react-scroll";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuTwoToneIcon  from '@material-ui/icons/MenuTwoTone';

// import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

export default function MobileNav() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

//scrolling 
    const scrollToTop = () => {
        scroll.scrollToTop();
      }

      const scrollToBottom = () => {
        scroll.scrollToBottom();
      }

      const scrollToProjects = () => {
        scroll.scrollTo();
      }

      const scrollToAbout = () => {
        scroll.scrollTo();
      }
    return (
        <div>
          <MenuTwoToneIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open Menu
          </MenuTwoToneIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link 
            to='/'
            to='contact'
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}><MenuItem onClick={scrollToTop}>Home</MenuItem></Link>
            <Link
            to='about'
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}><MenuItem onClick={scrollToAbout}>About</MenuItem></Link>
            <Link
            to='projects'
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}><MenuItem onClick={scrollToProjects}>Projects</MenuItem></Link>
            <Link 
            to='contact'
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}><MenuItem onClick={scrollToBottom}>Contact</MenuItem></Link>
          </Menu>
        </div>
      );
    }




