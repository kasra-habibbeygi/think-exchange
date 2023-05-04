import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import '../assets/styles/general.css';

function App() {
    const themeConfig = createTheme(getDesignTokens('light'));

    return <ThemeProvider theme={themeConfig}>hi</ThemeProvider>;
}

export default App;
