import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    backgroundColor: theme.palette.common.white,
  },

  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    border: "none",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.mixins.toolbar.minHeight,
    },
    backgroundColor: theme.palette.common.white,
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemText: {
    textAlign: "center",
    // textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    fontSize: "1.8rem",
    fontWeight: 500,
  },
  ListItem: {
    margin: `2rem 0`,
  },
  ListItemH: {
    margin: `0 1rem`,
  },
  listHorizontal: {
    display: "flex",
    // flexGrow:1,
  },
  grow: {
    flexGrow: 1,
  },
  loginButton: {
    marginRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  }

}));

export default useStyles;
