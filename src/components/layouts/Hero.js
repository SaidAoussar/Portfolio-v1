import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, Box, Avatar, Button, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  white: {
    color : 'white'
  },
  large: {
    height: '150px',
    width: '150px',
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

}));



export function Hero(){
  var classes = useStyles();
    return (
      <div>
        <div className={classes.heroContent} id="hero">
          <Container maxWidth="md">
            <Box component="div" align="center" mb={2}>
             <Avatar src="/assets/profil.jpg" className={classes.large} />
            </Box>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Said Aoussar
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hey! I'm a web developer with a passion for front end development and back end developer.
            </Typography>
            <Box  component="div" align="center" className={classes.heroButtons}>
              <Button variant="contained" color="primary" size="large">
                more
              </Button>
              <Box bgcolor="primary.main" m={3} p={3} className={classes.white}>said aoussar</Box>
            </Box>
          </Container>
        </div>
      </div>
    )
  }


export default Hero;
