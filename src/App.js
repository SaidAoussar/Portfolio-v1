import React from 'react';
import { theme } from './theme';
import {ThemeProvider} from '@material-ui/core';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Hero from './components/layouts/Hero';
import Projects from './components/layouts/Projects';
import Technology from './components/layouts/Technology'


function App(){
    return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Hero></Hero>
        <Projects></Projects>
        <Technology></Technology>
      </ThemeProvider>
    );
}

export default App;
