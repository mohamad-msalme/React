import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
      contrastText: 'black',
    },
    secondary: {
      // This is green.A700 as hex.
      main: green['A700'],
    },
  },
});

const EcoButton = ({ color, variant}) => {
  return (
      <div>
        <Button variant= {variant} color={color}>{color}</Button>
        <ThemeProvider theme={theme}>
            <Button variant= {variant} color={color}>{color}</Button>
        </ThemeProvider>
      </div>
    
  );
}

export default EcoButton;