import React, { useState, useEffect} from 'react';
import * as Scroll from 'react-scroll';
import { Link, scrollTo, animateScroll as scroll } from "react-scroll";
import '../styles/Nav.scss';
import MobileNav from './MobileNav';



const Nav = () => {

  const [navState, setNavState] = useState({
		width: window.innerWidth
  })
  

  useEffect(() => {

    window.addEventListener('resize', handleSize);
    
    // returned function will be called on component unmount 
    return () => {
      window.removeEventListener('resize', handleSize)
    }
    }, [])
  
    const handleSize = () => {
      setNavState({width: window.innerWidth})
      console.log('HANDLESTATE', handleSize)
    }
    
    const isMobileView = navState.width <= 800
    
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

      // console.log('Project Scroll', scrollTo)

    return(
      <>
      	{!isMobileView ? (
        <nav className='nav-wrapper'>
                <Link 
                to='/' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}  
                isDynamic={true}
                onClick={scrollToTop}>Home</Link>
                <Link 
                to='about' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                isDynamic={true} 
                onClick={scrollToAbout}>About</Link>
                <Link 
                to='projects' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                isDynamic={true} 
                onClick={scrollToProjects}>Projects</Link>
                <Link 
                to='contact' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-20} 
                duration={500} 
                isDynamic={true} 
                onClick={scrollToBottom}>Contact</Link>
        </nav>
        ) :  (  <MobileNav />
        )}
        </>
    )
        }
    

export default Nav;