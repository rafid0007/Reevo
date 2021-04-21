import React from 'react';
import TextField from "@material-ui/core/TextField";

const CustomTextField = ({type, id, label, name, autoComplete, autoFocus}) => {
    return (
        <TextField
            variant="outlined"
            color="secondary"
            required
            fullWidth
            size="small"
            type={type}
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
          />
    );
};

export default CustomTextField;