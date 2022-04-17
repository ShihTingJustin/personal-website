import { createTheme } from '@material-ui/core/styles';

const cssVariables = {
  textGlow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
  web3Gradient: 'linear-gradient(to right, #30cfd0, #c43ad6)',
  web3Background:
    'radial-gradient(circle closest-corner at -5% 25%, rgba(40, 72, 122, 0.85), transparent), radial-gradient(circle closest-corner at 120% 60%, rgba(138, 41, 129, 0.7),transparent)',
};

// Create a theme instance.
const theme = createTheme({
  palette: {
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
          backgroundColor: '#07050f',
          backgroundImage: cssVariables.web3Background,
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
