import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'
import './ProfilePic.css'

    const useStyles = makeStyles({

        bigAvatar: {
          margin: 10,
          width: 300,
          height: 300,
        }
      });
      
      export default function ProfilePic() {
        const classes = useStyles();


    return(
        <div className='avatar-container'>
        <Grid container justify="flexStart" alignItems="flexStart">
        <Avatar 
        alt="profile picture" 
        src={Profile} 
        className={classes.bigAvatar} 
        
        
        />
      </Grid>
        </div>
    )
}



