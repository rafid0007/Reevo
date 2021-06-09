import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Address = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={4}>
          <Typography variant="subtitle2" color="textPrimary">
            Shipping Address:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" color="textSecondary">
            31, ABC Street
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}>
          <Typography variant="subtitle2" color="textPrimary">
            Billing Address:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" color="textSecondary">
          31, ABC Street
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;