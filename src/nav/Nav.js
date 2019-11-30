import React, { useState, useEffect} from 'react';
import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll, scroller, Events } from "react-scroll";
import '../styles/Nav.scss';
import MobileNav from './MobileNav';



const Nav = () => {

  const [navState, setNavState] = useState({
		width: window.innerWidth
  })
  

  //add/remove event listener for screen width 
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



      const scrollToTop = () => {
        scroller.scrollTo()

      }

      const scrollToContact = () => {
        scroller.scrollTo();
      }

      const scrollToProjects = () => {
        scroller.scrollTo();
        
      }

      const scrollToAbout = () => {
        scroller.scrollTo();
      }


      // console.log('Project Scroll', scrollTo)

    return(
      <>
      	{!isMobileView ? (
        <nav className='nav-wrapper'>
                <Link 
                to='home-section' 
                activeClass='active'  //class applied when element is reached 
                spy={true} //make link selected when scroll is at target position
                smooth={true} //animate the scrolling
                offset={-80} //additional scrolling px 
                duration={700}  //time of scroll animation 
                isDynamic={true} //for content that expands, needs recaulated
                name='home'
                onClick={() => scrollToTop()}>Home</Link>
                <Link 
                to='about-section' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={700} 
                isDynamic={true} 
                name='about'
                onClick={() => scrollToAbout()}>About</Link>
                <Link 
                to='project-section' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={700} 
                isDynamic={true} 
                name='projects'
                onClick={() => scrollToProjects()}>Projects</Link>
                <Link 
                to='contacts-section' 
                activeClass='active'  
                spy={true} 
                smooth={true} 
                // offset={500} 
                duration={700} 
                isDynamic={true} 
                name='contacts'
                onClick={() => scrollToContact()}>Contact</Link>
        </nav>
        ) :  (  <MobileNav />
        )}
        </>
    )
        }
    

export default Nav;