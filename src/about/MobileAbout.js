import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../styles/About.scss'
import NameAudio from '../name audio/NameAudio';
import Resume from '../resume/Resume';

 
      
      export default function MobileAbout() {


    return(
      <div>
        <div className='aboutContainer' >
        <h2 className='mobile-aboutHeading' 
        style={{ 
          textAlign: 'center', 
          fontFamily: 'Love Ya Like A Sister, cursive', 
          color: '#B3A190', 
          fontSize: '2rem', 
          }}>WHO AM I?</h2>
        {/* <NameAudio /> */}
        </div>
        <div className='entireContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
      </Grid>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className='bio'>
          Welcome to my portfolio! I'm  <NameAudio /> a Full Stack Developer. Feel free to check out my projects or my resume. If you have questions, send me a message. Thanks for visiting! 
       </p>
       <h4> <Resume /> to check out my resume.</h4>
       </Grid>
        </div>
        </div>
    )
}