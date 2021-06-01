import React, {useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Badge from "@material-ui/core/Badge";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import IconButton from "@material-ui/core/IconButton";
import CartContent from "./cartContent";
import {CartContext} from "../../../providers/Cart";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      width: 300
    }
  },
  fullList: {
    width: 'auto',
  },
  background: {
    backgroundColor: theme.palette.common.white
  },
  iconButton: {
    marginRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  }
}));

/****************************  Material-Ui Component **************************************/

export default function SwipeableTemporaryDrawer() {
  const {cartItemsCount} = useContext(CartContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)} // cmnt this line out to avoid closing Cart on clicking Cart
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <CartContent/>  {/****************************** Cart content ******************************/}
    </div>
  );

  return (
    <div>

      {['right'].map((anchor) => (

        <React.Fragment key={anchor}>
          <IconButton
              onClick={toggleDrawer(anchor, true)}
              edge="start"
              aria-label="show 4 new mails"
              color="inherit"
              className={classes.iconButton }
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            classes={{
              paper: classes.background,
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}