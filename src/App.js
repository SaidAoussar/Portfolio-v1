import React from 'react';
import { theme } from './theme';
import {ThemeProvider} from '@material-ui/core';
import NavBar from './components/layouts/NavBar';
import Hero from './components/layouts/Hero';
import './App.css';
import Projects from './components/layouts/Projects';


function App(){
    return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Hero></Hero>
        <Projects></Projects>
      </ThemeProvider>
    );
}

export default App;
