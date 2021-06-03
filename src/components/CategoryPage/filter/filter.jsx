import React, {useContext, useState} from "react";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {SortContext} from "../../../providers/Sort";
import {useStyles} from "./filter.styles";

const Filter = (props) => {
    const {handleFilter} = useContext(SortContext);

  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 10000,
    men: true,
    women: true,
    kid: true,
    shoes: true,
    gears: true,
    clothing: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("e.target:", e.target);
    setFilter({ ...filter, [name]: parseInt(value) });
  };
  const handleCheckBox = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };

  const handleSubmit = e => {
      e.preventDefault();
      handleFilter(filter);
  }

  const classes = useStyles(props);
  return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField
          type="number"
          value={filter.minPrice}
          placeholder="minimum price"
          label="minimum price"
          name="minPrice"
          color="secondary"
          variant="outlined"
          onChange={handleChange}
          className = {classes.textField}
        />
        <TextField
          type="number"
          value={filter.maxPrice}
          placeholder="maximum price"
          label="maximum price"
          variant="outlined"
          name="maxPrice"
          color="secondary"
          onChange={handleChange}
          className = {classes.textField}
        />
          <FormControlLabel
          control={
            <Checkbox
              checked={filter.clothing}
              onChange={handleCheckBox}
              name="clothing"
              color="secondary"
            />
          }
          label="Clothing"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.shoes}
              onChange={handleCheckBox}
              name="shoes"
              color="secondary"
            />
          }
          label="Shoes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.gears}
              onChange={handleCheckBox}
              name="gears"
              color="secondary"
            />
          }
          label="Gears"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.men}
              onChange={handleCheckBox}
              name="men"
              color="secondary"
            />
          }
          label="Men"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.women}
              onChange={handleCheckBox}
              name="women"
              color="secondary"
            />
          }
          label="Women"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.kid}
              onChange={handleCheckBox}
              name="kid"
              color="secondary"
            />
          }
          label="Kid's"
        />
          <Button type='submit' color='secondary' variant='contained' fullWidth>Filter</Button>
      </form>
  );
};

export default Filter;