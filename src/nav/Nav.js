import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Nav.scss';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const Nav = () => {

    
      const scrollToTop = () => {
        scroll.scrollToTop();
      }

      const scrollToBottom = () => {
        scroll.scrollToBottom(100);
      }

      const scrollToProjects = () => {
        scroll.scrollTo(10);
      }

      const scrollToAbout = () => {
        scroll.scrollTo(250);
      }

      // console.log('Project Scroll', scrollTo)

    return(
        <nav className='nav-wrapper'>
            <ul className='nav-ul'>

                <Link to='/' activeClass='active'  spy={true} smooth={true} offset={-70} duration={500}  isDynamic={true}onClick={scrollToTop}>Home</Link>
                <Link to='about' activeClass='active'  spy={true} smooth={true} offset={-70} duration={500} isDynamic={true} onClick={scrollToAbout}>About</Link>
                <Link to='projects' activeClass='active'  spy={true} smooth={true} offset={-70} duration={500} isDynamic={true} onClick={scrollToProjects}>Projects</Link>
                <Link to='contact' activeClass='active'  spy={true} smooth={true} offset={-20} duration={500} isDynamic={true} onClick={scrollToBottom}>Contact</Link>
            {/* <a href='#' className='active'>Home</a>
            <a href='#' className='nav-a'>About</a>
            <a href='#' className='nav-a'>Projects</a>
            <a href='#' className='nav-a'>Contact</a> */}
            </ul>
        </nav>
    )
        }
    

export default Nav;