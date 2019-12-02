import React, { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll, scroller, Events } from "react-scroll";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuTwoToneIcon  from '@material-ui/icons/MenuTwoTone';


export default function MobileNav() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = e => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


//scrolling events
useEffect(() => {
  Events.scrollEvent.register('begin', function() {
    console.log('begin', arguments)
  })

  Events.scrollEvent.register('end', function() {
    console.log('end', arguments);
  });

    return() => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
}, [])



//scrolling 

      const scrollToContact = () => {
        scroller.scrollTo();
      }

      const scrollToProjects = () => {
        scroller.scrollTo();
      }

      const scrollToAbout = () => {
        scroller.scrollTo();
      }

     //changed width from 5% to auto
    return (
        <div className='nav-wrapper'> 
          <MenuTwoToneIcon style={{ 
            height: '50px', 
            width: 'auto',
             }}   
             onClick={handleClick}>
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
            to='about-section' 
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}
            name='about'
            onClick={() => scrollToAbout()}>About</Link>
            <Link
            to='project-section' 
            activeClass='active'  
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}  
            isDynamic={true}
            name='projects'
            onClick={() => scrollToProjects()}>Projects</Link>
            <Link 
            to='contacts-section'
            activeClass='active'  
            spy={true} 
            smooth={true} 
            duration={500}  
            isDynamic={true}
            name='contacts'
            onClick={() => scrollToContact()}>Contact</Link>
          </Menu>
        </div>
      );
    }




