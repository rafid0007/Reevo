import React, {useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {SortContext} from "../../../providers/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props) => props.bgColor,
    fontSize: "1.6rem",
    display: "flex",
      alignItems: 'flex-start',
    flexDirection: "column",
    borderRadius: "5px",
    padding: "1.2rem 1rem",
    height: "100vh", //temporary
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textField: {
      minWidth: '5rem',
      "&:nth-child(2)": {
          marginTop: '2rem',
          marginBottom: '2rem',
      }
  },
}));

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
  const handleCheck = (e) => {
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
              onChange={handleCheck}
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
              onChange={handleCheck}
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
              onChange={handleCheck}
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
              onChange={handleCheck}
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
              onChange={handleCheck}
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
              onChange={handleCheck}
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
