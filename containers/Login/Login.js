import React from "react";
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Paper,
  Avatar
} from "@material-ui/core";
import Link from "next/link";
import classes from "./Login.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignUpContainer from "../SignUp/SignUp";

const Login = () => {

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Paper className={classes.paper} elevation={2}>
        <Container maxWidth="xs" style={{paddingTop:'2rem'}}>
          <div className={classes.avatar}>
            <Avatar>
              <LockOutlinedIcon color="inherit"/>
            </Avatar>
          </div>
          <Typography component="h1" variant="h5" align="center" style={{fontWeight:'500'}}>
            Log In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              color='secondary'
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              color='secondary'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <div className={classes.submit}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                Don't have an account?&nbsp;
                <Link href='/sign-up'>
                  <a>
                    <b style={{textDecoration:'underline'}}>Sign Up</b>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default Login;
