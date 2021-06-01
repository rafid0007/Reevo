import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '30vw',
        [theme.breakpoints.down('md')]: {
            width: '20vw'
        },
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        },

    },
})
);

{/********************* Material-Ui Component *******************/}

const SearchBar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Autocomplete
            id="free-solo-dem"
            freeSolo
            options={['Explore', 'Shoes', 'Clothing', 'Gears'].map((option) => option)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    size={'small'}
                    placeholder="search"
                    margin="none"
                    color='secondary'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                       </InputAdornment>
                      ),
                     }}
                />
            )}
          />
        </div>
    );
};

export default SearchBar;