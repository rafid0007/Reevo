import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function CustomDatePicker({size}) {
  const classes = useStyles();

  return (
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        size={size}
        defaultValue="2017-05-24"
        variant='outlined'
        color='secondary'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}
