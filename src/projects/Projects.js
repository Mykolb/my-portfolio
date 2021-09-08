import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import '../styles/Projects.scss';
import AddProjectForm from './AddProjectForm';




const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 3.5% 3.5% 3.5%',
    paddingBottom: '3.5%',
  },
  headingContainer: {
    margin: '0 auto',
    justifyContent: 'center',
    // border: '5px solid brown',
    // borderBottom: '5px dotted #EBB604',
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Love Ya Like A Sister, cursive',
    color: '#B3A190',
    fontSize: '2rem',
  },
  card: {
    width: 400,
    flexDirection: 'column',
    margin: '6%',
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '7px solid black',
    borderRadius: '15px',
  },
  media: {
    height: 200,
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    margin: 'auto'
  },
  cardButtons: {
    textAlign: 'center',
  }

});


export default function Projects() {
  const classes = useStyles();



  return (
      <div className={classes.container}>
        {/* <div className={classes.headingContainer}>
          <h2 className={classes.heading} id='project-section'>PROJECTS</h2>
          </div> */}
      <div className={classes.cardContainer}>   
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          title="Washington Monument during sunset"
         />
        </CardActionArea>
        <CardContent >
          <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
          Bw-MiracleMessages/Back-End
          </Typography>
          <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }}  variant="body2" color="textSecondary" component="p">
            This API was created for the app Miracle Messages. Miracle Messages allows volunteers to post a missing person looking to reconnect with their family members.
          </Typography>
        </CardContent>
     
      <CardActions className={classes.cardButtons}>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://github.com/BW-Miracle-Messages/Back-End' target='_blank' rel='noopener noreferrer'>
        <i class=" fa fa-solid fa-code"></i>
        </Button>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#008080'}} size="small" color="primary" href='https://miracle-messages2019.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
        <i class="fa fa-solid fa-globe"></i>
        </Button>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://documenter.getpostman.com/view/7274937/SVmzuGiZ?version=latest' target='_blank' rel='noopener noreferrer'>
          Documentation
        </Button>
      </CardActions>
    </Card>

<Card className={classes.card}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="https://images.pexels.com/photos/739047/pexels-photo-739047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  
    title="Washington Monument"
  />
  <CardContent>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
      Jeep Prices Web Scraper
    </Typography>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      A web scraper that collects data from two car websites and saves them to a database.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions className={classes.cardButtons}>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb/Jeep-Prices-Repo' target='_blank' rel='noopener noreferrer'>
  <i class=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary" href='https://jeep-prices-repo-be.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
  <i class="fa fa-solid fa-globe"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://documenter.getpostman.com/view/7274937/TW6tKV9M' target='_blank' rel='noopener noreferrer'>
    Documentation
  </Button>
</CardActions>
</Card>

<Card className={classes.card}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
    title="Cherry Blossoms"
  />
  <CardContent>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
      TBA Project 3
    </Typography>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions className={classes.cardButtons}>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
  <i class=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary">
  <i class="fa fa-solid fa-globe"></i>
  </Button>
</CardActions>
</Card>

<Card className={classes.card}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="https://images.pexels.com/photos/1462124/pexels-photo-1462124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
    title="Japanese Temple and Cherry Blossoms"
  />
  <CardContent>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
      TBA Project 4
    </Typography>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions className={classes.cardButtons}>
  <Button  style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
  <i class=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary">
  <i class="fa fa-solid fa-globe"></i>
  </Button>
</CardActions>
</Card>

</div> 
<AddProjectForm />
</div>
  )
}


