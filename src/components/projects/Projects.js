import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'


//create an array of projects and map over them to display projects 



// const projectArray = ["project1", "project2", "project3", "project4]



const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    maxWidth: 400,
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '2.5%',
    // padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '7px solid black'
  },
  media: {
    height: 200,
    width: 300
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
      <div className={classes.container}>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          title="Washington Monument during sunset"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            TBA Project 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
          Github
        </Button>
        <Button size="small" color="primary">
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
    <Typography gutterBottom variant="h5" component="h2">
      TBA Project 2
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button size="small" color="primary">
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
    <Typography gutterBottom variant="h5" component="h2">
      TBA Project 3
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button size="small" color="primary">
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
    <Typography gutterBottom variant="h5" component="h2">
      TBA Project 4
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Description
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
    Github
  </Button>
  <Button size="small" color="primary">
  Website
  </Button>
</CardActions>
</Card>


</div>
  )
}


