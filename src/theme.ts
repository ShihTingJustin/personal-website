import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    textGlow: string;
    web3Gradient: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    textGlow: string;
    web3Gradient: string;
  }
}

const cssVariables = {
  textGlow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
  web3Gradient: 'linear-gradient(to right, #30cfd0, #c43ad6)',
};

// Create a theme instance.
const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2c2c2d',
    },
    secondary: {
      main: '#008f79',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontWeight: 200,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        },
      },
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //   },
  // },
  ...cssVariables,
});

export default theme;
