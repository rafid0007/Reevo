import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/layout/layout";
import LoginContainer from '../containers/Login/Login'

export default function Login() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LoginContainer />
      </Layout>
    </Fragment>
  );
}
