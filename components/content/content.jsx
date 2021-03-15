import React, {Children} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import {useStyles} from "./content.styles";
import NikeLogo from '../../public/images/Nike_logo.svg';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /************************************ Drawer Content ****************************************/

  const drawer = (
    <div>
        <div className={classes.toolbar} >
            <NikeLogo className={classes.logo} mx="auto" height={70} width={70}/>
        </div>

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

      {/********************************* AppBar ****************************/}

      <AppBar position='absolute' color='transparent' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
            <List className= {classes.listHorizontal}>
                {['Men', 'Women', "Kid's"].map((text) => (
                <ListItem className={classes.ListItemH} button key={text}>
                    <ListItemText disableTypography className={classes.listItemText} primary={text} />
                </ListItem>
                ))}
            </List>
            <div className={classes.grow}/>
            <div style={{width: '30rem'}}>
                <Autocomplete
                id="free-solo-dem"
                freeSolo
                options={['Explore', 'Shoes', 'Clothing', 'Gears'].map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size={'medium'}
                        placeholder="search"
                        margin="none"
                        variant='standard'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                    />
                )}
              />
            </div>
        </Toolbar>
      </AppBar>

      {/************************************* Drawer ***********************************/}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            ModalProps= {{
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

      {/********************************** Page Content *********************************/}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
