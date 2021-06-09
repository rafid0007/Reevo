import React from 'react';
import {useRouter} from "next/router";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const UserMenu = () => {
    const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoute = (path) => {
      router.push(`${path}`);
  }

  return (
    <div>
        <IconButton onClick={handleClick}>
            <PersonOutlineOutlinedIcon/>
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleRoute('/user/profile')}>My Account</MenuItem>
          <MenuItem onClick={() => handleRoute('/login')}>Login</MenuItem>
          <MenuItem onClick={() => handleRoute('/sign-up')}>Register</MenuItem>
      </Menu>
    </div>
  );
}

export default UserMenu;