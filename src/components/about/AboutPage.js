import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'
import './AboutPage.css'

const useStyles = makeStyles({

    bigAvatar: {
      margin: 10,
      width: 300,
      height: 300,
    }
  });
  
  export default function AboutPage() {
    const classes = useStyles();
  
    return (
      <div className='about-container'>
        <h2>ABOUT</h2>
        {/* <div className='avatar-container'>
      <Grid>
        <Avatar alt="profile picture" src={Profile} className={classes.bigAvatar} />
      </Grid>
        </div> */}
      </div>
    );
  }
