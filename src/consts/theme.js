import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      // main: '#19857b',
      main: `rgba(0,0,0,0.87)`
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f8fa',
      paper:'#fafafa',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: `'Montserrat', sans-serif`,
  },
  mixins: {
    toolbar: {
      minHeight: '10rem'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%',
          '@media (max-width:900px)': {
            fontSize: '50%',
          },
          '@media (max-width:600px)': {
            fontSize: '37.5%',
          },
          scrollBehavior: 'smooth',
        },
        body: {
          padding: 0,
          fontFamily: `'Montserrat', sans-serif`
        },
        '*, *::before, *::after': {
          margin: 0,
          padding: 0
        },
        'a, a:hover, a:visited': {
          textDecoration: 'none',
          color: 'unset'
        }
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: "unset"
      }
    },
  }
});

export default theme;