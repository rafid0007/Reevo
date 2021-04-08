import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Badge from "@material-ui/core/Badge";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import IconButton from "@material-ui/core/IconButton";

import CartContent from "./cartContent";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  background: {
    backgroundColor: theme.palette.common.white,
  },
}));

/****************************  Material-Ui Component **************************************/

export default function SwipeableTemporaryDrawer({ cartItemCount }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)} // cmnt this line out to avoid closing cart on clicking cart
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/****************************** Cart content ******************************/}

      <CartContent />
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer("right", true)}
        edge="start"
        aria-label="show 4 new mails"
        color="inherit"
        style={{ marginRight: "1.5rem" }}
      >
        <Badge badgeContent={cartItemCount} color="secondary">
          <LocalMallOutlinedIcon />
        </Badge>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        classes={{
          paper: classes.background,
        }}
      >
        {list("right")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
