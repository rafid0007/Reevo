import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import useInputState from "../../../hooks/useInputState";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 110,
    // margin: '2rem 0'
  },
}));

const CustomSelect = ({ label, optionArray, size, variant }) => {
  const styles = useStyles();
  const [value, handleChange] = useInputState("");

  return (
    <FormControl
      variant={variant}
      color="secondary"
      size={size}
      className={styles.formControl}
    >
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="simple-select-outlined-label"
        id="simple-select-outlined"
        value={value}
        onChange={handleChange}
        label={label}
      >
        {optionArray.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  optionArray: PropTypes.array.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
};

CustomSelect.defaultProps = {
  label: "Label",
  size: "small",
  variant: "outlined",
};

export default CustomSelect;
