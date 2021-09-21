import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import '../styles/Projects.scss';
// import AddProjectForm from './AddProjectForm';




const Projects = () => {


  return (
      <div className='project-container'>
      <div className='project-card-container'>   
    <Card className='project-card'>
      <CardActionArea>
      <div style={{position: "relative", paddingBottom: "62.5%", height: "0"}}>
        <iframe src="https://www.loom.com/embed/18e195e0e34e4a4b9f1470d5ac228d15?hide_title=true&hide_owner=true" frameborder="0"  title='Testing BW-MiracleMessages Backend in Postman' webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe>
        </div>
        </CardActionArea>
        <CardContent >
          <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
          Bw-MiracleMessages/Back-End
          </Typography>
          <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }}  variant="body2" color="textSecondary" component="p">
            This API was created for the app Miracle Messages. Miracle Messages allows volunteers to post a missing person looking to reconnect with their family members. 
            <em><p>Note: This API requires authentication, so I've attached a demo video above. </p></em>
          
          </Typography>
        </CardContent>
     
      <CardActions className='project-card-btn'>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://github.com/BW-Miracle-Messages/Back-End' target='_blank' rel='noopener noreferrer'>
        <i className=" fa fa-solid fa-code"></i>
        </Button>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#008080'}} size="small" color="primary" href='https://miracle-messages2019.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
        <i className="fa fa-solid fa-globe"></i>
        </Button>
        <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://documenter.getpostman.com/view/7274937/SVmzuGiZ?version=latest' target='_blank' rel='noopener noreferrer'>
          Documentation
        </Button>
      </CardActions>
    </Card>

<Card className='project-card'>
<CardActionArea>
<div style={{position: "relative", paddingBottom: "62.5%", height: "0"}}>
  <iframe src="https://www.loom.com/embed/95b683c7bb9b405ea97745b61d080be3?hide_title=true&hide_owner=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Jeep Web Scraper Video" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
  <CardContent>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
      Jeep Prices Web Scraper
    </Typography>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      A web scraper built with Puppeteer that collects data from two car websites and saves them to a MongoDB database.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions className='project-card-btn'>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb/Jeep-Prices-Repo' target='_blank' rel='noopener noreferrer'>
  <i className=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary" href='https://jeep-prices-repo-be.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
  <i className="fa fa-solid fa-globe"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', borderRadius: '5px', color: '#EBB604'}} size="small" color="primary" href='https://documenter.getpostman.com/view/7274937/TW6tKV9M' target='_blank' rel='noopener noreferrer'>
    Documentation
  </Button>
</CardActions>
</Card>

<Card className='project-card'>
<CardActionArea>
<div style={{position: "relative", paddingBottom: "62.5%", height: "0"}}>
  <iframe src="https://www.loom.com/embed/cb4e3fbd09bc4a11b05e864f191c9c25?hide_title=true&hide_owner=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Jeep Web Scraper Dashboard" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
  <CardContent>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} component="h2">
      Jeep Price Front End
    </Typography>
    <Typography style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }} variant="body2" color="textSecondary" component="p">
      Front end React application to display the information from the Jeep Prices Web Scraper. <em>Please note that this is a work in progress.</em>
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions className='project-card-btn'>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb/Jeep-Repo-FE' target='_blank' rel='noopener noreferrer'>
  <i className=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary" href='https://jeep-repo-fe-mdm9ra0ht-mykolbenning.vercel.app/' target='_blank' rel='noopener noreferrer'>
  <i className="fa fa-solid fa-globe"></i>
  </Button>
</CardActions>
</Card>

{/* <Card className='project-card'>
<CardActionArea>
  <CardMedia
    className='project-img'
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
<CardActions className='project-card-btn'>
  <Button  style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#EBB604' }} size="small" color="primary" href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
  <i className=" fa fa-solid fa-code"></i>
  </Button>
  <Button style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#008080' }} size="small" color="primary">
  <i className="fa fa-solid fa-globe"></i>
  </Button>
</CardActions>
</Card> */}

</div> 
{/* <AddProjectForm /> */}
</div>
  )
}


export default Projects;