import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Proptypes, {oneOf} from 'prop-types'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function CustomDatePicker({label, size, defaultValue, variant, color}) {
  const classes = useStyles();

  return (
      <TextField
        id="date"
        label={label}
        type="date"
        size={size}
        defaultValue={defaultValue}
        variant={variant}
        color={color}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

CustomDatePicker.prototype = {
    size: Proptypes.oneOf(['small', 'medium']),
    defaultValue: Proptypes.string,
    label: Proptypes.string,
    variant: oneOf(['outlined', 'filled', 'standard']),
    color: oneOf(['primary', 'secondary'])
}

CustomDatePicker.defaultProps = {
    size: 'small',
    defaultValue: "2021-05-24",
    label: 'Label',
    variant: 'outlined',
    color: 'primary'
}