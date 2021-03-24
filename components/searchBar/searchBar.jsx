import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

{/********************* Material-Ui Component *******************/}

const SearchBar = () => {
    return(
        <div style={{width: '30rem'}}>
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