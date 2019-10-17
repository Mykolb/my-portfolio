import React, { useState } from 'react';
import './Nav.css';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'sticky'
    },
    title: {
      flexGrow: 1,
    },
  }));
  




  export default function Nav() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <nav>
              <a href='#'>Home</a>
              <a href='#'>About</a>
              <a href='#'>Projects</a>
              <a href='#'>Contact</a>
              </nav>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }







































//     const [page, setPage] = useState()

//        const scrollToTop = () => {
//         scroll.scrollToTop();
//       };

//       const scrollToBottom = () => {
//           scroll.scrollToBottom()
//       }

//     const scrollTo = () => {
//         scroll.scrollTo()
//     }
    




//     return(
//         <div className='wrapper'>
//             {/* { 'nav-container' === 'active' ? 'margin: 0;' : 'position:fixed' } */}
//             {/* <nav className='nav'> */}
//             <Link 
//             to='home' 
//             activeClass='active'  
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className='text'
//             onClick={scrollToTop}>Home</Link>

//             <Link 
//             to='about' 
//             activeClass='active'  
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className='text'
//             onClick={scrollTo}>About</Link>

//             <Link 
//             to='projects' 
//             activeClass='active'  
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className='text'
//             onClick={scrollTo}>Projects</Link>

//             <Link 
//             to='contact' 
//             activeClass='active'  
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className='text'
//             onClick={scrollToBottom}>Contact</Link>
//             {/* </nav> */}
//         </div>
//     )
// }



// export default Nav;