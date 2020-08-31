import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { palette } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Scrollspy from 'react-scrollspy'



const useStyles = makeStyles((theme)=>({
  primary:{
    backgroundColor: theme.palette.primary.main,
  }
}));





export function NavBar () {
   var classes = useStyles();
    return (
      <div>
        <Navbar collapseOnSelect className={`p-3 ${classes.primary}`} expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <Nav className="ml-auto"> */}
              <Scrollspy items={ ['hero'] } componentTag={Nav} className="ml-auto"> 
                <Nav.Link href="#hero">About Me</Nav.Link>
                <Nav.Link href="#features">Projects</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Scrollspy>
              {/* </Nav> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
      </div>
    )

}

export default NavBar
