import React from 'react'
import {Button,Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  btn: {
    '&:hover': {
      color:"white",
    },
  },
  bgSection: {
    backgroundColor :'#f2f2f5',
  },
}));

export default function Email() {
  var classes = useStyles();
  return (
    <div>
      <Box py={10} align="center" className={classes.bgSection} id="Email">
        <Button className={classes.btn} href="mailto:saidaoussar1998@gmail.com" variant="contained" color="primary" size="large">
          Contact My
        </Button>
      </Box>
    </div>
  )
}

