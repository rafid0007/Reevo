import React, { useState } from "react";
import { Container, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideNav from "./Navigation";
import Content from "./Contents";

const useStyles = makeStyles({
    root:{
        display: 'flex',
        padding: '12px 0'
    }
})

const UserPage = () => {
    const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Hidden smDown>
          <SideNav
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Hidden>
        <Content selectedIndex={selectedIndex} />
      </div>
    </Container>
  );
};

export default UserPage;