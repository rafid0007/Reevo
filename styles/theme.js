import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e5e5e5',
      paper:'#fafafa',
    },
  },
  typography: {
    htmlFontSize: 10,
    // fontFamily: `'Montserrat', sans-serif`,
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
        },
        // body: {
        //   padding: 0,
        // },
        '*, *::before, *::after': {
          margin: 0,
          padding: 0
        }
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: "unset"
      }
    },
    MuiList: {
      root: {
        fontSize: '18px'
      }
    }
  }
});

export default theme;