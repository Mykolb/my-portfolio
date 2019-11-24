import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profile from './profile.jpg'
import '../styles/About.scss'



    // const useStyles = makeStyles(theme => ({
    //     entireContainer: {
    //       display: 'grid',
    //       gridTemplateColumns: 'repeat(2, 1fr)',
    //       gridGap: theme.spacing(1),
    //       margin: '5% 4% 0% 4%',
    //     },
    //     aboutContainer: {
    //       margin: '0 auto',
    //       justifyContent: 'center',
    //       border: '5px solid gold',
    //       width: '100%',
    //     },
    //     aboutHeading: {
    //       textAlign: 'center',
    //     },
    //     bigAvatar: {
    //       width: 300,
    //       height: 300,
    //       margin: '10%',
    //       borderRadius: '4%'
    //     },
    //     bioContainer: {
    //       border: '4px solid brown',
    //       width: '100%',
    //       paddingLeft: '2%'
    //     },
    //     bio: {
    //       textAlign: 'center',
    //       width: '100%',
    //     }
    //   }));
      
      export default function ProfilePic() {
        // const classes = useStyles();


    return(
      <div>
        <div className='aboutContainer'>
        <h2 className='aboutHeading' style={{ textAlign: 'center', fontFamily: 'Shadows Into Light, cursive', color: '#B3A190'}}>ABOUT</h2>
        </div>
        <div className='entireContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <Avatar 
        alt="profile picture" 
        src={Profile} 
        className='bigAvatar' 
        />
      </Grid>
      <div className='bioContainer'>
        <Grid container direction='row' justify="center" alignItems="baseline" item xs={6}>
        <p className='bio'>
          Some fasinating info about me goes here. Some fasinating info about me goes here. 
          Some fasinating info about me goes here. Some fasinating info about me goes here.  
          Some fasinating info about me goes here. Some fasinating info about me goes here.  
       </p>
       </Grid>
      </div>
        </div>
        </div>
    )
}



