import React from 'react';
import Layout from "../components/layout/layout/layout";
import SignUpContainer from "../containers/SignUp/SignUp";
import Head from "next/head";

const styles = {
    width: '40%',
    margin: '0 auto',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
};

const SignUp = () => {
    return (
        <>
            <Head>
                <title>NoobShit: Sign Up</title>
            </Head>
            <Layout hideSidenav>
                <section style={styles}>
                    <SignUpContainer/>
                </section>
            </Layout>
        </>
    );
};

export default SignUp;