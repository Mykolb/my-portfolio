import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'
import '../styles/About.scss'
import NameAudio from '../name audio/NameAudio';


 
      
      export default function MobileAbout() {


    return(
      <div>
        <div className='aboutContainer' >
        <h2 className='mobile-aboutHeading' 
        id='about-section'
        style={{ 
          textAlign: 'center', 
          fontFamily: 'Love Ya Like A Sister, cursive', 
          color: '#B3A190', 
          fontSize: '2rem', 
          marginTop: '15%'}}>WHO AM I?</h2>
        <NameAudio />
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
    )
}