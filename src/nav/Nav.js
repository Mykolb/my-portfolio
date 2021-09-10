import React, { useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
// import { Link, scroller, Events } from "react-scroll";
import '../styles/Nav.scss';
import MobileNav from './MobileNav';


//Creating component that renders based on screen width 
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
    }
    
    const isMobileView = navState.width <= 800
    




    return(
      <>
      	{!isMobileView ? (
        <nav className='nav-wrapper'>
                <NavLink
                to={`/`}
                activeClassName='active'  //class applied when element is reached 
                name='home'
                // activeStyle={{ color: "#E63629", cursor: "pointer" }}
                >Home</NavLink>
                <NavLink
                to={`/about`}
                activeClassName='active'  
                name='about'
                activeStyle={{ color: "#E63629", cursor: "pointer" }}
                >About</NavLink>
                <NavLink
                to={`/projects`}
                activeClassName='active'  
                name='projects'
                activeStyle={{ color: "#E63629", cursor: "pointer" }}
                >Projects</NavLink>
                <NavLink
                to={`/contact-page`}
                activeClassName='active'  
                name='contacts'
                activeStyle={{ color: "#E63629", cursor: "pointer" }}
                >Contact</NavLink>
                <NavLink
                to={`/sign-in`}
                activeClassName='active'  
                name='signin'
                activeStyle={{ color: "#E63629", cursor: "pointer" }}
                // onClick={() => submitFormOpen()}
                >Sign In</NavLink>
        </nav>
        ) :  (  <MobileNav />
        )}
        </>
    )
        }
    

export default Nav;