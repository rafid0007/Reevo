import React from "react";
import Link from "next/link";

import {Button, Typography, Divider, TextField} from "@material-ui/core";

import CustomDatePicker from "../common/CustomDatePicker";
import CustomSelect from "../common/CustomSelect";

import styles from "./SignUpPage.module.scss";

const TextFieldProps = {
    variant:'outlined',
    color: 'secondary',
    required: true,
    fullWidth: true,
    size: 'small'
}

const SignUpPage = () => {
  return (
      <div className={styles.signUp}>
        <Typography style={{ fontSize: "2.4rem" }} paragraph variant="h6">
          CREATE YOUR REEVO ACCOUNT
        </Typography>
        <form className={styles.form}>
            <Typography variant='button'>
                PERSONAL INFORMATION
                <Divider style={{backgroundColor:'black'}}/>
            </Typography>
          <TextField type="text" id="firstName" label="First Name" name="firstName" autoComplete="first-name" autoFocus {...TextFieldProps}/>
          <TextField type="text" id="lastName" label="Last Name" name="lastName" autoComplete="last-name" {...TextFieldProps}/>
          <TextField type="text" id="phone" label="Phone Number" name="phone" autoComplete="phone" {...TextFieldProps}/>
          <CustomDatePicker size='small' label='Date of Birth'/>
          <CustomSelect optionArray={["Male", "Female", "Other"]} label="Gender" size="small"/>
          <div/>
          <Typography variant='button'>
                PASSWORD
                <Divider style={{backgroundColor:'black'}}/>
            </Typography>
          <TextField type="password" id="password" label="Password" name="password" autoComplete="password" {...TextFieldProps}/>
          <TextField type="password" id="confirmPassword" label="Confirm Password" name="confirmPassword" autoComplete="password"  {...TextFieldProps}/>
          <div/>
          <Typography variant='button'>
              ADDRESS
              <Divider style={{backgroundColor:'black'}}/>
          </Typography>
            <CustomSelect
                optionArray={["Dhaka", "Chittagong", "Sylhet","Barishal","Khulna","Rajshahi","Mymensing","Rangpur"]}
                label="Division"
                size="small"
            />
            <CustomSelect
                optionArray={["Dhaka", "Chittagong", "Sylhet","Barishal","Khulna","Rajshahi","Mymensing","Rangpur"]}
                label="Area"
                size="small"
            />
            <CustomSelect
                optionArray={["Dhaka", "Chittagong", "Sylhet","Barishal","Khulna","Rajshahi","Mymensing","Rangpur"]}
                label="City"
                size="small"
            />
            <TextField type="text" id="address" label="Address" name="address" autoComplete="address" {...TextFieldProps}/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: "2rem" }}
          >
            Sign Up
          </Button>
        </form>
        <Typography style={{ marginTop: "1.5rem" }} variant="body2">
          Already have an account?&nbsp;
          <Link href="/login">
            <a>
              <b style={{ textDecoration: "underline"}}>Login</b>
            </a>
          </Link>
        </Typography>
      </div>
  );
};

export default SignUpPage;