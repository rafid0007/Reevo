import React, {useEffect} from "react";
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Paper,
  Avatar, Box
} from "@material-ui/core";
import Link from "next/link";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./LoginPage.module.scss";
import {FcGoogle} from "react-icons/fc";
import {auth, provider} from "../../firebase";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";

const LoginPage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const login = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    useEffect(() => {
      if (user) {
        router.push('/');
      }
    })

  return (
    <div className={styles.root}>
      <CssBaseline/>
      <Paper className={styles.paper} elevation={2}>
        <Container maxWidth="xs" style={{paddingTop:'2rem'}}>
          <Typography component="h1" variant="h5" align="center" style={{fontWeight:'500', marginBottom: 30}}>
            Log In
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            <Button fullWidth color="secondary" variant="outlined" startIcon={<FcGoogle/>} onClick={login}>
                Log in With Google
            </Button>
            <Typography style={{margin:"0 auto"}} variant="overline">Or</Typography>
          </Box>
          <form className={styles.form} noValidate>
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
            <div className={styles.submit}>
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

export default LoginPage;
