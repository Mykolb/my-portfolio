import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'



    const useStyles = makeStyles(theme => ({
        entireContainer: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: theme.spacing(1),
          margin: '5% 4% 0% 4%',
        },
        bigAvatar: {
          width: 300,
          height: 300,
          padding: '2%',
        },
        bioContainer: {
          flexGrow: 1,
          border: '4px solid brown',
          width: '80%'
        },
        bio: {
          textAlign: 'center',
        }
      }));
      
      export default function ProfilePic() {
        const classes = useStyles();


    return(
        <div className={classes.entireContainer}>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <Avatar 
        alt="profile picture" 
        src={Profile} 
        className={classes.bigAvatar} 
        />
      </Grid>
      <div className={classes.bioContainer}>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className={classes.bio}>Some fasinating info about me goes here. Some fasinating info about me goes here. 
          Some fasinating info about me goes here. Some fasinating info about me goes here. Some fasinating info about me goes here.
          Some fasinating info about me goes here. Some fasinating info about me goes here. Some fasinating info about me goes here. 
          Some fasinating info about me goes here. Some fasinating info about me goes here. Some fasinating info about me goes here. 
          Some fasinating info about me goes here. Some fasinating info about me goes here. Some fasinating info about me goes here. 
       </p>
       </Grid>
      </div>
        </div>
    )
}



