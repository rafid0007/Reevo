import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import useInputState from "../../../hooks/useInputState";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30vw",
    [theme.breakpoints.down("md")]: {
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    padding: "0 4px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "none",
    border: `1px solid rgba(0,0,0,0.87)`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '1.4rem'
  },
  iconButton: {
    padding: '1rem',
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [value, handleChange, reset] = useInputState("");
  const router = useRouter();

  const handleSubmit = e => {
    reset();
    e.preventDefault();
    router.push({pathname: '/search', query: {keyword: value}});
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        value={value}
        placeholder="Search Products"
        inputProps={{ "aria-label": "search google maps" }}
        onChange = {handleChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
