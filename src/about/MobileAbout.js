import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'
import '../styles/About.scss'



 
      
      export default function MobileAbout(props) {

      
	let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

	const soundEffect = () => {
		audio.play()
  }


    return(
      <div>
        <div className='aboutContainer' >
        <h2 className='mobile-aboutHeading' 
        id='about-section'
        style={{ 
          textAlign: 'center', 
          fontFamily: 'Shadows Into Light, cursive', 
          color: '#B3A190', 
          fontSize: '2rem', 
          marginTop: '15%'}}>WHO AM I?</h2>
        <i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
        </div>
        <div className='entireContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <Avatar 
        alt="profile picture" 
        src={Profile} 
        className='bigAvatar' 
        />
      </Grid>
      {/* <div className='bioContainer'> */}
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className='bio'>
          Welcome to my page! I'm Mykol, a Full Stack Developer. I've spent the last year studying Web Development and Computer Science at Lambda School. I've also had the amazing opportunity to intern as a Team Lead. Please check out my projects and don't hesitate to contact me if you have any questions. Thanks for visiting! 
       </p>
       </Grid>
      {/* </div> */}
        </div>
        </div>
    )
}