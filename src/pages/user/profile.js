import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/Layout";
import UserPage from "../../components/UserPage";

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout hideSidenav>
        <UserPage />
      </Layout>
    </Fragment>
  );
}