import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// material ui imports
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import CartDrawer from "./CartDrawer/cartDrawer";

import SearchBar from "./searchBar/searchBar";
import layoutStyles from "./Layout.styles";
import {Divider} from "@material-ui/core";
import Logo from "./Logo";
import {ArrowDropDown} from "@material-ui/icons";

const Layout = ({ window, children, hideSidenav }) => {
  const classes = layoutStyles();
  const theme = useTheme();
  const router = useRouter();
  const category = router.query.category;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //******************************** Drawer Content Start *********************************//

  const drawer = (
    <div>
      <Hidden mdUp>
        {" "}
        {/************** Company Logo for mobile **************/}
        <Logo imageUrl={"/logo.svg"}/>
      </Hidden>

      {/************** Left categories ************/}

      {/**** for mobile ****/}

      <Hidden mdUp>
        <List>
            {["Explore", "Men", "Women", "Kid's"].map((text, index) => (
              <Link
                key={index}
                href={
                  text === "Explore"
                    ? "/"
                    : `/categories/${text.toLowerCase()}`
                }
              >
                <a>
                  <ListItem className={classes.ListItem} button key={text}>
                    <ListItemText
                      disableTypography
                      className={classes.listItemText}
                      primary={text}
                    />
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
        <Divider/>
      </Hidden>

      <List>
        {["shoes", "clothing", "gears"].map((text, index, array) => (
          <Link
            key={index}
            href={
              category && !array.includes(category)
                ? `/categories/${category}/${text.toLowerCase()}`
                : `/categories/${text.toLowerCase()}`
            }
          >
            <a>
              <ListItem className={classes.ListItem} button key={text}>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={text}
                />
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    </div>
  );

  //******************************** Drawer Content End *********************************//

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />

        {/********************************* Appbar Component Start**********************************/}

        <AppBar position="fixed" color="transparent" className={classes.appBar}>
          <Toolbar>
            {/******* Menu Icon for mobile *******/}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Hidden xsDown>
                <ArrowDropDown fontSize='large'/>
              </Hidden>
              <Hidden smUp>
                <MenuIcon fontSize='large'/>
              </Hidden>
            </IconButton>
            {/******* Company Logo Desktop *******/}
            <Hidden smDown>
              <Logo imageUrl={"/logo.svg"}/>
            </Hidden>
            <Hidden xsDown mdUp>
              <Logo imageUrl={"/logo.svg"} height={30} width={30}/>
            </Hidden>

            {/******* Top Categories List *******/}
            <Hidden smDown>
            <List className={classes.listHorizontal}>
              {["Explore", "Men", "Women", "Kid's"].map((text, index) => (
                <Link
                  key={index}
                  href={
                    text === "Explore"
                      ? "/"
                      : `/categories/${text.toLowerCase()}`
                  }
                >
                  <a>
                    <ListItem className={classes.ListItem} button key={text}>
                      <ListItemText
                        disableTypography
                        className={classes.listItemText}
                        primary={text}
                      />
                    </ListItem>
                  </a>
                </Link>
              ))}
            </List>
              </Hidden>
            {/* the gap between search bar and categories */}
            <div className={classes.grow} />{" "}
            {/******* Search bar Component ******/}
            <SearchBar/>
            {/* the gap between search bar and options */}
            <div className={classes.grow} />{" "}
            {/******* Cart Icon with drawer onClick *****/}
            <CartDrawer />
            {/******* User Profile Icon *******/}
            <Link href="/login">
              <a>
                <IconButton
                  aria-label="show 4 new mails"
                  color="inherit"
                  className={classes.loginButton}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </a>
            </Link>
          </Toolbar>
        </AppBar>

        {/********************************* Appbar Component End **********************************/}

        {/****************************** Drawer(left) Component(mobile) Start *****************************/}
        <Hidden smUp implementation="css">
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
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
          </nav>
        </Hidden>
        {/****************************** Drawer(left) Component(mobile) End *****************************/}

        {/***************************** Drawer(left) Component(desktop) Start ***************************/}
        {!hideSidenav ? (
          <Hidden smDown implementation="css">
            <nav className={classes.drawer} aria-label="mailbox folders">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </nav>
          </Hidden>
        ) : null}
        {/***************************** Drawer(left) Component(desktop) End ***************************/}

        {/********************************* Page Content **********************************/}

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
