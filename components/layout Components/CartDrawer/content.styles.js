// Don't be confused!!! This component has no use in the project right now!!! use this styling to customize drawer later


import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 150;
// const themeToolbar = theme.mixins.toolbar;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // necessary for content to be below app bar
  toolbar: {
    minHeight: theme.mixins.toolbar.minHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'absolute',
    backgroundColor: '#fff',
    border: 'none'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // list: {
  //   marginTop: '0rem'
  // },
  listItemText: {
    textAlign: 'center',
    textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    fontSize: '1.8rem',
  },
  ListItem: {
    margin: `2rem 0`,
  },
  ListItemH: {
    margin: `0 1rem`,
  },
  active: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  logo: {
    display: 'block',
  },
  listHorizontal: {
    display: 'flex',
    // flexGrow:1,
  },
  grow: {
    flexGrow: 1
  },
  textField: {
    color: 'red',
    borderRadius: 40
  }
}));
