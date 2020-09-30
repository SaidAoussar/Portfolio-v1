import React from 'react';
import { theme } from './theme';
import {ThemeProvider} from '@material-ui/core';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Hero from './components/layouts/Hero';
import Projects from './components/layouts/Projects';
import Technology from './components/layouts/Technology'
import Email from './components/layouts/Email'
import Footer from './components/layouts/Footer'



function App(){
    return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Hero></Hero>
        <Projects></Projects>
        <Technology></Technology>
        <Email></Email>
        <Footer></Footer>
        
      </ThemeProvider>
    );
}

export default App;
