import React from "react";
import Layout from "../components/Layout";
import SignUpPage from "../components/SignUpPage";
import Head from "next/head";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
     width: "40%",
    [theme.breakpoints.down('md')]: {
          width: '80%'
        },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
      margin: "0 auto",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        }
}))

const SignUp = () => {
    const classes = useStyles();
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Layout hideSidenav>
        <section className={classes.root}>
          <SignUpPage />
        </section>
      </Layout>
    </>
  );
};

export default SignUp;
