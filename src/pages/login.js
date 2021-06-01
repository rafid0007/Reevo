import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/Layout";
import LoginPage from '../components/LoginPage'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Layout hideSidenav>
        <LoginPage />
      </Layout>
    </>
  );
}