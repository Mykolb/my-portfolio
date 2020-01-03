import React, {useState, useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg';
import '../styles/About.scss';
import MobileAbout from './MobileAbout';
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
      console.log('Working?', handleSize)
    }
    }, [])
  
  const handleSize = () => {
    setState({width: window.innerWidth})
    console.log('HANDLESTATE', handleSize)
  }
  
  const isMobileView = state.width <= 800

    return(
      <>      
{!isMobileView ? (
      <div>
        <div className='aboutContainer'>
        <h2 className='aboutHeading' 
        id='about-section'
        style={{ 
          textAlign: 'center', 
          fontFamily: 'Love Ya Like A Sister, cursive',
          color: '#B3A190', 
          fontSize: '2rem'}}>WHO AM I?</h2>
        </div>
        <div className='entireContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <Avatar 
        alt="profile picture" 
        src={Profile} 
        className='bigAvatar' 
        />
      </Grid>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className='bio'>
          Welcome to my page! I'm Mykol, a Full Stack Developer. I've spent the last year studying Web Development and Computer Science at Lambda School. I've also had the amazing opportunity to intern as a Team Lead. Please check out my projects and don't hesitate to contact me if you have any questions. Thanks for visiting! 
       </p>
       </Grid>
        </div>
        </div>
        ) :  (  <MobileAbout />
        )}
        </>
    )
}



