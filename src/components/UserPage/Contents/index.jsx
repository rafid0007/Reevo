import React, { useEffect, useState } from "react";
import { Divider, Paper, Typography } from "@material-ui/core";
import BasicInfo from "../BasicInfo";
import Address from "../Address";
import OrderHistory from "../OrderHistory";
import ChangePassword from "../ChangePassword";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flex: 1,
    padding: "16px 24px",
    marginTop: 8,
    minHeight: "70vh",
  },

  content: {
    marginTop: 12,
  },
});

const Main = ({ selectedIndex }) => {
  const classes = useStyles();
  const headers = ["Basic Info", "Address", "Order History", "Change Password"];

  const [currentHeader, setCurrentHeader] = useState(headers[0]);

  const getContent = (index) => {
    switch (index) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <Address />;
      case 2:
        return <OrderHistory />;
      case 3:
        return <ChangePassword />;
      default:
        throw new Error("Unknown step");
    }
  };

  useEffect(() => {
    if (selectedIndex !== 4) {
      setCurrentHeader(headers[selectedIndex]);
    }
  }, [selectedIndex]);

  return (
    <Paper elevation={2} className={classes.root} square>
      <Typography
        style={{ fontWeight: 500, marginBottom: "8px" }}
        variant="h6"
        color="textSecondary"
      >
        {currentHeader}
      </Typography>
      <Divider />

      <div className={classes.content}>{getContent(selectedIndex)}</div>
    </Paper>
  );
};

export default Main;