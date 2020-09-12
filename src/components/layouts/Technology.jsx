import React from 'react'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";







import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme)=>({
  iconLarge: {
    fontSize: '50px',
  }
}));

function Technology() {
    var classes = useStyles();
    return (
        <Box py={10} align="center" id="technologies">
          <Container>
            <Box mb={4}>
              <Typography variant="h4">Some technologies I've worked with:</Typography>
            </Box>
            <Box mb={1}>
              <Grid container spacing={3} >
                <Grid className={classes.iconLarge} item xs={3}><SiHtml5/></Grid>
                <Grid className={classes.iconLarge} item xs={3}><FaCss3Alt/></Grid>
                <Grid className={classes.iconLarge} item xs={3}><SiJavascript/></Grid>
                <Grid className={classes.iconLarge} item xs={3}><SiReact/></Grid>
              </Grid>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={3} sm={false}></Grid>
              <Grid className={classes.iconLarge} item xs={3}><FaLaravel/></Grid>
              <Grid className={classes.iconLarge} item xs={3}><SiFlutter/></Grid>
            </Grid>
          </Container>
        </Box>
    )
}

export default Technology

