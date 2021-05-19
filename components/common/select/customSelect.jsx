import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 110,
      // margin: '2rem 0'
  },
}));

const CustomSelect = ({ label, optionArray, size, initialValue}) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      color="secondary"
      size={size?size:"small"}
      className={classes.formControl}
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

export default CustomSelect;
