import React from 'react';
import { theme } from './theme';
import {ThemeProvider} from '@material-ui/core';
import NavBar from './components/layouts/NavBar';
import Hero from './components/layouts/Hero'
import './App.css';


function App(){
    return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Hero></Hero>
      </ThemeProvider>
    );
}

export default App;
