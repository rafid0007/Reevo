import React from "react";
import { useRouter } from "next/router";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {
  PersonOutline,
  ExitToApp,
  LockOpen,
  ListAlt,
  PersonPinCircleOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        marginTop: 8,
        marginRight: 16,
        padding: 16,
        width: 280,
        height: '100%',
        minHeight: '70vh',
    }
})

const SideNav = ({ selectedIndex, setSelectedIndex }) => {

    const classes = useStyles();
  const router = useRouter();


  return (
    <Paper className={classes.root} elevation={2} square>
      <List dense>
        <ListItem
          button
          disableRipple
          selected={selectedIndex === 0}
          onClick={() => {
            setSelectedIndex(0);
          }}
        >
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
          <ListItemText primary="Basic Info" />
        </ListItem>

        <ListItem
          button
          disableRipple
          selected={selectedIndex === 1}
          onClick={() => {
            setSelectedIndex(1);
          }}
        >
          <ListItemIcon>
            <PersonPinCircleOutlined />
          </ListItemIcon>
          <ListItemText primary="Address" />
        </ListItem>

        <ListItem
          button
          disableRipple
          selected={selectedIndex === 2}
          onClick={() => {
            setSelectedIndex(2);
          }}
        >
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Order History" />
        </ListItem>

        <ListItem
          button
          disableRipple
          selected={selectedIndex === 3}
          onClick={() => {
            setSelectedIndex(3);
          }}
        >
          <ListItemIcon>
            <LockOpen />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>

        <ListItem
          button
          disableRipple
          selected={selectedIndex === 4}
          onClick={() => {
            router.push('/')
          }}
        >
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default SideNav;