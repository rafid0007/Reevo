import React, { useState } from "react";
import { useRouter } from "next/router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {Avatar, Snackbar} from "@material-ui/core";

const UserMenu = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // handling logout
  const logout = () => {
    auth.signOut().then((res) => {
        // closing menubar after clicking logout
        setAnchorEl(false)
        // showing toast after logout
        setOpen(true)
    });

  };

  // handling menu bar operations
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoute = (path) => {
    handleClose();
    router.push(`${path}`);
  };

  // handling toast
  const [open, setOpen] = useState(false);

  const handleToastClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
          {user?<Avatar src={user.photoURL}/> : <PersonOutlineOutlinedIcon/>}

      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {user && <MenuItem onClick={() => handleRoute("/user/profile")}>My Account</MenuItem>}
          {user && <MenuItem onClick={logout}>Logout</MenuItem>}
          {!user&&<MenuItem onClick={() => handleRoute("/login")}>Login</MenuItem>}
          {!user&& <MenuItem onClick={() => handleRoute("/sign-up")}>Register</MenuItem>}
      </Menu>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleToastClose}>
        <Alert onClose={handleToastClose} severity="success">
          You have been successfully logged out!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserMenu;
