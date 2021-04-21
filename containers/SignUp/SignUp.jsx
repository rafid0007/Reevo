import React from "react";
import Link from "next/link";

import {Button, Typography, Divider} from "@material-ui/core";

import CustomDatePicker from "../../components/common/customDatePicker";
import CustomSelect from "../../components/common/select/customSelect";
import CustomTextField from "../../components/common/customTextField";

import styles from "./SignUp.module.scss";

const SignUpContainer = () => {
  return (
      <div className={styles.signUp}>
        <Typography style={{ fontSize: "2.4rem" }} paragraph variant="h6">
          CREATE YOUR NOOBSHIT ACCOUNT
        </Typography>
        <form className={styles.form}>
            <Typography variant='button'>
                PERSONAL INFORMATION
                <Divider style={{backgroundColor:'black'}}/>
            </Typography>
          <CustomTextField type="text" id="firstName" label="First Name" name="firstName" autoComplete="first-name" autoFocus/>
          <CustomTextField type="text" id="lastName" label="Last Name" name="lastName" autoComplete="last-name"/>
          <CustomTextField type="text" id="phone" label="Phone Number" name="phone" autoComplete="phone"/>
          <CustomDatePicker size='small'/>
          <CustomSelect optionArray={["Male", "Female", "Other"]} label="Gender" size="small"/>
          <div/>
          <Typography variant='button'>
                PASSWORD
                <Divider style={{backgroundColor:'black'}}/>
            </Typography>
          <CustomTextField type="password" id="password" label="Password" name="password" autoComplete="password"/>
          <CustomTextField type="password" id="confirmPassword" label="Confirm Password" name="confirmPassword" autoComplete="password"/>
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
            <CustomTextField type="text" id="address" label="Address" name="address" autoComplete="address"/>
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

export default SignUpContainer;
