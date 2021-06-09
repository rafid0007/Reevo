import React from "react";
import { TextField, Grid , Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
        padding: 8,
        maxWidth: 300
    }
});

const ChangePassword = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            label="Current Password"
            placeholder="*********"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            label="New Password"
            placeholder="*********"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            label="Confirm New Password"
            placeholder="*********"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="secondary">Save</Button>
          </Grid>
      </Grid>
    </div>
  );
};

export default ChangePassword;