import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.mixins.toolbar.minHeight
    },
    backgroundColor: theme.palette.common.white,
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemText: {
    textAlign: 'center',
    // textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    fontSize: '1.8rem',
    fontWeight: 500
  },
  ListItem: {
    margin: `2rem 0`,
  },
  ListItemH: {
    margin: `0 1rem`,
  },
  listHorizontal: {
    display: 'flex',
    // flexGrow:1,
  },
  grow: {
    flexGrow: 1
  },
  logoBox: {
    width: `calc(${drawerWidth}px - 24px)`, // 24px margin on the left by default in the appbar component
    paddingLeft: '1rem',  // to adjust the logo position into center
    paddingTop: '1.3rem',
  },
  logoBoxHover: {
    cursor: 'pointer'
}
}));

export default useStyles;