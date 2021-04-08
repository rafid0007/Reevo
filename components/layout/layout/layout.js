import React, { useState, useEffect, Fragment } from "react";

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
import Link from "next/link";
import CartContext from "../../contexts/CartContext";

import CartDrawer from "../CartDrawer/cartDrawer";
// import NikeLogo from "../svgIcon Components/nikeLogo";
import SearchBar from "../searchBar/searchBar";

import layoutStyles from "./layout.styles";

const Layout = (props) => {
  const { window, children } = props;
  const classes = layoutStyles();
  const theme = useTheme();

  // cart item count start
  const [cartItemCount, setCartItemCount] = useState(0);
  const getCartItemCount = () => {
    const cart = JSON.parse(localStorage.getItem("noobshit_cart"));
    let itemCount = 0;
    if (cart) {
      if (cart.length > 0) {
        itemCount = cart.length;
      }
    }
    return itemCount;
  };

  const refreshCartItemCount = () => {
    setCartItemCount(getCartItemCount());
  };
  useEffect(() => {
    refreshCartItemCount();
  }, []);
  // cart item count end

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //******************************** Drawer Content Start *********************************//

  const drawer = (
    <div>
      <Hidden smUp>
        {" "}
        {/************** Company Logo for mobile **************/}
        <div
          className={`${classes.logoBox} ${classes.toolbar}`}
          style={{ textAlign: "center" }}
        >
          {/* <NikeLogo /> */}
        </div>
      </Hidden>

      {/************** Left categories ************/}

      <List>
        {["Explore", "Shoes", "Clothing", "Gears"].map((text, i) => (
          <Link key={i} href="/products">
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
    <Fragment>
      <CartContext.Provider
        value={{
          refreshCartItemCount,
        }}
      >
        <div className={classes.root}>
          <CssBaseline />

          {/********************************* Appbar Component Start**********************************/}

          <AppBar
            position="fixed"
            color="transparent"
            className={classes.appBar}
          >
            <Toolbar>
              {/******* Company Logo *******/}
              <Hidden xsDown>
                <div className={`${classes.logoBox} ${classes.toolbar}`}>
                  {/* <NikeLogo /> */}
                </div>
              </Hidden>
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
              <List className={classes.listHorizontal}>
                {["Men", "Women", "Kid's"].map((text) => (
                  <ListItem className={classes.ListItemH} button key={text}>
                    <ListItemText
                      disableTypography
                      className={classes.listItemText}
                      primary={text}
                    />
                  </ListItem>
                ))}
              </List>
              {/* the gap between search bar and categories */}
              <div className={classes.grow} />{" "}
              {/******* Search bar Component ******/}
              <SearchBar />
              {/* the gap between search bar and options */}
              <div className={classes.grow} />{" "}
              {/******* Cart Component with drawer *****/}
              <CartDrawer cartItemCount={cartItemCount} />
              {/******* User Profile Icon *******/}
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                style={{ marginRight: "3rem" }}
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/********************************* Appbar Component End **********************************/}

          <nav className={classes.drawer} aria-label="mailbox folders">
            {/****************************** Drawer(left) Component(mobile) Start *****************************/}

            <Hidden smUp implementation="css">
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
            </Hidden>
            {/****************************** Drawer(left) Component(mobile) End *****************************/}

            {/***************************** Drawer(left) Component(desktop) Start ***************************/}
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
            {/***************************** Drawer(left) Component(desktop) End ***************************/}
          </nav>

          {/********************************* Page Content **********************************/}

          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </CartContext.Provider>
    </Fragment>
  );
};

export default Layout;
