import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./layout.styles";
import CartDrawer from '../CartDrawer/cartDrawer';
import NikeLogo from "../svgIcons/nikeLogo";
import SearchBar from "../searchbar/searchbar";


function Layout(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  //******************************** Drawer Content *********************************//

  const drawer = (
    <div>
      {/*<div className={classes.toolbar} />*/}
      <List>
        {['Explore', 'Shoes', 'Clothing', 'Gears'].map((text) => (
          <ListItem className={classes.ListItem} button key={text}>
            <ListItemText disableTypography className={classes.listItemText} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/********************************* Appbar Component **********************************/}

      <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar>

            {/******* Company Logo *******/}

            <div className={`${classes.logoBox} ${classes.toolbar}`} style={{cursor:'pointer'}}>
                <NikeLogo/>
            </div>

            {/******* Menu Icon for mobile *******/}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

            {/******* Top Categories List *******/}

          <List className= {classes.listHorizontal}>
                 {['Men', 'Women', "Kid's"].map((text) => (
                 <ListItem className={classes.ListItemH} button key={text}>
                     <ListItemText disableTypography className={classes.listItemText} primary={text} />
                 </ListItem>
                 ))}
             </List>

            <div className={classes.grow}/>  {/* the gap between search bar and categories */}

            {/*************** Search bar Component ***********/}

            <SearchBar/>

            <div className={classes.grow}/>   {/* the gap between search bar and options */}

            {/******* Cart Component with drawer *******/}

            <CartDrawer/>

            {/******* User Profile Icon *******/}

            <IconButton aria-label="show 4 new mails" color="inherit" style={{marginRight:'3rem'}}>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">

        {/********************************* Drawer Component **********************************/}

        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

        {/********************************* Page Content **********************************/}

      <main className={classes.content}>
        <div className={classes.toolbar} />
          {children}
      </main>
    </div>
  );
}

export default Layout;

