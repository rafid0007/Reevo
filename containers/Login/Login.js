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
  Avatar,
} from "@material-ui/core";
import Link from "next/link";
import classes from "./Login.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={2}>
        <Container maxWidth="xs">
          <div className={classes.avatar}>
            <Avatar>
              <LockOutlinedIcon color="inherit" />
            </Avatar>
          </div>
          <Typography component="h1" variant="h5" align="center" style={{fontWeight:'500'}}>
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
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
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div className={classes.submit}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
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
