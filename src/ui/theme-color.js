import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#192d3e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#61dafb',
      contrastText: '#fff',
    },
    lightBlue: {
      main: '#d3ebff',
      contrastText: '#000',
    },
    white: {
      main: '#ffffff',
      contrastText: '#4527a0',
    },
    error: {
      main: '#dd4952',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#a4a4a4',
      contrastText: '#fff',
    },
    success: {
      main: '#66bb6a',
    },
    lightgrey: {
      main: '#F7F7F7',
      contrastText: '#000',
    },
    blue: {
      main: '#1E90FF',
      contrastText: '#fff',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      grey: '#4C4C4C',
      backgroundgrey: '#F7F7F7',
      lightgrey: '#A4A4A4',
      shadow: 'rgba(0,0,0,.16)',
      lightshadow: 'rgba(112,112,112,.06)'
    }
  },
});  