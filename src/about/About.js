import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import '../styles/About.scss';
import MobileAbout from './MobileAbout';
import Resume from '../resume/Resume';
import Skills from './Skills';
//Creating component that renders based on screen width 
 
      
      export default function About() {

      const [state, setState] = useState({
        width: window.innerWidth
      })
      

  useEffect(() => {

    window.addEventListener('resize', handleSize);
    
    // returned function will be called on component unmount 
    return () => {
      window.removeEventListener('resize', handleSize)
      // console.log('Working?', handleSize)
    }
    }, [])
  
  const handleSize = () => {
    setState({width: window.innerWidth})
    // console.log('HANDLESTATE', handleSize)
  }
  
  const isMobileView = state.width <= 800

    return(
      <>      
{!isMobileView ? (
      <div>
        <div className='entireContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className='bio'>
          Welcome to my portfolio! I'm Mykol, a Full Stack Developer. Feel free to check out my projects or my resume. If you have questions, send me a message. Thanks for visiting! 
       </p>
       <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
          <h4> <Resume /> to check out my resume.</h4>
        </Grid>
       </Grid>
       <Skills />
        </div>
        </div>
        ) :  (  <MobileAbout />
        )}
        </>
    )
}



