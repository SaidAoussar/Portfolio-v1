import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Grid, Typography, Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme)=>({
  bgSection: {
    backgroundColor :'#f2f2f5',
  },
}));

function Contact() {
  var classes = useStyles();
  return (
    <div>
      <Box className={classes.bgSection} py={10} align="center" id="Contact">
        <Container>
          <Typography variant="h4">Contact </Typography>
          <Grid container  justify="center" spacing={3}>
            <Grid item xs={6}  >
              <form>
                <Box mt={3} align="left">
                  <TextField
                    placeholder="Enter your name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />

                  <TextField
                    type="email"
                    placeholder="Enter your email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    multiline
                    fullWidth
                    rows={8}
                    placeholder="Enter your message"
                    variant="outlined"
                  />
                  <Box mt={3}>
                    <Button variant="contained" color="primary" size="large">
                      Send
                    </Button>
                  </Box>
                </Box>

              </form>  
            </Grid>
          </Grid>


        </Container>
      </Box>
    </div>
  )
}

export default Contact




