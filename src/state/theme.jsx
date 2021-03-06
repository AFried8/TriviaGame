import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
      primary: {
        main: '#0c154a',
        light: '#ccd3fc',
        greyed: '#dbdded'
      },
      secondary: {
        main: '#f50057',
      },
      accent: {
        main: '#CCFF33',
        light: '#defa89'
      },
  
      success: {
        main: '#4caf50',
        light: '#7FC782'
      },
  
      error: {
        main: '#d32f2f',
        light: '#ef5350'
      },

      grey: {
        light: 'D3D3D3'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});