import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../consts/theme";
import CartProvider from "../providers/Cart";
import SortProvider from "../providers/Sort";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {

    if (user) {
      db.collection("users").doc(user.uid).set(
          {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          }, {merge: true}
      );
    }
  },[user])

  return (
    <React.Fragment>
      <Head>
        <title>Reevo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CartProvider>
        <SortProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </SortProvider>
      </CartProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};