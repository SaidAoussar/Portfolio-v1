import React from 'react'
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  bgSection: {
    backgroundColor :theme.palette.primary.main,
    color: "white",
  },
}));

function Footer() {
  var classes = useStyles();
  return (
    <Box className={classes.bgSection} align="center" component="div" py={6} id="projects">
      <Typography variant="h6">Designed & Built Said Aoussar</Typography>
         
    </Box>
  )
}

export default Footer
