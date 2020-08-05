import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BannerSearch from '../components/BannerSearch';

const Home = (props) => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <BannerSearch />
            </main>
        </Layout>
    )
}
export default Home;