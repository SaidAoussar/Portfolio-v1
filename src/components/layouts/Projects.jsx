import React from 'react'
import {Container, Paper, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton, Button, Box} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  bgSection: {
    backgroundColor :'#f2f2f5',
  },
}));

// f2f2f5

export default function Projects() {
  var classes = useStyles();
  return (
    <Box className={classes.bgSection} component="div" py={8} id="projects">
      <Container>
        <Box mb={3}>
          <Typography variant="h4" component="h2" align="center">Projects</Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid item sm={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={{height:'150px'}}
                  image="/assets/profil.jpg"
                />
                <CardContent>
                  <Typography gutterBottom component="h3" variant="h5">Library</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta . 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box ml={1}>
                  <Button variant="contained" size="small">
                    <GitHubIcon/>
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={4}>
          <Card>
              <CardActionArea>
                <CardMedia
                  style={{height:'150px'}}
                  image="/assets/profil.jpg"
                />
                <CardContent>
                  <Typography gutterBottom component="h3" variant="h5">Library</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box ml={1}>
                  <Button variant="contained" size="small">
                    <GitHubIcon/>
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={4}>
          <Card>
              <CardActionArea>
                <CardMedia
                  style={{height:'150px'}}
                  image="/assets/profil.jpg"
                />
                <CardContent>
                  <Typography gutterBottom component="h3" variant="h5">Library</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box ml={1}>
                  <Button variant="contained" size="small">
                    <GitHubIcon/>
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
