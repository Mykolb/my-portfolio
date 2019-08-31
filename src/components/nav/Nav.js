import React, { useState } from 'react';
import './Nav.css';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
    const [page, setPage] = useState()

       const scrollToTop = () => {
        scroll.scrollToTop();
      };

      const scrollToBottom = () => {
          scroll.scrollToBottom()
      }

    const scrollTo = () => {
        scroll.scrollTo()
    }
    

    return(
        <div className='nav-container'>
            {/* { 'activeClassName' === 'active' ? '#000000' : '#800080' } */}
            <Link 
            to='home' 
            activeClass='active'  
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='text'
            onClick={scrollToTop}
            >Home</Link>

            <Link 
            to='about' 
            activeClass='active'  
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='text'
            onClick={scrollTo}>About</Link>

            <Link 
            to='projects' 
            activeClass='active'  
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='text'>Projects</Link>

            <Link 
            to='contact' 
            activeClass='active'  
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='text'
            onClick={scrollToBottom}>Contact</Link>
        </div>
    )
}


export default Nav;