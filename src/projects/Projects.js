import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'





const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '5px dotted #EBB604',
    margin: '3.5%',
  },
  headingContainer: {
    margin: '0 auto',
    justifyContent: 'center',
    // border: '5px solid brown',
    borderBottom: '5px dotted #EBB604',
    width: '100%',
    margin: '3.5%',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Shadows Into Light, cursive',
    color: '#B3A190',
    fontSize: '2rem',
  },
  card: {
    width: 400,
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '2.5%',
    marginBottom: '1%',
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '7px solid black',
    borderRadius: '15px',
    marginBottom: '2.5%',
  },
  media: {
    height: 200,
  },

});


export default function Projects() {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.headingContainer}>
          <h2 className={classes.heading} id='project-section'>PROJECTS</h2>
          </div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          title="Washington Monument during sunset"
        />
        <CardContent>
          <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} component="h2">
            TBA Project 1
          </Typography>
          <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }}  variant="body2" color="textSecondary" component="p">
            Description 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{fontFamily:'Shadows Into Light, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
          Github
        </Button>
        <Button style={{fontFamily:'Shadows Into Light, cursive', borderRadius: '5px', color: '#008080'}} size="small" color="primary">
        Website
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
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} component="h2">
      TBA Project 2
    </Typography>
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button style={{fontFamily:'Shadows Into Light, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button style={{fontFamily:'Shadows Into Light, cursive', color: '#008080' }} size="small" color="primary">
  Website
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
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} component="h2">
      TBA Project 3
    </Typography>
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button style={{fontFamily:'Shadows Into Light, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button style={{fontFamily:'Shadows Into Light, cursive', color: '#008080' }} size="small" color="primary">
  Website
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
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} component="h2">
      TBA Project 4
    </Typography>
    <Typography style={{fontFamily:'Shadows Into Light, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button  style={{fontFamily:'Shadows Into Light, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button style={{fontFamily:'Shadows Into Light, cursive', color: '#008080' }} size="small" color="primary">
  Website
  </Button>
</CardActions>
</Card>

</div>
  )
}


